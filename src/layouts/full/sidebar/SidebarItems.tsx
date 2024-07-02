import React from 'react';
import Menuitems from './MenuItems';
import { useRouter } from 'next/router';
import { Box, List } from '@mui/material';
import NavItem from './NavItem';
import NavGroup from './NavGroup/NavGroup';
import { transTitle } from '../../../utils/commonFunction';

const SidebarItems = ({ toggleMobileSidebar, menu, transData }: any) => {
  const { pathname } = useRouter();
  const pathDirect = pathname;
  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map(item => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            const transItem = {
              ...item,
              subheader: transTitle(item.subheader, 'menuSubHead'),
            };
            return <NavGroup item={transItem} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else {
            return (
              <NavItem
                item={item}
                key={item.id}
                pathDirect={pathDirect}
                onClick={toggleMobileSidebar}
              />
            );
          }
        })}
      </List>
    </Box>
  );
};

export default SidebarItems;
