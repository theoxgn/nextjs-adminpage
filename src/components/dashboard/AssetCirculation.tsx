import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab } from '@mui/material';
import { IconArrowDownRight, IconCurrencyDollar } from '@tabler/icons-react';
import DashboardCard from '../shared/DashboardCard';
import { transTitle } from '../../utils/commonFunction';

const AssetCirculation = () => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const secondarylight = '#f5fcff';
  const errorlight = '#fdede8';

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      strokeDashArray: 3,
      borderColor: 'rgba(0,0,0,0.1)',
    },

    stroke: {
      curve: 'smooth',
      width: 1,
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Aug',
      ],
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'left',
    },
  };

  const chartSeries = [
    {
      name: 'Token Transaction',
      data: [0, 31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'SellOn Activity',
      data: [0, 11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: 'Referral',
      data: [0, 31, 20, 48, 51, 43, 109, 100],
    },
    {
      name: 'NFT Collectibles',
      data: [0, 31, 40, 28, 51, 63, 109, 100],
    },
    {
      name: 'Events',
      data: [0, 31, 40, 28, 51, 11, 109, 100, 101],
    },
  ].map(item => ({ ...item, name: transTitle(item.name, 'assetCirculation') }));
  return (
    <DashboardCard
      title={transTitle('Asset Circulation', 'assetCirculation')}
      action={
        <Fab color="secondary" size="medium" sx={{ color: '#ffffff' }}>
          <IconCurrencyDollar width={24} />
        </Fab>
      }
      footer={
        <Chart
          type="area"
          width="100%"
          height="350"
          options={optionscolumnchart}
          series={chartSeries}
        />
      }
    />
  );
};

export default AssetCirculation;
