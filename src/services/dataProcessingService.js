// dataProcessingService.js

export const cambioRespuesta = (options, id) => {
  const respuestaMap = {
    'P15': {
      a: 'Python',
      b: 'Java',
      c: 'JavaScript',
      d: 'C#',
      e: 'PHP',
      f: 'C++',
      g: 'Otros'
    },
    'P12': {
      a: 'Cursos en línea',
      b: 'Libros',
      c: 'Tutoriales en video',
      d: 'Documentación oficial',
      e: 'Blogs y artículos',
      f: 'Otros'
    },
    // Agrega aquí más respuestas para otras preguntas si es necesario
  };

  return respuestaMap[id] || options;
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
