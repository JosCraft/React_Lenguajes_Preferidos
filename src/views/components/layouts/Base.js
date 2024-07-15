import React from 'react';
import '../../../css/Style.css'; // Asegúrate de que la ruta sea correcta
import '../../../css/Style_img_static.css';
import Navi from '../nav/Navi';
import Footer from '../footer/Footer';
import fondo_1 from '../../../img/fondo/fondo_1.jpg';


const Base = ({ children }) => {
  return (
    <div className='body imagenFondo2' style={{ backgroundImage: `url(${fondo_1})` }} >
      <Navi />
      {children && children()}
      <Footer/>
    </div>
  );
};

export default Base;
