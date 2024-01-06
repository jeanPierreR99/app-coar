import React from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const data = [
  { type: 'matematicas', value: 40 },
  { type: 'comunicacion', value: 40 },
  { type: 'fisica', value: 24 },
  { type: 'algebra', value: 21 },
  { type: 'historia', value: 28 },
  { type: 'ingles', value: 50 },
  { type: 'programacion', value: 30 },
  { type: 'otros', value: 10 },
];
const ChartPieLot = () => {
  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.6,
    label: {
      text: (d) => `${d.type}\n ${d.value}`,
      position: 'spider',
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };
  return <Pie {...config} />;
};
export default ChartPieLot