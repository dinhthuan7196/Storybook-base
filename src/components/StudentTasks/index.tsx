import { useMemo } from 'react';

import Box from '@components/Box';
import Tabs from '@components/Tabs';
import Typography from '@components/Typography';

import Tasks from './Components/Tasks';
import { Tabs as _Tabs } from './constants';
import { StudentTasksProps } from './props';
import { SubTitle } from './styles';

export default ({ title, spacing, subTitle, className }: StudentTasksProps) => {
  const tabList = useMemo(() => Object.keys(_Tabs), []);

  return (
    <Box className={className} {...spacing}>
      <Typography component='div' variant='headingSmall' sx={{ mb: 1 }}>
        {title}
      </Typography>
      <SubTitle component='div' variant='titleMedium'>
        {subTitle}
      </SubTitle>
      <Tabs
        divider
        tabs={tabList.map((tab) => ({
          label: _Tabs[tab as keyof typeof _Tabs],
          content: <Tasks />,
        }))}
      />
    </Box>
  );
};
