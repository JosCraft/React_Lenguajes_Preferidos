// src/pages/Cualitativa.js

import React, { useEffect, useState } from 'react';
import Base from '../components/layouts/Base';
import { useParams } from 'react-router-dom';
import CualitativaT from '../components/table/Cualitativo';
import BarChart from '../components/bar/BarChart';
import HorizontalBarChart from '../components/bar/HorizontalBarChart';
import PieChart from '../components/bar/PieChart';

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
  porcentual}) => {

  const { id } = useParams();


  return (
    <div>
      <CualitativaT counts={counts} frequencies={frequencies} porcentual={porcentual} />      
    </div>
  );
};

export default Continua;
