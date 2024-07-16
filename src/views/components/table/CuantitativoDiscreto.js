import React from 'react';
import { Table } from 'react-bootstrap';

const CuantitativoDiscreto = ({   
  counts, 
  acumuladaMenor, 
  acumuladaMayor, 
  porcentajeAcumuladaMenor, 
  porcentajeAcumuladaMayor, 
  frequencies, 
  acumuladaRelativaMenor, 
  acumuladaRelativaMayor, 
  porcentajeAcumuladaRelativaMenor, 
  porcentajeAcumuladaRelativaMayor, 
  relativaMenor, 
  relativaMayor, 
  porcentajeMenor, 
  porcentajeMayor, 
  porcentual  
}) => {
  // Convertir los counts en una lista ordenada por clase
  const sortedOptions = Object.keys(counts).sort((a, b) => a.localeCompare(b));

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Clase</th>
          <th>n<sub>i</sub></th>
          <th>N<sub>i</sub></th>
          <th>N<sup>*</sup> <sub>i</sub></th>
          <th>fr</th>
          <th>F<sub>i</sub></th>
          <th>F<sup>*</sup> <sub>i</sub></th>
          <th>fr(%)</th>
        </tr>
      </thead>
      <tbody>
        {sortedOptions.map((option, index) => (
          <tr key={option}>
            <td>{option}</td>
            <td>{counts[option]}</td>
            <td>{acumuladaMenor[index] || '-'}</td>
            <td>{acumuladaMayor[index] || '-'}</td>
            <td>{frequencies[option] || '-'}</td>
            <td>{acumuladaRelativaMenor[index] || '-'}</td>
            <td>{acumuladaRelativaMayor[index] || '-'}</td>
            <td>{porcentual[option] || '-'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CuantitativoDiscreto;
