import { Column } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

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

const ChartLine = () => {
  const chartRef = React.useRef(null);

  const medal = (datum, ranking) => {
    if (ranking > 2) return datum;
    const { chart } = chartRef.current;
    const { document } = chart.getContext().canvas;
    const group = document?.createElement('g', {});

    const text = ['ingles🏆', 'matematicas🥈', 'programacion🥉'][ranking];
    const label = document.createElement('text', {
      style: {
        text,
        fill: 'gray',
        textAlign: 'center',
        transform: `translate(0, 25)`,
      },
    });

    group.appendChild(label);
    return group;
  };

  const config = {
    data,
    xField: 'type',
    yField: 'value',
    colorField: 'type',
    axis: {
      x: {
        size: 40,
        labelFormatter: (datum, index) => medal(datum, index),
      },
    },
    onReady: (plot) => (chartRef.current = plot),
  };
  return <Column {...config} />;
};
export default ChartLine