import React from 'react';
import { useParams } from 'react-router-dom';
import CuantitativoDiscreto from '../components/table/CuantitativoDiscreto';
import BarChart from '../components/bar/BarChart';
import HorizontalBarChart from '../components/bar/HorizontalBarChart';

const Discreta = ({
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
    porcentual 
 }) => {

  const { id } = useParams();

  return (
    <div>
      <CuantitativoDiscreto
        counts={counts} 
        acumuladaMenor={acumuladaMenor}
        acumuladaMayor={acumuladaMayor}
        porcentajeAcumuladaMenor={porcentajeAcumuladaMenor}
        porcentajeAcumuladaMayor={porcentajeAcumuladaMayor}
        frequencies={frequencies} 
        acumuladaRelativaMenor={acumuladaRelativaMenor}
        acumuladaRelativaMayor={acumuladaRelativaMayor}
        porcentajeAcumuladaRelativaMenor={porcentajeAcumuladaRelativaMenor}
        porcentajeAcumuladaRelativaMayor={porcentajeAcumuladaRelativaMayor}
        relativaMenor={relativaMenor}
        relativaMayor={relativaMayor}
        porcentajeMenor={porcentajeMenor}
        porcentajeMayor={porcentajeMayor}
        porcentual={porcentual}
      />
      <BarChart counts={counts} questionId={id} />
      <BarChart counts={frequencies} questionId={id} />
      <HorizontalBarChart counts={porcentual} questionId={id} />
    </div>
  );
};

export default Discreta;
