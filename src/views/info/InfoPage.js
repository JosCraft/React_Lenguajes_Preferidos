import React, { useState } from 'react';
import '../../css/Style_InfoPage.css';
import Base from '../components/layouts/Base';

import compiledImage from '../../img/igms/coe1.jpg';
import interpretedImage from '../../img/igms/code4.jpg';
import vscodeImage from '../../img/igms/VsCode.jpg';
import intellijImage from '../../img/igms/IntelliJ IDEA.jpg';
import pycharmImage from '../../img/igms/PyCharm.png';
import windowsImage from '../../img/igms/WindowsIc.jpeg';
import macosImage from '../../img/igms/Apple.jpg';
import linuxImage from '../../img/igms/Linux.png';
import hackathonImage from '../../img/igms/hackaton.jpg';

const InfoPage = () => {
  const [activeTopic, setActiveTopic] = useState('programmingLanguages');

  return (
    <Base>
      {
        () => (
          <div className="info-page">
            <div className="container my-5">
              <h1 className="mb-4">Información</h1>
              <div className="card text-center">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${activeTopic === 'programmingLanguages' ? 'active' : ''}`}
                        onClick={() => setActiveTopic('programmingLanguages')}
                        href="#!"
                      >
                        Lenguajes de Programación
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${activeTopic === 'developmentEnvironments' ? 'active' : ''}`}
                        onClick={() => setActiveTopic('developmentEnvironments')}
                        href="#!"
                      >
                        Entornos de Desarrollo
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${activeTopic === 'operatingSystems' ? 'active' : ''}`}
                        onClick={() => setActiveTopic('operatingSystems')}
                        href="#!"
                      >
                        Sistemas Operativos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${activeTopic === 'hackathon' ? 'active' : ''}`}
                        onClick={() => setActiveTopic('hackathon')}
                        href="#!"
                      >
                        Hackatón
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  {activeTopic === 'programmingLanguages' && (
                    <section className='programmingLanguages'>
                      <h2>Lenguajes de Programación</h2>
                      <p>
                        Los lenguajes de programación son herramientas fundamentales para el desarrollo de software. Existen varios tipos de lenguajes de programación, entre ellos:
                      </p>
                      <div className="row">
                        <div className="col-md-12">
                          <h3>Lenguajes Compilados</h3>
                          <img src={compiledImage} alt="Lenguajes Compilados" className="img-fluid" />
                          <p>Estos lenguajes son convertidos a código máquina antes de la ejecución. Ejemplos: C, C++, Rust.</p>
                        </div>
                        <div className="col-md-12">
                          <h3>Lenguajes Interpretados</h3>
                          <img src={interpretedImage} alt="Lenguajes Interpretados" className="img-fluid" />
                          <p>Estos lenguajes son ejecutados línea por línea durante la ejecución del programa. Ejemplos: Python, JavaScript, Ruby.</p>
                        </div>
                      </div>
                    </section>
                  )}
                  {activeTopic === 'developmentEnvironments' && (
                    <section className='developmentEnvironments'>
                      <h2>Entornos de Desarrollo Integrados (IDE)</h2>
                      <p>
                        Un IDE es una aplicación que proporciona herramientas para el desarrollo de software. Entre los más populares están:
                      </p>
                      <div className="row">
                        <div className="col-md-12">
                          <h3>Visual Studio Code (VSCode)</h3>
                          <img src={vscodeImage} alt="VSCode" className="img-fluid" />
                          <p>Un editor de código fuente muy popular que soporta extensiones, depuración y control de versiones.</p>
                        </div>
                        <div className="col-md-12">
                          <h3>IntelliJ IDEA</h3>
                          <img src={intellijImage} alt="IntelliJ IDEA" className="img-fluid" />
                          <p>Un IDE muy completo para Java, con soporte para muchos otros lenguajes de programación.</p>
                        </div>
                        <div className="col-md-12">
                          <h3>PyCharm</h3>
                          <img src={pycharmImage} alt="PyCharm" className="img-fluid" />
                          <p>Un IDE especializado en Python, también desarrollado por JetBrains.</p>
                        </div>
                      </div>
                    </section>
                  )}
                  {activeTopic === 'operatingSystems' && (
                    <section className='operatingSystems'>
                      <h2>Sistemas Operativos</h2>
                      <p>
                        Un sistema operativo es el software que gestiona el hardware del computador y proporciona servicios para las aplicaciones. Ejemplos incluyen:
                      </p>
                      <div className="row">
                        <div className="col-md-12">
                          <h3>Windows</h3>
                          <img src={windowsImage} alt="Windows" className="img-fluid" />
                          <p>Un sistema operativo desarrollado por Microsoft, ampliamente utilizado en entornos personales y empresariales.</p>
                        </div>
                        <div className="col-md-12">
                          <h3>macOS</h3>
                          <img src={macosImage} alt="macOS" className="img-fluid" />
                          <p>El sistema operativo desarrollado por Apple para sus computadoras.</p>
                        </div>
                        <div className="col-md-12">
                          <h3>Linux</h3>
                          <img src={linuxImage} alt="Linux" className="img-fluid" />
                          <p>Un sistema operativo de código abierto, utilizado en servidores, computadoras personales y dispositivos móviles.</p>
                        </div>
                      </div>
                    </section>
                  )}
                  {activeTopic === 'hackathon' && (
                    <section className='hackathon'>
                      <h2>¿Qué es una Hackatón?</h2>
                      <div className="row">
                        <div className="col-md-12">
                          <p>
                            Una hackatón es un evento en el que desarrolladores, diseñadores y otros profesionales se reúnen para trabajar en proyectos intensivos durante un periodo de tiempo determinado. Estos eventos fomentan la innovación, el trabajo en equipo y el aprendizaje práctico.
                          </p>
                        </div>
                        <div className="col-md-12">
                          <img src={hackathonImage} alt="Hackatón" className="img-fluid" />
                        </div>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      }
    </Base>
  );
};

export default InfoPage;
