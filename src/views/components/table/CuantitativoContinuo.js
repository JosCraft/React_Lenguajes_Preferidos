import React from 'react';
import { Table } from 'react-bootstrap';

const CuantitativoDiscreto = ({ counts, frequencies, porcentual }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Clase</th>
          <th>n<sub>i</sub></th>
          <th>Frecuencia Relativa</th>
          <th>Frecuencia Relativa (%)</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(counts).map(([option, count]) => (
          <tr key={option}>
            <td>{option}</td>
            <td>{count}</td>
            <td>{frequencies[option]}</td>
            <td>{porcentual[option]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CuantitativoDiscreto;
