import React from 'react';
import '../../css/Style_InfoPage.css'; // Asegúrate de crear el archivo CSS correspondiente si necesitas estilos personalizados
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
  return (
    <Base>
      {
        () => (
          <div className="info-page">
            <div className="container my-5">
              <h1 className="mb-4">Información sobre Lenguajes de Programación y Más</h1>
              
              <section className="section">
                <div className="section-content">
                  <h2>Lenguajes de Programación</h2>
                  <p>
                    Los lenguajes de programación son herramientas fundamentales para el desarrollo de software. Existen varios tipos de lenguajes de programación, entre ellos:
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <h3>Lenguajes Compilados</h3>
                      <img src={compiledImage} alt="Lenguajes Compilados" className="img-fluid" />
                      <p>Estos lenguajes son convertidos a código máquina antes de la ejecución. Ejemplos: C, C++, Rust.</p>
                    </div>
                    <div className="col-md-6">
                      <h3>Lenguajes Interpretados</h3>
                      <img src={interpretedImage} alt="Lenguajes Interpretados" className="img-fluid" />
                      <p>Estos lenguajes son ejecutados línea por línea durante la ejecución del programa. Ejemplos: Python, JavaScript, Ruby.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="section">
                <div className="section-content">
                  <h2>Entornos de Desarrollo Integrados (IDE)</h2>
                  <p>
                    Un IDE es una aplicación que proporciona herramientas para el desarrollo de software. Entre los más populares están:
                  </p>
                  <div className="row">
                    <div className="col-md-4">
                      <h3>Visual Studio Code (VSCode)</h3>
                      <img src={vscodeImage} alt="VSCode" className="img-fluid" />
                      <p>Un editor de código fuente muy popular que soporta extensiones, depuración y control de versiones.</p>
                    </div>
                    <div className="col-md-4">
                      <h3>IntelliJ IDEA</h3>
                      <img src={intellijImage} alt="IntelliJ IDEA" className="img-fluid" />
                      <p>Un IDE muy completo para Java, con soporte para muchos otros lenguajes de programación.</p>
                    </div>
                    <div className="col-md-4">
                      <h3>PyCharm</h3>
                      <img src={pycharmImage} alt="PyCharm" className="img-fluid" />
                      <p>Un IDE especializado en Python, también desarrollado por JetBrains.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="section">
                <div className="section-content">
                  <h2>Sistemas Operativos</h2>
                  <p>
                    Un sistema operativo es el software que gestiona el hardware del computador y proporciona servicios para las aplicaciones. Ejemplos incluyen:
                  </p>
                  <div className="row">
                    <div className="col-md-4">
                      <h3>Windows</h3>
                      <img src={windowsImage} alt="Windows" className="img-fluid" />
                      <p>Un sistema operativo desarrollado por Microsoft, ampliamente utilizado en entornos personales y empresariales.</p>
                    </div>
                    <div className="col-md-4">
                      <h3>macOS</h3>
                      <img src={macosImage} alt="macOS" className="img-fluid" />
                      <p>El sistema operativo desarrollado por Apple para sus computadoras.</p>
                    </div>
                    <div className="col-md-4">
                      <h3>Linux</h3>
                      <img src={linuxImage} alt="Linux" className="img-fluid" />
                      <p>Un sistema operativo de código abierto, utilizado en servidores, computadoras personales y dispositivos móviles.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="section">
                <div className="section-content">
                  <h2>¿Qué es una Hackatón?</h2>
                  <p>
                    Una hackatón es un evento en el que desarrolladores, diseñadores y otros profesionales se reúnen para trabajar en proyectos intensivos durante un periodo de tiempo determinado. Estos eventos fomentan la innovación, el trabajo en equipo y el aprendizaje práctico.
                  </p>
                  <img src={hackathonImage} alt="Hackatón" className="img-fluid" />
                </div>
              </section>
            </div>
          </div>
        )
      }
    </Base>
  );
};

export default InfoPage;
