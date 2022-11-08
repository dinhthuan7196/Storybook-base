import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

import useStyles from './styles';

export default (props: TooltipProps) => {
  const { classes } = useStyles();

  return <Tooltip {...props} classes={classes} arrow />;
};
