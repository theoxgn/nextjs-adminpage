import React, { useState } from 'react';
import { Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../shared/DashboardCard';

import dynamic from 'next/dynamic';
import { transTitle } from '../../utils/commonFunction';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DailyAquisitions = () => {
  // select
  const [month, setMonth] = React.useState('1');

  const handleChange = (event: any) => {
    setMonth(event.target.value);
  };

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: 'black',
      toolbar: {
        show: true,
      },
      height: 370,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: '60%',
        columnWidth: '42%',
        borderRadius: [6],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all',
      },
    },

    stroke: {
      show: true,
      width: 5,
      lineCap: 'butt',
      colors: ['transparent'],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: 'rgba(0,0,0,0.1)',
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      tickAmount: 4,
    },
    xaxis: {
      categories: [
        '16/08',
        '17/08',
        '18/08',
        '19/08',
        '20/08',
        '21/08',
        '22/08',
        '23/08',
        '16/08',
        '17/08',
        '18/08',
        '19/08',
        '20/08',
        '21/08',
        '22/08',
        '23/08',
        '16/08',
        '17/08',
        '18/08',
        '19/08',
        '20/08',
        '21/08',
        '22/08',
        '23/08',
      ],
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart: any = [
    {
      name: 'Eanings this month',
      data: [
        355, 390, 300, 350, 390, 180, 355, 390, 355, 390, 300, 350, 390, 180,
        355, 390, 355, 390, 300, 350, 390, 180, 355, 390,
      ],
    },
  ];
  type ChartDetail = {
    [key: string]: ChartData[];
  };
  type ChartData = {
    name?: string;
    data: number[];
  };
  //임의 제작 데이터 , API 받은 로직 활용하기
  const chartDetail: ChartDetail = {
    Visitors: [
      {
        name: 'Eanings this month',
        data: [
          155, 230, 150, 170, 324, 155, 124, 325, 155, 230, 150, 170, 324, 155,
          124, 325, 155, 230, 150, 170, 324, 155, 124, 325, 155, 230, 150, 170,
          324, 155, 124, 325, 155, 230, 150, 170, 324, 155, 124, 325,
        ],
      },
      {
        name: 'Expense this month',
        data: [
          456, 222, 333, 123, 432, 333, 310, 225, 456, 222, 333, 123, 432, 333,
          310, 225, 456, 222, 333, 123, 432, 333, 310, 225, 456, 222, 333, 123,
          432, 333, 310, 225, 456, 222, 333, 123, 432, 333, 310, 225,
        ],
      },
    ],
    'New Users': [
      {
        name: 'Eanings this month',
        data: [256, 512, 345, 333, 123, 111, 187, 144],
      },
    ],
    Installs: [
      {
        name: 'Eanings this month',
        data: [322, 432, 123, 434, 234, 432, 243, 321],
      },
      {
        name: 'Expense this month',
        data: [222, 234, 432, 232, 322, 321, 322, 442],
      },
    ],
  };

  const splitData = (): ChartData => {
    let dataList: ChartData | any = [];
    for (let keys in chartDetail) {
      // if (keys === TITLE) {
      //   dataList = chartDetail[keys];
      // }
    }
    return dataList.length != 0 ? dataList : seriescolumnchart;
  };
  //Button
  const subTitles: string[] = [
    'Visitors',
    'New Users',
    'Installs',
    'Community Posts',
    'Products',
    'Chats',
  ].map(name => transTitle(name, 'dailyAqisition'));
  return (
    <>
      <DashboardCard
        title={transTitle('Daily Aquisitions', 'dailyAqisition')}
        subBtn={subTitles}
        subtitle={subTitles[0]}
        action={
          <Select
            labelId="month-dd"
            id="month-dd"
            value={month}
            size="small"
            onChange={handleChange}
          >
            <MenuItem value={1}>March 2023</MenuItem>
            <MenuItem value={2}>April 2023</MenuItem>
            <MenuItem value={3}>May 2023</MenuItem>
          </Select>
        }
      >
        <Chart
          options={optionscolumnchart}
          series={seriescolumnchart}
          type="bar"
          height="612px"
        />
      </DashboardCard>
    </>
  );
};

export default DailyAquisitions;
