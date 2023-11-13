import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

// Pie Chart 1: Renewable Energy Share in Global Electricity Generation
const renewableEnergyData = [
  { id: 0, value: 3, label: 'Solar' },
  { id: 1, value: 10, label: 'Wind' },
  { id: 2, value: 16, label: 'Hydropower' },
  { id: 3, value: 0.2, label: 'Geothermal' },
  { id: 4, value: 2, label: 'Other' },
];

// Pie Chart 2: Top 5 Sources of Greenhouse Gas Emissions
const greenhouseGasData = [
  { id: 0, value: 25, label: 'Electricity and heat' },
  { id: 1, value: 24, label: 'Agriculture' },
  { id: 2, value: 21, label: 'Industry' },
  { id: 3, value: 14, label: 'Transport' },
  { id: 4, value: 16, label: 'Other' },
];

// Pie Chart 3: Global Land Cover
const landCoverData = [
  { id: 0, value: 31, label: 'Forests' },
  { id: 1, value: 24, label: 'Grasslands' },
  { id: 2, value: 11, label: 'Cropland' },
  { id: 3, value: 3, label: 'Urban areas' },
  { id: 4, value: 31, label: 'Other' },
];

// Pie Chart 4: Global Water Withdrawals by Sector
const waterWithdrawalsData = [
  { id: 0, value: 70, label: 'Agriculture' },
  { id: 1, value: 20, label: 'Industry' },
  { id: 2, value: 10, label: 'Domestic' },
];

export default function PieCharts() {
  return (
    <div>
      <PieChart
        series={[
          {
            data: renewableEnergyData,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={200}
      />
      <PieChart
        series={[
          {
            data: greenhouseGasData,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={200}
      />
      <PieChart
        series={[
          {
            data: landCoverData,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={200}
      />
      <PieChart
        series={[
          {
            data: waterWithdrawalsData,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={200}
      />
    </div>
  );
}
