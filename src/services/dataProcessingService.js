import { fetchData, processData, calcularFrecuencia, calcularFrecuenciaPorcentual } from './dataService';

export const getData = async (id) => {
  try {
    const rawData = await fetchData();
    console.log("Datos:", rawData);
    const pregunta = rawData.find(p => p.id === id);
    const newCounts = processData(rawData, `P${id}`);
    console.log("Conteos:", newCounts);

    const newFrequencies = calcularFrecuencia(newCounts);
    console.log("Frecuencias:", newFrequencies);

    const newPorcentual = calcularFrecuenciaPorcentual(newCounts);
    console.log("Frecuencias Porcentuales:", newPorcentual);

    // Cálculo de acumulada menor
    const countValues = Object.values(newCounts);
    const acumuladaMenorValues = [];
    let acumuladaMenorSum = 0;
    countValues.forEach(count => {
      acumuladaMenorSum += count;
      acumuladaMenorValues.push(acumuladaMenorSum);
    });

    // Cálculo de acumulada mayor
    const acumuladaMayorValues = [];
    let acumuladaMayorSum = countValues[countValues.length - 1];
    acumuladaMayorValues.push(acumuladaMayorSum);
    for (let i = countValues.length - 2; i >= 0; i--) {
      acumuladaMayorSum += countValues[i];
      acumuladaMayorValues.push(acumuladaMayorSum);
    }
    acumuladaMayorValues.reverse(); // Revertir para que esté en orden ascendente

    // Porcentajes de acumulada menor
    const total = countValues.reduce((sum, value) => sum + value, 0);
    const porcentajeAcumuladaMenorValues = acumuladaMenorValues.map(val => (val / total) * 100);
    const porcentajeAcumuladaMayorValues = acumuladaMayorValues.map(val => (val / total) * 100);

    // Cálculo de la relativa mayor y menor
    const frequenciesValues = Object.values(newFrequencies);
    const maxFrequency = Math.max(...frequenciesValues);
    const minFrequency = Math.min(...frequenciesValues);

    const percentageMayor = (maxFrequency / total) * 100;
    const percentageMenor = (minFrequency / total) * 100;

    const acumuladaRelativaMenorValues = [];
    let acumuladaRelativaSum = 0;
    frequenciesValues.forEach(frequency => {
      acumuladaRelativaSum += frequency;
      acumuladaRelativaMenorValues.push(parseFloat(acumuladaRelativaSum.toFixed(4))); // Reducción a 4 decimales
    });

    // Cálculo de acumulada relativa mayor
    const acumuladaRelativaMayorValues = [];
    let acumuladaRelativaMayorSum = frequenciesValues[frequenciesValues.length - 1];
    acumuladaRelativaMayorValues.push(parseFloat(acumuladaRelativaMayorSum.toFixed(4))); // Reducción a 4 decimales
    for (let i = frequenciesValues.length - 2; i >= 0; i--) {
      acumuladaRelativaMayorSum += frequenciesValues[i];
      acumuladaRelativaMayorValues.push(parseFloat(acumuladaRelativaMayorSum.toFixed(4))); // Reducción a 4 decimales
    }
    acumuladaRelativaMayorValues.reverse();// Revertir para que esté en orden ascendente

    // Convertir los valores de acumulada relativa menor a números
    const acumuladaRelativaMenorValuesNumber = acumuladaRelativaMenorValues.map(Number);

    // Convertir los valores de acumulada relativa mayor a números
    const acumuladaRelativaMayorValuesNumber = acumuladaRelativaMayorValues.map(Number);
  // Cálculo de los porcentajes
  const porcentajeAcumuladaRelativaMenorValues = acumuladaRelativaMenorValues.map(val => ((val * 100)).toFixed(2)); // Reducción a 2 decimales
  const porcentajeAcumuladaRelativaMayorValues = acumuladaRelativaMayorValues.map(val => ((val * 100)).toFixed(2)); // Reducción a 2 decimales

  // Convertir los porcentajes a números
  const porcentajeAcumuladaRelativaMenorValuesNumber = porcentajeAcumuladaRelativaMenorValues.map(Number);
  const porcentajeAcumuladaRelativaMayorValuesNumber = porcentajeAcumuladaRelativaMayorValues.map(Number);

  // Verificación en consola
  console.log("Porcentaje Acumulada Relativa Menor:", porcentajeAcumuladaRelativaMenorValues);
  console.log("Porcentaje Acumulada Relativa Mayor:", porcentajeAcumuladaRelativaMayorValues);

  console.log("Porcentaje Acumulada Relativa Menor (números):", porcentajeAcumuladaRelativaMenorValuesNumber);
  console.log("Porcentaje Acumulada Relativa Mayor (números):", porcentajeAcumuladaRelativaMayorValuesNumber);

    return {
      counts: newCounts,
      frequencies: newFrequencies,
      porcentual: newPorcentual,
      acumuladaMenor: acumuladaMenorValues,
      acumuladaMayor: acumuladaMayorValues,
      porcentajeAcumuladaMenor: porcentajeAcumuladaMenorValues,
      porcentajeAcumuladaMayor: porcentajeAcumuladaMayorValues,
      relativaMenor: minFrequency,
      relativaMayor: maxFrequency,
      porcentajeMenor: percentageMenor,
      porcentajeMayor: percentageMayor,
      acumuladaRelativaMenor: acumuladaRelativaMenorValues,
      acumuladaRelativaMayor: acumuladaRelativaMayorValues,
      porcentajeAcumuladaRelativaMenor: porcentajeAcumuladaRelativaMenorValues,
      porcentajeAcumuladaRelativaMayor: porcentajeAcumuladaRelativaMayorValuesNumber,
    };
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
};
