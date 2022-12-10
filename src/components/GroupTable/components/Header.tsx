import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';

import Box from '@components/Box';
import Typography from '@components/Typography';

import { ColumnProps } from '../props';
import { BoxAdornment, FlexBox, Header } from '../styles';

export default ({
  variant,
  isHidden,
  borderRadiusTop,
  colSpan,
  rowSpan,
  header,
  groupHeader,
  enableSort,
  description,
  disabled,
}: ColumnProps) => {
  let children = (
    <Typography component='span' variant={variant || 'bodyMedium'}>
      {header}
    </Typography>
  );

  if (disabled || enableSort || description) {
    children = (
      <FlexBox>
        <Box>{children}</Box>
        <BoxAdornment mt={0.55} ml={2}>
          {disabled ? (
            <LockClockOutlinedIcon fontSize='small' />
          ) : (
            <>
              {!!description && <InfoOutlinedIcon fontSize='small' />}
              {enableSort && <ArrowDownwardRoundedIcon sx={{ ml: 0.5 }} fontSize='small' />}
            </>
          )}
        </BoxAdornment>
      </FlexBox>
    );
  }

  return (
    <Header
      className='ellipsis'
      isHidden={isHidden}
      borderRadiusTop={borderRadiusTop}
      groupHeader={groupHeader}
      colSpan={colSpan}
      rowSpan={rowSpan}
      disabled={disabled}
    >
      {children}
    </Header>
  );
};
