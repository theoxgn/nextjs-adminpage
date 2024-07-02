import type { ReactElement } from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from '../src/components/container/PageContainer';

// components
import DailyAquisitions from '../src/components/dashboard/DailyAquisitions';
import ContentsDistribution from '../src/components/dashboard/ContentsDistribution';
import RecentTransactions from '../src/components/dashboard/RecentTransactions';
import ProductPerformance from '../src/components/dashboard/ProductPerformance';
import Blog from '../src/components/dashboard/Blog';
import MonthlyEarnings from '../src/components/dashboard/AssetCirculation';
import FullLayout from '../src/layouts/full/FullLayout';
import TotalCard from '../src/components/dashboard/TotalCard';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPropsContext } from 'next';
interface translation {
  [key: string]: string;
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const trans = await serverSideTranslations(locale as string, [
    'menuList',
    'menuSubHead',
    'totalCard',
    'dailyAqisition',
    'contentsDistribution',
    'assetCirculation',
  ]);
  return {
    props: {
      ...trans,
    },
  };
};
export default function Home() {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <TotalCard />
          </Grid>
          <Grid item xs={12} lg={8}>
            <DailyAquisitions />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ContentsDistribution />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          {/* <Grid item xs={12}>
            <Blog />
          </Grid> */}
        </Grid>
      </Box>
    </PageContainer>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
