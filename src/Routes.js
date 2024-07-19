import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import PreguntaPage from './views/pregunta/PreguntaPage';
import PreguntaCualitativa from './views/pregunta/Cualitativa';
import PageNotFound from './views/components/PageNotFound/PageNotFound';
import PreguntaDatos from './views/pregunta/PreguntaDatos';
import PdobleEntrada from './views/dobleEntrada/PdobleEntrada';
import InfoPage from './views/info/InfoPage';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/preguntas" element={<PreguntaPage />} />
        <Route path="/pregunta/:id" element={<PreguntaDatos />} />
        <Route path="/dobleEntrada" element={<PdobleEntrada />} />
        <Route path="/infoPage" element={<InfoPage/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  )
};

export default AppRoutes;
