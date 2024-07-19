import React, { useEffect, useState } from 'react';
import Base from '../components/layouts/Base';
import { useParams } from 'react-router-dom';
import { getData } from '../../services/dataProcessingService';
import db_Pregunta_R from '../../data/db_Pregunta_R';
import Discreta from './Discreta';
import Cualitativa from './Cualitativa';
import Continua from './Continua';
import CalculosEstadisticos from './CalculosEstadisticos';
import '../../css/Style_DatosP.css';

const PreguntaDatos = () => {
  const { id } = useParams();
  const pregunta = db_Pregunta_R.find(p => p.id === id);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(id);
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { counts, frequencies, porcentual, acumuladaMenor, acumuladaMayor, porcentajeAcumuladaMenor, porcentajeAcumuladaMayor, relativaMenor, relativaMayor, porcentajeMenor, porcentajeMayor, acumuladaRelativaMenor, acumuladaRelativaMayor, porcentajeAcumuladaRelativaMenor, porcentajeAcumuladaRelativaMayor } = data;

  let ComponentToRender;
  switch (pregunta.naturaleza) {
    case 'Ordinal':
    case 'Nominal':
      ComponentToRender = Cualitativa;
      break;
    case 'Discreta':
      ComponentToRender = Discreta;
      break;
    case 'Continua':
      ComponentToRender = Continua;
      break;
    default:
      ComponentToRender = () => <div>Naturaleza desconocida</div>;
      break;
  }

  return (
    <Base>
      {
        () => (
          <div className='container-lg fondo_P'>
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
            <div className="mt-4">
              <ComponentToRender
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
            </div>            
          </div>
        )
      }
    </Base>
  );
};

export default PreguntaDatos;
