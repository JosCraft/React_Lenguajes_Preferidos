// dataService.js

export const fetchData = async () => {
  try {
    const res = await fetch('https://sheet.best/api/sheets/0fe1f71c-cfbf-45b5-8c86-f667c8f09516');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const processData = (data, id) => {
  return data.reduce((acc, item) => {
    const respuesta = item[id] ? item[id].trim() : 'No Respondida';
    acc[respuesta] = (acc[respuesta] || 0) + 1;
    return acc;
  }, {});
};


export const calcularFrecuencia = (counts) => {
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
  return Object.fromEntries(
    Object.entries(counts).map(([key, value]) => [key, value / total])
  );
};

export const calcularFrecuenciaPorcentual = (counts) => {
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
  return Object.fromEntries(
    Object.entries(counts).map(([key, value]) => [key, ((value / total) * 100).toFixed(2)])
  );
};
