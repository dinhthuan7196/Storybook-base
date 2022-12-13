import { useEffect, useMemo, useRef, useState } from 'react';

import get from 'lodash/get';
import set from 'lodash/set';

import ArrowDown from '@mui/icons-material/KeyboardArrowDownRounded';
import ArrowUp from '@mui/icons-material/KeyboardArrowUpRounded';

import IconButton from '@components/IconButton';
import MenuList from '@components/Menu/MenuList';
import Popover from '@components/Popover';
import Typography from '@components/Typography';

import { OPTIONS_STATUS } from '../constants';
import { FocusElementById, optionStatus } from '../helpers';
import { CellProps } from '../props';
import { BoxAdornment, Cell, FlexBox, Input, Option } from '../styles';

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
  disabledEdit,
  renderCell,
  endAdornment,
  handleEditCell = () => {},
}: CellProps & { cell: InitialValueProps }) => {
  const inputEl = useRef<HTMLInputElement>(null);

  const [editCell, setEditCell] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const _value = get(cell, 'value');
  const _status = typeof status === 'string' ? get(cell, `row.${status}`) : status;
  const isOptions = !_value && status !== undefined;
  const _children = isOptions ? OPTIONS_STATUS[_status] : children;

  const handleBlur = () => {
    handleEditCell(inputEl?.current?.value);
    if (editCell) setEditCell(false);
  };

  const handleChange = (value: any, path?: string) => {
    set(inputEl, path || 'current.value', value);
  };

  useEffect(() => {
    const isEmpty = !_value;

    handleChange(
      (isEmpty && status === undefined) || _children === undefined ? '--' : _children,
      isEmpty ? 'current.placeholder' : undefined
    );
  }, [_children, _value, status]);

  const handleKeyDown = (e: any) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter', 'Delete', 'Delete'].includes(e.code)) {
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
      case 'Tab':
      case 'ArrowRight':
        cellIdx = cellIdx + 1;
        break;
      case 'Enter':
        if (!editCell) {
          FocusElementById(`cell-input-${cellIdx}`);
          setEditCell(true);
        } else {
          FocusElementById(`cell-${cellIdx}`);
          setEditCell(false);
        }
        break;
      case 'Delete':
      case 'Escape':
        set(inputEl, 'current.value', null);
        break;
      default:
        break;
    }

    if (cellIdx !== tabIndex) FocusElementById(`cell-${cellIdx}`);
  };

  const renderOptions = useMemo(
    () => (
      <Popover
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuList>
          {optionStatus.map(({ label, value }) => (
            <Option
              status={value}
              disableRipple
              onClick={() => {
                handleEditCell(value);
                setAnchorEl(null);
              }}
            >
              <Typography variant='bodyMedium'>{label}</Typography>
            </Option>
          ))}
        </MenuList>
      </Popover>
    ),
    [anchorEl]
  );

  return (
    <>
      {renderOptions}
      <Cell
        className='ellipsis'
        id={`cell-${tabIndex}`}
        tabIndex={tabIndex || 0}
        width={width}
        disabled={disabled}
        alignData={alignData}
        status={!_value ? _status : undefined}
        onKeyDown={handleKeyDown}
      >
        <FlexBox>
          <Input
            autoComplete='off'
            id={`cell-input-${tabIndex}`}
            ref={inputEl}
            status={!_value ? _status : undefined}
            disabled={disabled || disabledEdit}
            onBlur={handleBlur}
            onChange={(e: any) => handleChange(e?.target?.value)}
          />
          {endAdornment && (
            <BoxAdornment className={isHoverShowAdornment ? 'endAdornment' : ''} ml={0.75}>
              {endAdornment(cell)}
            </BoxAdornment>
          )}
          {!disabled && !disabledEdit && isOptions && (
            <BoxAdornment className={isHoverShowAdornment ? 'endAdornment' : ''} ml={0.75}>
              <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                {anchorEl ? <ArrowUp fontSize='small' /> : <ArrowDown fontSize='small' />}
              </IconButton>
            </BoxAdornment>
          )}
        </FlexBox>
      </Cell>
    </>
  );
};
