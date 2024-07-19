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

  // Función para calcular Xi a partir de la clase
  const calcularXi = (clase) => {
    const [inferior, superior] = clase.split('-').map(Number);
    return ((inferior + superior) / 2).toFixed(2); // Redondear a 2 decimales
  };

  const sortedOptions = Object.keys(counts).sort((a, b) => a.localeCompare(b));

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Clase</th>
          <th>X<sub>i</sub></th>
          <th>n<sub>i</sub></th>
          <th>N<sub>i</sub></th>
          <th>N<sup>*</sup> <sub>i</sub></th>
          <th>Frecuencia Relativa</th>
          <th>F<sub>i</sub></th>
          <th>F<sup>*</sup> <sub>i</sub></th>
          <th>Frecuencia Relativa (%)</th>
          <th>F<sub>i</sub>(%)</th>
          <th>F<sup>*</sup><sub>i</sub>(%)</th>
        </tr>
      </thead>
      <tbody>
        {sortedOptions.map((option, index) => (
          <tr key={option}>
            <td>{option}</td>
            <td>{calcularXi(option)}</td>  {/* Mostrar Xi */}
            <td>{counts[option]}</td>
            <td>{acumuladaMenor[index] || '-'}</td>
            <td>{acumuladaMayor[index] || '-'}</td>
            <td>{frequencies[option]}</td>
            <td>{acumuladaRelativaMenor[index] || '-'}</td>
            <td>{acumuladaRelativaMayor[index] || '-'}</td>
            <td>{porcentual[option]}</td>
            <td>{porcentajeAcumuladaRelativaMenor[index] || '-'}</td>
            <td>{porcentajeAcumuladaRelativaMayor[index] || '-'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CuantitativoDiscreto;
