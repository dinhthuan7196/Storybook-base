import { useState } from 'react';

import Box from '@components/Box';
import Tabs from '@components/Tabs';
import Typography from '@components/Typography';

import { Tabs as _Tabs } from '../constants';

import { TasksProps } from './props';

type Tab = keyof typeof _Tabs;

export default ({ title, spacing, className }: TasksProps) => {
  const [collapse, setConllapse] = useState<Record<string, boolean>>();

  return (
    <Box className={className} {...spacing}>
      <Typography component='div' variant='headingSmall' sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Tabs
        divider
        tabs={Object.keys(_Tabs).map((tab) => ({
          label: _Tabs[tab as Tab],
          content: <Box>{_Tabs[tab as Tab]}</Box>,
        }))}
      />
    </Box>
  );
};
