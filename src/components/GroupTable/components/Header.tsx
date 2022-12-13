import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';

import Box from '@components/Box';
import Tooltip from '@components/Tooltip';
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
  stickyLeft,
  rowIndex,
  maxWidth,
  isShowTooltip,
}: ColumnProps & {
  rowIndex: number;
}) => {
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

  if (isShowTooltip) {
    children = (
      <Tooltip arrow title={header} placement='left'>
        <Box className='ellipsis'>{children}</Box>
      </Tooltip>
    );
  }

  return (
    <Header
      className={!isShowTooltip ? 'ellipsis' : ''}
      maxWidth={maxWidth}
      rowIndex={rowIndex}
      stickyLeft={stickyLeft}
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
