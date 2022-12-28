import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import Box from '@components/Box';

const StyledTab = styled(Tab)(({ theme }: Record<string, any>) => ({
  ...theme.typography.titleSmall,
  minWidth: 'unset',
  minHeight: 'unset',
  textTransform: 'none',
  height: theme.spacing(4.5),
  color: theme.newColors.gray[400],
  padding: `${theme.spacing(0, 1)} !important`,
  '&.Mui-selected': {
    color: theme.newColors.primary[500],
  },
  ':first-of-type': {
    paddingLeft: `${theme.spacing(0)} !important`,
  },
}));

const StyledTabs = styled(Tabs)(({ theme, value }: Record<string, any>) => {
  let justifyContent = 'center';

  if (!value) {
    justifyContent = 'start';
  }

  return {
    minHeight: theme.spacing(4),
    '& .MuiTabScrollButton-root': {
      width: 'unset',
      ':first-of-type': {
        padding: theme.spacing(0, 0.5),
      },
      ':last-of-type': {
        padding: theme.spacing(0, 0.5),
      },
    },
    '& .MuiTabs-scrollButtons.Mui-disabled': {
      opacity: 0.3,
    },
    '& .MuiTabs-indicator': {
      justifyContent,
      display: 'flex',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      backgroundColor: theme.newColors.primary[500],
      height: theme.spacing(0.25),
      borderRadius: theme.spacing(0.25),
      width: `calc(100% - ${theme.spacing(!value ? 1 : 2)})`,
    },
  };
});

const TabsGroup = styled(Box)(({ theme }: Record<string, any>) => ({
  position: 'relative',
  '& .Divider': {
    position: 'absolute',
    width: '100%',
    minHeight: theme.spacing(4.5),
    borderBottom: `solid 2px ${theme.newColors.gray[200]} `,
  },
}));

export { StyledTabs, StyledTab, TabsGroup };
