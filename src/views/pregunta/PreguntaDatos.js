import React, { useEffect, useState } from 'react';
import Base from '../components/layouts/Base';
import { useParams } from 'react-router-dom';
import db_Pregunta_R from '../../data/db_Pregunta_R';
import { fetchData, processData, calcularFrecuencia, calcularFrecuenciaPorcentual } from '../../services/dataService';
import BarChart from '../components/bar/BarChart';
import HorizontalBarChart from '../components/bar/HorizontalBarChart';
import PieChart from '../components/bar/PieChart';
import '../../css/Style_DatosP.css';
import fondo_1 from '../../img/fondo/fondo_1.jpg';
const PreguntaDatos = () => {
  const { id } = useParams();
  const pregunta = db_Pregunta_R.find(p => p.id === id);
  const [counts, setCounts] = useState({});
  const [frequencies, setFrequencies] = useState({});
  const [porcentual, setPorcentual] = useState({});

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
      } catch (error) {
        console.error("Error al obtener o procesar los datos:", error);
      }
    };

    getData();
  }, [id]);

  return (
    <Base>
      {() => (
        <div className="">
          <div className="container my-5 fondo_P">
          <h1 className="mb-4 fondo-titulo">{id}.- {pregunta.pregunta}</h1>
          <h2 className="fondo-tipo">{pregunta.tipo} {pregunta.naturaleza} </h2>
          {pregunta.resp && (
            <div className="fondo-respuestas">
              <strong>Respuestas posibles:</strong>
              <ul className='list-group list-group-flush'>
                {pregunta.resp.split(',').map((respuesta, index) => (
                  <li className='list-group-item list-group-item-action' key={index}>{respuesta.trim()}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="table-responsive mt-4">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Clase</th>
                  <th>Frecuencia</th>
                  <th>Frecuencia Porcentual</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(counts).map((respuesta, index) => (
                  <tr key={index}>
                    <td>{respuesta}</td>
                    <td>{counts[respuesta]}</td>
                    <td>{porcentual[respuesta]}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BarChart counts={counts} questionId={id} />
          <BarChart counts={frequencies} questionId={id} />
          <HorizontalBarChart counts={porcentual} questionId={id}/>
          <PieChart counts={counts} questionId={id} />
        </div>
        </div>
      )}
    </Base>
  );
};

export default PreguntaDatos;
