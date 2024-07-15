import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'reactstrap';
import logoCG2 from '../../../img/logo/icon.png';
import '../../../css/Style_nav.css';

const Navi = () => {
  return (
    <Nav className='navbar sticky-top navbar-expand-lg'>
      <div className="container-fluid">
        <a className="navbar-brand mx-auto d-flex align-items-center" href="#">
          <img src={logoCG2} alt="Gotham Tourism Logo" width="70" height="70" className="d-inline-block align-text-top" />
          <span className="txt-navbar ms-2"></span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className='nav-item'>
              <Link className='nav-link' to='/'><span>Inicio</span></Link>
            </li>            
            <li className='nav-item'>
              <Link className='nav-link' to='/preguntas'><span>Preguntas</span></Link>
            </li>    
            <li className='nav-item'>
              <Link className='nav-link' to='/infoPage '><span>Informacion</span></Link>
            </li>           
            
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default Navi;
