import React, { useEffect, useState } from 'react';
import Base from '../components/layouts/Base';
import DobleEntradaTable from '../components/table/DobleEntradaTable';
import DobleEntradaChart from '../components/bar/DobleEntradaChart';
import { fetchData, processData } from '../../services/dataService';

const PdobleEntrada = () => {
    const [data, setData] = useState([]);
    const [tableData, setTableData] = useState({});
    const [chartData, setChartData] = useState({});
    const [showChart, setShowChart] = useState(false); // Estado para manejar la visibilidad del gráfico

    useEffect(() => {
      const loadData = async () => {
        const fetchedData = await fetchData();
        console.log('Fetched Data:', fetchedData); // Log de datos obtenidos
        setData(fetchedData);
      };
      loadData();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
          const question5Data = processData(data, 'P5'); // ID de la pregunta 5
          const question7Data = processData(data, 'P7'); // ID de la pregunta 7
      
          console.log('Question 5 Data:', question5Data); // Log de datos de la pregunta 5
          console.log('Question 7 Data:', question7Data); // Log de datos de la pregunta 7
      
          const combinedData = combineData(question5Data, question7Data);
          console.log('Combined Data:', combinedData); // Log de datos combinados
          setTableData(combinedData);
      
          const chartData = createChartData(combinedData); // Usar combinedData aquí
          console.log('Chart Data:', chartData); // Log de datos del gráfico
          setChartData(chartData);
      
          // Mostrar el gráfico después de 3 segundos
          setTimeout(() => {
            setShowChart(true);
          }, 3000);
        }
      }, [data]);

    const combineData = (data1, data2) => {
        const combined = {};
      
        // Inicializar el objeto combinado
        Object.keys(data1).forEach(key1 => {
          combined[key1] = {};
          Object.keys(data2).forEach(key2 => {
            combined[key1][key2] = 0;
          });
        });
      
        // Contar combinaciones
        data.forEach(item => {
          const key1 = item['P5'] ? item['P5'].trim() : 'No Respondida'; // Pregunta 5
          const key2 = item['P7'] ? item['P7'].trim() : 'No Respondida'; // Pregunta 7
          if (combined[key1]) {
            combined[key1][key2] = (combined[key1][key2] || 0) + 1;
          }
        });
      
        console.log('Final Combined Data:', combined); // Verificar datos combinados finales
        return combined;
      };

    const createChartData = (combinedData) => {
        // Extraer los lenguajes (eje X)
        const xValues = Object.keys(combinedData);
      
        // Extraer los IDEs (eje Y) y asegurarse de que cada IDE esté en la lista
        const yValues = Array.from(
          new Set(
            xValues.flatMap(lang => Object.keys(combinedData[lang]))
          )
        );
      
        // Crear los datos Z, que es una matriz de valores
        const zData = xValues.map(lang =>
          yValues.map(ide => combinedData[lang][ide] || 0)
        );
      
        console.log('Chart Data:', { x: xValues, y: yValues, z: zData }); // Verificar datos del gráfico
      
        return {
          x: xValues,
          y: yValues,
          z: zData,
        };
    };

    return (
      <Base>
        {()=>(
          <div className="container-lg fondo_P">
          <DobleEntradaTable data={tableData} />
          {showChart && <DobleEntradaChart data={chartData} />}
        </div>
        )}
      </Base>
    );
};

export default PdobleEntrada;
