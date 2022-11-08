import Box from '@components/Box';
import Typography from '@components/Typography';

import emptyImage from 'assets/images/img_data.png';

import { EmptyContentProps } from './props';
import useStyles from './styles';

export default function EmptyContent({ title, subTitle, width, height }: EmptyContentProps) {
  const { classes } = useStyles();

  return (
    <Box className={classes.emptyContent}>
      <Box className={classes.wrapContent}>
        <Box className={classes.image}>
          <img alt='' src={emptyImage} width={width} height={height} />
        </Box>
        {title && (
          <Typography component='div' variant='bodyLarge'>
            {title}
          </Typography>
        )}
        {subTitle && (
          <Typography component='div' variant='bodyMedium'>
            {subTitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
