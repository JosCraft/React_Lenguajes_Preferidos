import React from 'react';

import { Link } from 'react-router-dom';
import '../../../css/Style_footer.css';
const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-muted footer">
      
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
       
      
        
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Paginas
              </h6>
              <p>
                <Link to={'/'} className=" text-decoration-none text-reset">Inicio</Link>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Informacion</h6>
              <p>
                prueba@prueba.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Derechos de autor:
        <a className="text-reset fw-bold" href="#"></a>
      </div>
    </footer>
  );
};

export default Footer;