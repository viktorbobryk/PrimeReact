import React from 'react';
import { Chart } from 'primereact/chart';

// eslint-disable-next-line react/prop-types
const ChartComponent = ({ data, options }) => (
  <>
    <Chart type="line" data={data} options={options} />
  </>
);

export default ChartComponent;
