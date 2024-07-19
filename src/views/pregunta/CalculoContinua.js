import React, { useState } from 'react';

const CalculoContinua = ({ counts }) => {
  const [result, setResult] = useState({ mean: undefined, median: undefined, mode: undefined });
  const [activeTab, setActiveTab] = useState('mean'); // Default to 'mean' tab

  const calculateMean = () => {
    if (!counts || Object.keys(counts).length === 0) return;

    const intervals = Object.keys(counts);
    const frequencies = intervals.map(interval => counts[interval]);

    const midpoints = intervals.map(interval => {
      const [low, high] = interval.split('-').map(Number);
      return (low + high) / 2;
    });

    const weightedSum = midpoints.reduce((acc, midpoint, index) => acc + midpoint * frequencies[index], 0);
    const totalObservations = frequencies.reduce((acc, freq) => acc + freq, 0);

    const mean = weightedSum / totalObservations;

    setResult(prevResult => ({
      ...prevResult,
      mean,
    }));
  };

  const calculateMedian = () => {
    if (!counts || Object.keys(counts).length === 0) return;

    const intervals = Object.keys(counts);
    const frequencies = intervals.map(interval => counts[interval]);

    const cumulativeFrequencies = frequencies.reduce((acc, freq) => {
      if (acc.length === 0) acc.push(freq);
      else acc.push(acc[acc.length - 1] + freq);
      return acc;
    }, []);

    const totalObservations = cumulativeFrequencies[cumulativeFrequencies.length - 1];
    const medianIndex = totalObservations / 2;
    const medianIntervalIndex = cumulativeFrequencies.findIndex(cumFreq => cumFreq >= medianIndex);

    const medianInterval = intervals[medianIntervalIndex];
    const medianFrequency = frequencies[medianIntervalIndex];
    const cumulativeBeforeMedian = medianIntervalIndex === 0 ? 0 : cumulativeFrequencies[medianIntervalIndex - 1];

    const [low, high] = medianInterval.split('-').map(Number);
    const intervalWidth = high - low;

    const median = low + ((medianIndex - cumulativeBeforeMedian) / medianFrequency) * intervalWidth;

    setResult(prevResult => ({
      ...prevResult,
      median,
    }));
  };

  const calculateMode = () => {
    if (!counts || Object.keys(counts).length === 0) return;

    const intervals = Object.keys(counts);
    const frequencies = intervals.map(interval => counts[interval]);

    const maxFreq = Math.max(...frequencies);
    const modeInterval = intervals[frequencies.indexOf(maxFreq)];

    setResult(prevResult => ({
      ...prevResult,
      mode: modeInterval,
    }));
  };

  return (
    <div className="card text-center mt-4">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'mean' ? 'active' : ''}`}
              href="#"
              onClick={() => setActiveTab('mean')}
            >
              Calcular Media
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'median' ? 'active' : ''}`}
              href="#"
              onClick={() => setActiveTab('median')}
            >
              Calcular Mediana
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'mode' ? 'active' : ''}`}
              href="#"
              onClick={() => setActiveTab('mode')}
            >
              Calcular Moda
            </a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">Calcula Media, Mediana y Moda</h5>
        <div className="mt-4">
          {activeTab === 'mean' && (
            <>
              <button onClick={calculateMean} className="btn btn-primary">Calcular Media</button>
              <div className="mt-4">
                {result.mean !== undefined && (
                  <div>
                    <p>Media: {result.mean}</p>
                    <p>
                      Fórmula: {`(Suma de (punto medio * frecuencia)) / (Número total de observaciones)`}
                      <br />
                      Suma: {Object.keys(counts).map(interval => {
                        const [low, high] = interval.split('-').map(Number);
                        const midpoint = (low + high) / 2;
                        return midpoint * counts[interval];
                      }).reduce((acc, value) => acc + value, 0)}
                      <br />
                      Número total de observaciones: {Object.values(counts).reduce((acc, freq) => acc + freq, 0)}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
          {activeTab === 'median' && (
            <>
              <button onClick={calculateMedian} className="btn btn-secondary">Calcular Mediana</button>
              <div className="mt-4">
                {result.median !== undefined && (
                  <div>
                    <p>Mediana: {result.median}</p>
                    <p>
                      Fórmula: {`(Valor en el centro de los datos ordenados)`}
                      <br />
                      Valores ordenados: {Object.keys(counts).map(interval => {
                        const [low, high] = interval.split('-').map(Number);
                        const midpoint = (low + high) / 2;
                        return Array(counts[interval]).fill(midpoint).join(', ');
                      }).join(', ')}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
          {activeTab === 'mode' && (
            <>
              <button onClick={calculateMode} className="btn btn-success">Calcular Moda</button>
              <div className="mt-4">
                {result.mode !== undefined && (
                  <div>
                    <p>Moda: {result.mode}</p>
                    <p>
                      Fórmula: {`(Intervalo con la mayor frecuencia)`}
                      <br />
                      Frecuencia máxima: {Math.max(...Object.values(counts))}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        <div className="mt-4">
          <p>Datos en counts: {JSON.stringify(counts)}</p>
        </div>
      </div>
    </div>
  );
};

export default CalculoContinua;
