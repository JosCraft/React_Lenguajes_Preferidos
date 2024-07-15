import React from 'react';
import { Link } from 'react-router-dom';
import Base from './views/components/layouts/Base';
import Miembros from './views/components/layouts/Miembros';
import '../src/css/Style_section.css';
import fondo_1 from './img/fondo/fondo_1.jpg';
import img_1 from './img/igms/img_Len_Prog.jpg';

function App() {
  return (
    <Base>
      {() => (
        <div className="">
          <section className="section section_1">
            <div className='container-xl'>
              <h2>Lenguajes de Programación</h2>
              <p>Esta sección presenta los resultados de una encuesta realizada para conocer las preferencias de los desarrolladores en cuanto a lenguajes de programación. Los datos recopilados nos permiten entender cuáles lenguajes son más populares y por qué.</p>        
            </div>
          </section>
          <section className="my-5 section section_2">
            <div className='container-xl'> 
            <div className='Objetivos'>
              <img src={img_1} alt="Objetivos" className="objetivos-img" />
              <div className="objetivos-text">
                <h1>Objetivos de la Encuesta</h1>
                <p>La encuesta fue realizada con el objetivo de identificar los lenguajes de programación más utilizados y preferidos por los desarrolladores. Además, buscamos entender las razones detrás de estas preferencias, así como los recursos más utilizados para aprender y mejorar en estos lenguajes. Este estudio fue llevado a cabo en la Universidad Mayor de San Andrés (UMSA).</p>
              </div>
            </div>
            </div>
          </section>
        <section className="section_3">
        <div className='participantes' >
          <div className='container-xl'>
            <div className='cabecera'>
              <h2>Miembros del equipo</h2>
            </div>
            <div className='miembros'>
            <Miembros/>
            </div>
          </div>
        </div>
        </section> 
        </div>
      )
      }
    </Base>
  );
}

export default App;
