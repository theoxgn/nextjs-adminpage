import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import DashboardCard from '../shared/DashboardCard';
import { Fragment } from 'react';
import { IconUserCircle, IconNotebook } from '@tabler/icons-react';
import { transTitle } from '../../utils/commonFunction';

type Props = {
  title?: string;
};

const Title = ['Total Contents', 'Total User'];
const Values: Array<Record<string, number>> = [
  { 'Total Contents': 1027394, community: 789733, 'Buy & Sell': 237661 },
  { 'Total User': 282544, Indonesia: 270251, Singapore: 12293 },
];
function addCommasToNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
const Icons = [IconUserCircle, IconNotebook];
const itemIcon = (idx: number) => {
  return Icons.map((ICON, i) => {
    if (i == idx)
      return <ICON stroke={2} size="1.5rem" color="rebeccapurple" key={i} />;
  });
};

const TotalCard = () => {
  const mdUp = useMediaQuery((theme: any) => theme.breakpoints.up('md'));
  return (
    <Grid container spacing={2}>
      {Title.map((card, i) => {
        const transCard = transTitle(card, 'totalCard');
        return (
          <Grid item xs={6} lg={6} key={card}>
            <DashboardCard title={transCard}>
              <Stack
                direction={mdUp ? 'row' : 'column'}
                spacing={3}
                mt={0}
                alignItems="center"
                justifyContent="space-around"
              >
                <Stack direction="row" spacing={2}>
                  <Typography variant={mdUp ? 'h3' : 'h6'} mt={0.5}>
                    {itemIcon(i)}
                  </Typography>
                  <Typography variant={mdUp ? 'h3' : 'h6'}>
                    {addCommasToNumber(Values[i][card])}
                  </Typography>
                </Stack>
                {Object.entries(Values[i]).map(([key, value], idx) => {
                  if (idx > 0) {
                    return (
                      <Fragment key={key}>
                        <Stack
                          direction="row"
                          spacing={1}
                          mt={1}
                          alignItems="center"
                        >
                          <Typography
                            variant="h5"
                            fontWeight="500"
                            fontSize="0.8rem"
                          >
                            {transTitle(key, 'totalCard')}
                          </Typography>
                          <Typography
                            variant="h5"
                            fontWeight="300"
                            fontSize="0.8rem"
                          >
                            {addCommasToNumber(value)}
                          </Typography>
                        </Stack>
                      </Fragment>
                    );
                  }
                })}
              </Stack>
            </DashboardCard>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TotalCard;
