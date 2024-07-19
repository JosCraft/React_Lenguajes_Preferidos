import React, { useEffect, useState } from 'react';
import { fetchData, processData, calcularFrecuencia, calcularFrecuenciaPorcentual } from './dataService';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const TablaYGraficaDoble = ({ preguntaId1, preguntaId2 }) => {
  const [data, setData] = useState([]);
  const [frecuencias1, setFrecuencias1] = useState({});
  const [porcentajes1, setPorcentajes1] = useState({});
  const [frecuencias2, setFrecuencias2] = useState({});
  const [porcentajes2, setPorcentajes2] = useState({});

  useEffect(() => {
    const obtenerDatos = async () => {
      const data = await fetchData();
      setData(data);

      // Procesar y calcular para la primera pregunta
      const counts1 = processData(data, preguntaId1);
      setFrecuencias1(calcularFrecuencia(counts1));
      setPorcentajes1(calcularFrecuenciaPorcentual(counts1));

      // Procesar y calcular para la segunda pregunta
      const counts2 = processData(data, preguntaId2);
      setFrecuencias2(calcularFrecuencia(counts2));
      setPorcentajes2(calcularFrecuenciaPorcentual(counts2));
    };

    obtenerDatos();
  }, [preguntaId1, preguntaId2]);

  // Datos para la primera gráfica
  const labels1 = Object.keys(frecuencias1);
  const dataForChart1 = {
    labels: labels1,
    datasets: [
      {
        label: 'Frecuencia Pregunta 1',
        data: Object.values(frecuencias1),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Datos para la segunda gráfica
  const labels2 = Object.keys(frecuencias2);
  const dataForChart2 = {
    labels: labels2,
    datasets: [
      {
        label: 'Frecuencia Pregunta 2',
        data: Object.values(frecuencias2),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h3>Tabla de Doble Entrada para Pregunta 1 y Pregunta 2</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Respuesta Pregunta 1</th>
            <th>Frecuencia Pregunta 1</th>
            <th>Porcentaje Pregunta 1</th>
            <th>Respuesta Pregunta 2</th>
            <th>Frecuencia Pregunta 2</th>
            <th>Porcentaje Pregunta 2</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(frecuencias1).map((respuesta1) => (
            <tr key={respuesta1}>
              <td>{respuesta1}</td>
              <td>{frecuencias1[respuesta1]?.toFixed(2) || 0}</td>
              <td>{porcentajes1[respuesta1] || '0%'}
              </td>
              <td>{respuesta1}</td>
              <td>{frecuencias2[respuesta1]?.toFixed(2) || 0}</td>
              <td>{porcentajes2[respuesta1] || '0%'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Gráfica de Frecuencia - Pregunta 1</h3>
      <Bar data={dataForChart1} />
      <h3>Gráfica de Frecuencia - Pregunta 2</h3>
      <Bar data={dataForChart2} />
    </div>
  );
};

export default TablaYGraficaDoble;
