import React from 'react';

const DobleEntradaTable = ({ data }) => {
  // Verifica si los datos son válidos
  if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
    return <p>No hay datos para mostrar.</p>;
  }

  // Extrae los lenguajes de programación y los IDEs
  const programmingLanguages = Object.keys(data);
  const ideList = Array.from(
    new Set(
      programmingLanguages.flatMap(lang => Object.keys(data[lang]))
    )
  );

  // Calcula las sumas por fila
  const rowSums = programmingLanguages.reduce((sums, lang) => {
    sums[lang] = ideList.reduce((sum, ide) => sum + (data[lang][ide] || 0), 0);
    return sums;
  }, {});

  // Calcula las sumas por columna
  const colSums = ideList.reduce((sums, ide) => {
    sums[ide] = programmingLanguages.reduce((sum, lang) => sum + (data[lang][ide] || 0), 0);
    return sums;
  }, {});

  // Calcula el total general
  const totalSum = Object.values(colSums).reduce((sum, value) => sum + value, 0);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Lenguaje de Programación vs IDE</th>
            {ideList.map(ide => (
              <th key={ide}>{ide}</th>
            ))}
            <th>Total por Lenguaje</th>
          </tr>
        </thead>
        <tbody>
          {programmingLanguages.map(lang => (
            <tr key={lang}>
              <td>{lang}</td>
              {ideList.map(ide => (
                <td key={ide}>{data[lang][ide] || 0}</td>
              ))}
              <td>{rowSums[lang]}</td>
            </tr>
          ))}
          <tr>
            <td><strong>Total por IDE</strong></td>
            {ideList.map(ide => (
              <td key={ide}>{colSums[ide]}</td>
            ))}
            <td><strong>{totalSum}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DobleEntradaTable;
