import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  Grid,
  ButtonGroup,
  Button,
} from '@mui/material';
import { useRouter } from 'next/router';

type Props = {
  title?: string;
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  cardheading?: string | JSX.Element;
  headtitle?: string | JSX.Element;
  headsubtitle?: string | JSX.Element;
  children?: JSX.Element;
  middlecontent?: string | JSX.Element;
  subBtn?: string[];
};

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
  subBtn,
}: Props) => {
  const router = useRouter();
  useEffect(() => {
    setSubT(null);
  }, [router.locale]);
  const SubBtn = subBtn?.map((name, idx) => {
    let obj = { name: '', isSelect: false };
    if (idx == 0) {
      obj.isSelect = true;
    }
    if (typeof title === 'string') {
      obj.name = name;
    }

    return obj;
  });
  const [subT, setSubT] = useState<null | typeof SubBtn>(null);
  const onBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    list = SubBtn
  ) => {
    const selectedBtn = e.currentTarget.value;

    const updatedSubT = list?.map(item => {
      if (item.name === selectedBtn) {
        return { ...item, isSelect: true };
      } else {
        return { ...item, isSelect: false };
      }
    });

    setSubT(updatedSubT);
  };
  const selectedName = () => {
    let name;
    if (subT) {
      name = subT?.filter(item => item.isSelect);
    } else {
      name = SubBtn?.filter(item => item.isSelect);
    }

    return name && name[0].name;
  };
  return (
    <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
      {subBtn && (
        <Grid container>
          <ButtonGroup variant="contained" fullWidth size="small">
            {(subT || SubBtn)?.map((item, i) => (
              <Button
                onClick={e => onBtnClick(e, subT || SubBtn)}
                key={i}
                value={item.name}
                style={{
                  backgroundColor: item.isSelect
                    ? '#49BEFF'
                    : 'rgb(190 198 218)',
                  border: 'none',
                }}
                size="small"
              >
                {item.name}
              </Button>
            ))}
          </ButtonGroup>
        </Grid>
      )}

      {cardheading ? (
        <CardContent>
          <Typography variant="h5">{headtitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: '30px' }}>
          {title ? (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems={'center'}
              mb={3}
            >
              <Box>
                {title ? <Typography variant="h5">{title}</Typography> : ''}
                {subT && (
                  <Typography variant="subtitle2" color="textSecondary">
                    {selectedName()}
                  </Typography>
                )}
                {subtitle && !subT ? (
                  <Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>
                ) : (
                  ''
                )}
              </Box>
              {action}
            </Stack>
          ) : null}

          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;
