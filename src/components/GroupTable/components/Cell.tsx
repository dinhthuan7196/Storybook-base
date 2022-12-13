import { useMemo, useRef, useState } from 'react';
// import ContentEditable from 'react-contenteditable';

import get from 'lodash/get';
import set from 'lodash/set';

import Typography from '@components/Typography';

import { OPTIONS_STATUS } from '../constants';
import { FocusElementById } from '../helpers';
import { CellProps } from '../props';
import { BoxAdornment, Cell, FlexBox } from '../styles';

type InitialValueProps = {
  id: string | number;
  value?: unknown;
  row: Record<string, any>;
};

export default ({
  children,
  width,
  status,
  isHoverShowAdornment,
  disabled,
  tabIndex = 0,
  cellInOtherRow = 0,
  cell,
  alignData,
  enableEdit,
  renderCell,
  endAdornment,
  handleEditCell = () => {},
}: CellProps & { cell: InitialValueProps }) => {
  const [editCell, setEditCell] = useState<boolean>(false);

  const text = useRef('');
  const inputEl = useRef<HTMLInputElement>(null);

  const _value = get(cell, 'value');
  const _status = typeof status === 'string' ? get(cell, `row.${status}`) : status;
  const _children = !_value && status !== undefined ? OPTIONS_STATUS[_status] : children;

  const renderContent = useMemo(() => {
    let content = (
      <Typography component='span' variant='bodyMedium'>
        {_children || (!disabled && '--')}
      </Typography>
    );

    if (renderCell) {
      content = <>{renderCell(cell)}</>;
    }

    if (endAdornment) {
      content = (
        <FlexBox>
          {content}
          <BoxAdornment className={isHoverShowAdornment ? 'endAdornment' : ''}>{endAdornment(cell)}</BoxAdornment>
        </FlexBox>
      );
    }

    return content;
  }, [_children, disabled, cell, isHoverShowAdornment, endAdornment, renderCell]);

  text.current = _value as string;

  const handleKeyDown = (e: any) => {
    e.preventDefault();
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
      case 'Tab':
      case 'ArrowRight':
        cellIdx = cellIdx + 1;
        break;
      case 'Enter':
        if (!editCell) {
          setEditCell(true);
        } else {
          handleEditCell(cell);
          setEditCell(false);
        }
        break;
      default:
        break;
    }

    if (cellIdx !== tabIndex) FocusElementById(`cell-${cellIdx}`);
  };

  const handleChange = (evt: any) => {
    text.current = evt.target.value;
  };

  const handleBlur = () => {
    console.log(inputEl?.current?.value);
  };

  return (
    <Cell
      className='ellipsis'
      id={`cell-${tabIndex}`}
      tabIndex={tabIndex || 0}
      width={width}
      disabled={disabled}
      alignData={alignData}
      status={!_value ? _status : undefined}
      // onKeyDown={handleKeyDown}
      onBlur={() => {
        // handleEditCell(cell);
        // setEditCell(false);
      }}
    >
      {/* <ContentEditable html={text.current} onKeyDown={handleKeyDown} onBlur={handleBlur} onChange={handleChange} /> */}
      <input
        ref={inputEl}
        onBlur={handleBlur}
        onChange={(e: any) => {
          set(inputEl, 'current.value', e.target.value);
          console.log({ inputEl, value: e.target.value });
        }}
      />
    </Cell>
  );
};
