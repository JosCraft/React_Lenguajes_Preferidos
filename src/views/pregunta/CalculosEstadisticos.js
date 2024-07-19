import React, { useState } from 'react';

const CalculosEstadisticos = ({
  counts, frequencies, porcentual, acumuladaMenor, acumuladaMayor, porcentajeAcumuladaMenor, porcentajeAcumuladaMayor, acumuladaRelativaMenor, acumuladaRelativaMayor, porcentajeAcumuladaRelativaMenor, porcentajeAcumuladaRelativaMayor, relativaMenor, relativaMayor, porcentajeMenor, porcentajeMayor, isQualitative 
}) => {
  const [result, setResult] = useState({});
  const [currentCalculation, setCurrentCalculation] = useState('');

  const calculateMean = () => {
    const values = Object.keys(frequencies).map(Number);
    const totalSum = values.reduce((acc, value) => acc + value * frequencies[value], 0);
    const totalCount = values.reduce((acc, value) => acc + frequencies[value], 0);
    const mean = totalSum / totalCount;

    setResult({ mean, totalSum, totalCount });
    setCurrentCalculation('mean');
  };

  const calculateMedian = () => {
    const sortedData = [];
    Object.keys(frequencies).forEach(value => {
      for (let i = 0; i < frequencies[value]; i++) {
        sortedData.push(Number(value));
      }
    });
    sortedData.sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);
    const median = sortedData.length % 2 !== 0 ? sortedData[mid] : (sortedData[mid - 1] + sortedData[mid]) / 2;

    setResult({ median, sortedData });
    setCurrentCalculation('median');
  };

  const calculateMode = () => {
    const frequencyMap = { ...frequencies };
    const maxFrequency = Math.max(...Object.values(frequencyMap));
    const modes = Object.keys(frequencyMap).filter(value => frequencyMap[value] === maxFrequency);

    setResult({ modes, frequencyMap, maxFrequency });
    setCurrentCalculation('mode');
  };

  return (
    <div className="card text-center mt-4">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            {!isQualitative && <a className="nav-link" href="#" onClick={calculateMean}>Calcular Media</a>}            
          </li>
          <li>
            {!isQualitative && <a className="nav-link" href="#" onClick={calculateMedian}>Calcular Mediana</a>}
          </li>
          <li>
          <a className="nav-link" href="#" onClick={calculateMode}>Calcular Moda</a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">Calcula Media, Mediana y Moda</h5>
        <div className="mt-4">
          {currentCalculation === 'mean' && result.mean !== undefined && (
            <>
              <p className="card-text">Media: {result.mean}</p>
              <p className="card-text">Paso 1: Suma total = {result.totalSum}</p>
              <p className="card-text">Paso 2: Número total de observaciones = {result.totalCount}</p>
              <p className="card-text">Paso 3: Media = Suma total / Número total de observaciones = {result.totalSum} / {result.totalCount} = {result.mean}</p>
            </>
          )}
          {currentCalculation === 'median' && result.median !== undefined && (
            <>
              <p className="card-text">Mediana: {result.median}</p>
              <p className="card-text">Paso 1: Datos ordenados = {result.sortedData.join(', ')}</p>
              <p className="card-text">Paso 2: {result.sortedData.length % 2 !== 0 ? `Mediana = Valor en la posición central = ${result.median}` : `Mediana = (Valor en la posición ${Math.floor(result.sortedData.length / 2)} + Valor en la posición ${Math.floor(result.sortedData.length / 2) + 1}) / 2 = ${result.median}`}</p>
            </>
          )}
          {currentCalculation === 'mode' && result.modes !== undefined && (
            <>
              <p className="card-text">Moda(s): {result.modes.join(', ')}</p>
              <p className="card-text">Paso 1: Frecuencias = {JSON.stringify(result.frequencyMap)}</p>
              <p className="card-text">Paso 2: Frecuencia máxima = {result.maxFrequency}</p>
              <p className="card-text">Paso 3: Moda(s) = {result.modes.join(', ')}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculosEstadisticos;
