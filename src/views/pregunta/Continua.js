// src/pages/Continua.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CuantitativoContinuo from '../components/table/CuantitativoContinuo';
import Histogram from '../components/bar/Histogram';
import Linechart from '../components/bar/Linechart';
import LineChart from '../components/bar/LineChart';
import PuntoEquilibrioChart from '../components/bar/PuntoEquilibrioChart ';
import CalculoContinua from './CalculoContinua';

const Continua = ({
  counts,
  acumuladaMenor,
  acumuladaMayor,
  porcentajeAcumuladaMenor,
  porcentajeAcumuladaMayor,
  frequencies,
  acumuladaRelativaMenor,
  acumuladaRelativaMayor,
  porcentajeAcumuladaRelativaMenor,
  porcentajeAcumuladaRelativaMayor,
  relativaMenor,
  relativaMayor,
  porcentajeMenor,
  porcentajeMayor,
  porcentual,
  items
}) => {
  const { id } = useParams();
  items = ['0', '1', '3', '5', '10'];
  useEffect(() => {
    console.log('Counts:', counts);
  }, [counts]);
  // Convertir items en un array de valores finales de intervalos
 const itemArray = items;  // ['0', '1', '3', '5', '10']
  
 // Convertir counts en un formato adecuado para el histograma
 const areaCounts = itemArray.reduce((acc, item, index) => {
   if (index > 0) {
     acc[item] = counts[`${itemArray[index - 1]}-${item}`] || 0;  // Usa los intervalos como claves en counts
   }
   return acc;
 }, {});

 // Asegura que el primer valor '0' tenga una frecuencia de 0
 if (!areaCounts['0']) {
   areaCounts['0'] = counts[`0-${itemArray[0]}`] || 0;
 }
 
    
  // Preparar los datos para el histograma
  const histogramCounts = itemArray.slice(1).reduce((acc, item, index) => {
    acc[item] = counts[`${itemArray[index]}-${item}`] || 0;  // Usa los intervalos como claves en counts
    return acc;
  }, {});

  return (
    <div>
      <CuantitativoContinuo
        counts={counts}
        frequencies={frequencies}
        porcentual={porcentual}
        acumuladaMenor={acumuladaMenor}
        acumuladaMayor={acumuladaMayor}
        porcentajeAcumuladaMenor={porcentajeAcumuladaMenor}
        porcentajeAcumuladaMayor={porcentajeAcumuladaMayor}
        acumuladaRelativaMenor={acumuladaRelativaMenor}
        acumuladaRelativaMayor={acumuladaRelativaMayor}
        porcentajeAcumuladaRelativaMenor={porcentajeAcumuladaRelativaMenor}
        porcentajeAcumuladaRelativaMayor={porcentajeAcumuladaRelativaMayor}
        relativaMenor={relativaMenor}
        relativaMayor={relativaMayor}
        porcentajeMenor={porcentajeMenor}
        porcentajeMayor={porcentajeMayor}
      />
      <CalculoContinua counts={counts} frequencies={frequencies} porcentual={porcentual}/>
      <Histogram items={items} counts={areaCounts} />
      <Linechart items={items} counts={counts} />
      <LineChart counts={acumuladaMenor} questionId={id} />
      <LineChart counts={acumuladaMayor} questionId={id} />  
      <PuntoEquilibrioChart countsMenor={acumuladaMenor} countsMayor ={acumuladaMayor} questionId={id} />   
    </div>
  );
};

export default Continua;
