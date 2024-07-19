import React from 'react';
import { Table } from 'react-bootstrap';

const Cualitativo = ({ counts, frequencies, porcentual }) => {
  return (
    <div className="table-responsive mt-4">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Clase</th>
            <th>ni</th>
            <th>fi</th>
            <th>fi%</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(counts).map((respuesta, index) => (
            <tr key={index}>
              <td>{respuesta}</td>
              <td>{counts[respuesta]}</td>
              <td>{frequencies[respuesta]}</td>
              <td>{porcentual[respuesta]}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cualitativo;
