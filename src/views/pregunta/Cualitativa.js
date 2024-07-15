// src/pages/Cualitativa.js

import React, { useEffect, useState } from 'react';
import Base from '../components/layouts/Base';
import { useParams } from 'react-router-dom';

const Cualitativa = () => {
 
  const { id } = useParams();


  return (
    <Base>
      {() => (
        <div className="container my-5">
          <h1 className="mb-4">Contador de Opciones en Pregunta {id}</h1>        
        </div>
      )}
    </Base>
  );
};

export default Cualitativa;
