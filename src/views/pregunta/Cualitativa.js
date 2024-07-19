// src/pages/Cualitativa.js

import React, { useEffect, useState } from 'react';
import Base from '../components/layouts/Base';
import { useParams } from 'react-router-dom';
import CualitativaT from '../components/table/Cualitativo';
import BarChart from '../components/bar/BarChart';
import HorizontalBarChart from '../components/bar/HorizontalBarChart';
import PieChart from '../components/bar/PieChart';
import CalculosEstadisticos from './CalculosEstadisticos';
const Cualitativa = ({ counts, 
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
  porcentual ,}) => {

  const { id } = useParams();


  return (
    <div>

<CualitativaT counts={counts} frequencies={frequencies} porcentual={porcentual} />
<div className="mt-4">
              <CalculosEstadisticos
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
                isQualitative={true}
              />
            </div>
      <BarChart counts={counts} questionId={id} name='Absoluta' />
      <BarChart counts={frequencies} questionId={id}  name='Relativa'/>
      <HorizontalBarChart counts={porcentual} questionId={id} />
      <PieChart counts={counts} questionId={id} />
    </div>
  );
};

export default Cualitativa;
