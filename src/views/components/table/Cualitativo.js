import React from 'react';
import { Table } from 'react-bootstrap';

const CuantitativoDiscreto = ({ counts, frequencies, porcentual }) => {
  return (
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
  );
};

export default CuantitativoDiscreto;
