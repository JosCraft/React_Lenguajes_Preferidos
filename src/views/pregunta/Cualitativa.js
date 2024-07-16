// src/pages/Cualitativa.js

import React, { useEffect, useState } from 'react';
import Base from '../components/layouts/Base';
import { useParams } from 'react-router-dom';
import CualitativaT from '../components/table/Cualitativo';
import BarChart from '../components/bar/BarChart';
import HorizontalBarChart from '../components/bar/HorizontalBarChart';
import PieChart from '../components/bar/PieChart';

const Cualitativa = ({ counts, frequencies, porcentual }) => {

  const { id } = useParams();


  return (
    <div>
      <CualitativaT counts={counts} frequencies={frequencies} porcentual={porcentual} />
      <BarChart counts={counts} questionId={id} />
      <BarChart counts={frequencies} questionId={id} />
      <HorizontalBarChart counts={porcentual} questionId={id} />
      <PieChart counts={counts} questionId={id} />
    </div>
  );
};

export default Cualitativa;
