import React, { useEffect, useState } from 'react';
import Base from '../components/layouts/Base';
import { useParams } from 'react-router-dom';
import db_Pregunta_R from '../../data/db_Pregunta_R';
import { fetchData, processData, calcularFrecuencia, calcularFrecuenciaPorcentual } from '../../services/dataService';
import Discreta from './Discreta';
import Cualitativa from './Cualitativa';
import Continua from './Continua';
import '../../css/Style_DatosP.css';

const PreguntaDatos = () => {
  const { id } = useParams();
  const pregunta = db_Pregunta_R.find(p => p.id === id);
  const [counts, setCounts] = useState({});
  const [frequencies, setFrequencies] = useState({});
  const [porcentual, setPorcentual] = useState({});
  const [acumuladaMenor, setAcumuladaMenor] = useState([]);
  const [acumuladaMayor, setAcumuladaMayor] = useState([]);
  const [porcentajeAcumuladaMenor, setPorcentajeAcumuladaMenor] = useState([]);
  const [porcentajeAcumuladaMayor, setPorcentajeAcumuladaMayor] = useState([]);
  const [acumuladaRelativaMenor, setAcumuladaRelativaMenor] = useState([]);
  const [acumuladaRelativaMayor, setAcumuladaRelativaMayor] = useState([]);
  const [porcentajeAcumuladaRelativaMenor, setPorcentajeAcumuladaRelativaMenor] = useState([]);
  const [porcentajeAcumuladaRelativaMayor, setPorcentajeAcumuladaRelativaMayor] = useState([]);
  const [relativaMayor, setRelativaMayor] = useState(0);
  const [relativaMenor, setRelativaMenor] = useState(0);
  const [porcentajeMayor, setPorcentajeMayor] = useState(0);
  const [porcentajeMenor, setPorcentajeMenor] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const rawData = await fetchData();
        console.log("Datos:", rawData);
        const newCounts = processData(rawData, `P${id}`);
        console.log("Conteos:", newCounts);
        setCounts(newCounts);

        const newFrequencies = calcularFrecuencia(newCounts);
        console.log("Frecuencias:", newFrequencies);
        setFrequencies(newFrequencies);

        const newPorcentual = calcularFrecuenciaPorcentual(newCounts);
        console.log("Frecuencias Porcentuales:", newPorcentual);
        setPorcentual(newPorcentual);

        // Cálculo de acumulada menor
        const countValues = Object.values(newCounts);
        const acumuladaMenorValues = [];
        let acumuladaMenorSum = 0;
        countValues.forEach(count => {
          acumuladaMenorSum += count;
          acumuladaMenorValues.push(acumuladaMenorSum);
        });        
        setAcumuladaMenor(acumuladaMenorValues);
        console.log("AcumuladaMenor:", acumuladaMenor);
        // Cálculo de acumulada mayor
        const acumuladaMayorValues = [];
        let acumuladaMayorSum = countValues[countValues.length - 1];
        acumuladaMayorValues.push(acumuladaMayorSum);
        for (let i = countValues.length - 2; i >= 0; i--) {
          acumuladaMayorSum += countValues[i];
          acumuladaMayorValues.push(acumuladaMayorSum);
        }
        acumuladaMayorValues.reverse(); // Revertir para que esté en orden ascendente
        setAcumuladaMayor(acumuladaMayorValues);

        // Porcentajes de acumulada menor
        const total = countValues.reduce((sum, value) => sum + value, 0);
        const porcentajeAcumuladaMenorValues = acumuladaMenorValues.map(val => (val / total) * 100);
        setPorcentajeAcumuladaMenor(porcentajeAcumuladaMenorValues);

        // Porcentajes de acumulada mayor
        const porcentajeAcumuladaMayorValues = acumuladaMayorValues.map(val => (val / total) * 100);
        setPorcentajeAcumuladaMayor(porcentajeAcumuladaMayorValues);

        // Cálculo de la relativa mayor y menor
        const frequenciesValues = Object.values(newFrequencies);
        const maxFrequency = Math.max(...frequenciesValues);
        const minFrequency = Math.min(...frequenciesValues);
        setRelativaMayor(maxFrequency);
        setRelativaMenor(minFrequency);

        // Cálculo de los porcentajes de la relativa mayor y menor
        const percentageMayor = (maxFrequency / total) * 100;
        const percentageMenor = (minFrequency / total) * 100;
        setPorcentajeMayor(percentageMayor);
        setPorcentajeMenor(percentageMenor);

        // Cálculo de acumulada relativa menor
        const acumuladaRelativaMenorValues = [];
        let acumuladaRelativaSum = 0;
        frequenciesValues.forEach(frequency => {
          acumuladaRelativaSum += frequency;
          acumuladaRelativaMenorValues.push(acumuladaRelativaSum);
        });
        setAcumuladaRelativaMenor(acumuladaRelativaMenorValues);

        // Cálculo de acumulada relativa mayor
        const acumuladaRelativaMayorValues = [];
        let acumuladaRelativaMayorSum = frequenciesValues[frequenciesValues.length - 1];
        acumuladaRelativaMayorValues.push(acumuladaRelativaMayorSum);
        for (let i = frequenciesValues.length - 2; i >= 0; i--) {
          acumuladaRelativaMayorSum += frequenciesValues[i];
          acumuladaRelativaMayorValues.push(acumuladaRelativaMayorSum);
        }
        acumuladaRelativaMayorValues.reverse(); // Revertir para que esté en orden ascendente
        setAcumuladaRelativaMayor(acumuladaRelativaMayorValues);

        // Porcentajes de acumulada relativa menor
        const porcentajeAcumuladaRelativaMenorValues = acumuladaRelativaMenorValues.map(val => (val / total) * 100);
        setPorcentajeAcumuladaRelativaMenor(porcentajeAcumuladaRelativaMenorValues);

        // Porcentajes de acumulada relativa mayor
        const porcentajeAcumuladaRelativaMayorValues = acumuladaRelativaMayorValues.map(val => (val / total) * 100);
        setPorcentajeAcumuladaRelativaMayor(porcentajeAcumuladaRelativaMayorValues);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    getData();
  }, [id]);

  return (
    <Base>
      {
        ()=>(
          <div className="container mt-4">
        <h2>Datos de la Pregunta {id}</h2>
        <Cualitativa
          counts={counts}
          frequencies={frequencies}
          porcentual={porcentual}
        />
        <Discreta
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
        <Continua
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
      </div>
        )
      }
    </Base>
  );
};

export default PreguntaDatos;
