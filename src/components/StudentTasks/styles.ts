import { styled } from '@mui/material/styles';

import Box from '@components/Box';
import Typography from '@components/Typography';

const Container = styled(Box)<{ maxHeight?: number | string }>(({ theme, maxHeight }: Record<string, any>) => ({
  maxHeight: maxHeight || window.innerHeight - 150,
  paddingRight: theme.spacing(1),
  overflowX: 'hidden',
  overflowY: 'auto',
  '::-webkit-scrollbar': {
    width: 5,
  },
  '::-webkit-scrollbar-thumb': {
    borderRadius: theme.borderRadius.default,
    backgroundColor: theme.newColors.gray[300],
  },
}));

const CardInfo = styled(Box)(({ theme }: Record<string, any>) => ({
  backgroundColor: 'white',
  borderStyle: 'solid',
  cursor: 'pointer',
  borderColor: theme.newColors.gray[200],
  borderRadius: theme.spacing(1),
  borderWidth: theme.spacing(0.125),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(0, 1.25),

  '.last-item': {
    marginLeft: 'auto',
  },
}));

const SubTitle = styled(Typography)(({ theme }: Record<string, any>) => ({
  color: theme.newColors.gray[500],
}));

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const Icon = styled(FlexBox)(({ theme }: Record<string, any>) => ({
  backgroundColor: theme.newColors.gray[200],
  padding: theme.spacing(1.25),
  borderRadius: theme.spacing(3),
}));

const ContentTop = styled(FlexBox)(({ theme }: Record<string, any>) => ({
  margin: theme.spacing(1.5, 0),
}));

const ContentBottom = styled(FlexBox)(({ theme }: Record<string, any>) => ({
  margin: theme.spacing(1.5, 0),
}));

const GroupCalendar = styled(FlexBox)(({ theme }: Record<string, any>) => ({
  backgroundColor: theme.newColors.gray[200],
  padding: theme.spacing(0.65, 1.75),
  borderRadius: theme.spacing(2),
  marginRight: theme.spacing(2),
  span: {
    marginLeft: theme.spacing(1),
  },
}));

export { CardInfo, Container, SubTitle, ContentTop, ContentBottom, GroupCalendar, Icon };
