import Typography from '@components/Typography';

import { CellProps } from '../props';
import { BoxAdornment, Cell, FlexBox } from '../styles';

type InitialValueProps = {
  id: string | number;
  value?: unknown;
  row: Record<string, any>;
};

export default ({
  children,
  endAdornment,
  width,
  status,
  isHoverShowAdornment,
  disabled,
  tabIndex = 0,
  cellInOtherRow = 0,
  enableEdit = true,
  cell,
}: CellProps & { cell: InitialValueProps }) => {
  let content = (
    <Typography component='span' variant='bodyMedium'>
      {children || (!disabled && '--')}
    </Typography>
  );

  if (enableEdit) {
    content = <input />;
  } else if (endAdornment) {
    content = (
      <FlexBox>
        {content}
        <BoxAdornment className={isHoverShowAdornment ? 'endAdornment' : ''}>{endAdornment}</BoxAdornment>
      </FlexBox>
    );
  }

  const onCellClick = () => {
    // inputEl.current.focus();
  };

  return (
    <Cell
      id={`cell-${tabIndex}`}
      tabIndex={tabIndex || 0}
      className='ellipsis'
      width={width}
      status={status}
      disabled={disabled}
      onClick={onCellClick}
      onKeyDown={(e: any) => {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
          e.preventDefault();
        }
        let cellIdx = tabIndex;

        switch (e.code) {
          case 'ArrowUp':
            cellIdx = cellIdx - cellInOtherRow;
            break;
          case 'ArrowDown':
            cellIdx = cellIdx + cellInOtherRow;
            break;
          case 'ArrowLeft':
            cellIdx = cellIdx - 1;
            break;
          case 'ArrowRight':
            cellIdx = cellIdx + 1;
            break;
          case 'Enter':
            alert('asdasasd');
            break;

          default:
            break;
        }
        // const firstItem = document.getElementById(`cell-${cellIdx}`);

        // firstItem?.focus();
      }}
    >
      {content}
    </Cell>
  );
};
