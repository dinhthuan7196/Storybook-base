import AppBar from '@mui/material/AppBar';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

import Typography from '@components/Typography';

const StyledAppBar = styled(AppBar)(({ theme }: Record<string, any>) => ({
  height: theme.spacing(9),
  background: '#fff',
  boxShadow: theme.elevations.depth01,
  position: 'relative',
  marginBottom: theme.spacing(1),
}));

const Title = styled(Typography)(({ theme }: Record<string, any>) => ({
  color: theme.newColors.gray[800],
  flex: 1,
  marginLeft: theme.spacing(2),
}));

const StyledDialog = styled(Dialog)(({ theme }: Record<string, any>) => ({
  '& .MuiDialog-paperFullScreen': {
    backgroundColor: theme.newColors.gray[50],
  },
}));

export { StyledAppBar, StyledDialog, Title };
