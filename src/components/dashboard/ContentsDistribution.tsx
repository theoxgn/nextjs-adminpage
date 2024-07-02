import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { useTheme } from '@mui/material/styles';
import {
  Grid,
  Stack,
  Typography,
  Avatar,
  ButtonGroup,
  Button,
} from '@mui/material';
import { IconArrowUpLeft } from '@tabler/icons-react';

import DashboardCard from '../shared/DashboardCard';
import { transTitle } from '../../utils/commonFunction';

const ContentsDistribution = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = '#ecf2ff';
  const successlight = theme.palette.success.light;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [primary, primarylight, '#F9F9FD'],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '60%',
          background: 'transparent',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };
  const seriescolumnchart = [38, 40, 25];
  const subTitleList = ['Community', 'Buy & Sell'].map(name =>
    transTitle(name, 'contentsDistribution')
  );
  return (
    <>
      <DashboardCard
        title={transTitle('Contents Distribution', 'contentsDistribution')}
        subBtn={subTitleList}
        subtitle={subTitleList[0]}
      >
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={3} sm={5}>
            <Typography variant="h3" fontWeight="700">
              $36,358
            </Typography>
            <Stack direction="row" spacing={1} mt={1} alignItems="center">
              <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
                <IconArrowUpLeft width={20} color="#39B69A" />
              </Avatar>
              <Typography variant="subtitle2" fontWeight="600">
                +9%
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                last year
              </Typography>
            </Stack>
            <Stack spacing={3} mt={5} direction="row">
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  sx={{
                    width: 9,
                    height: 9,
                    bgcolor: primary,
                    svg: { display: 'none' },
                  }}
                ></Avatar>
                <Typography variant="subtitle2" color="textSecondary">
                  2022
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  sx={{
                    width: 9,
                    height: 9,
                    bgcolor: primarylight,
                    svg: { display: 'none' },
                  }}
                ></Avatar>
                <Typography variant="subtitle2" color="textSecondary">
                  2023
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          {/* column */}
          <Grid item xs={7} sm={5}>
            <Chart
              options={optionscolumnchart}
              series={seriescolumnchart}
              type="donut"
              height="150px"
            />
          </Grid>
        </Grid>
      </DashboardCard>
    </>
  );
};

export default ContentsDistribution;
