import { useEffect, useMemo, useRef, useState } from 'react';

import get from 'lodash/get';
import set from 'lodash/set';

import ArrowDown from '@mui/icons-material/KeyboardArrowDownRounded';
import ArrowUp from '@mui/icons-material/KeyboardArrowUpRounded';

import IconButton from '@components/IconButton';
import MenuList from '@components/Menu/MenuList';
import Popover from '@components/Popover';
import Tooltip from '@components/Tooltip';
import Typography from '@components/Typography';

import { EventKeysCell, MappingHotKeys, OPTIONS_STATUS } from '../constants';
import { focusElementById, getLabelOption, isValidValue, optionStatus } from '../helpers';
import { CellProps, RenderCellProps } from '../props';
import { BoxAdornment, Cell, FlexBox, HotKey, Input, Option } from '../styles';

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
  accessor,
  inputType,
  maxLength,
  numberProps, // To Do: event for number cell
  mappingOption,
  endAdornment,
  hiddenSelectStatus = () => false,
  handleEditCell = () => {},
}: CellProps & { cell: RenderCellProps }) => {
  const inputEl = useRef<HTMLInputElement>(null);

  const [editCell, setEditCell] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const _value = get(cell, 'value');
  const _status = typeof status === 'string' ? get(cell, `row.${status}`) : status;
  const isOptions = !_value && _status !== undefined;
  const _children = isOptions ? getLabelOption(OPTIONS_STATUS[_status].label, mappingOption?.[_status]) : children;
  const useStatus = !(disabled || disabledEdit) && !hiddenSelectStatus(cell) && isOptions;

  const handleBlur = () => {
    const currentValue = inputEl?.current?.value;

    handleEditCell({
      accessor,
      rowInfo: cell,
      value: inputType === 'number' && currentValue ? parseFloat(currentValue) : currentValue,
    });
    if (editCell) setEditCell(false);
  };

  const handleChange = (value: any, path?: string) => set(inputEl, path || 'current.value', value);

  const handleStatusChange = (selected: number) => handleEditCell({ value: selected, accessor: status, rowInfo: cell });

  useEffect(() => {
    const isEmpty = !_value;

    handleChange(
      (isEmpty && status === undefined) || !isValidValue(_children) ? '--' : _children,
      isEmpty ? 'current.placeholder' : undefined
    );
  }, [_children, _value, status]);

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();

    switch (e.code) {
      case 'Tab':
        setEditCell(false);
        focusElementById(`cell-${tabIndex}`);
        break;
      case 'Enter':
        focusElementById(`cell-${tabIndex + cellInOtherRow}`, `cell-${tabIndex}`);
        setEditCell(false);
        break;
      default:
        break;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTableCellElement>) => {
    if (EventKeysCell.includes(e.code)) {
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
      case 'Delete':
        handleChange(null);
        focusElementById(`cell-input-${tabIndex}`);
        break;
      default:
        if (useStatus && Object.keys(MappingHotKeys).includes(e.code)) {
          handleStatusChange(get(MappingHotKeys, e.code));
        } else if (!editCell && !(disabled || disabledEdit)) {
          focusElementById(`cell-input-${tabIndex}`);
          setEditCell(true);
        }
        break;
    }

    if (cellIdx !== tabIndex) focusElementById(`cell-${cellIdx}`);
  };

  const renderOptions = useMemo(() => {
    if (!anchorEl) return null;

    return (
      <Popover
        open
        keepMounted
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        sx={{ mt: 1 }}
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
          {optionStatus.map(({ label, hotKey, value: otp }) => {
            const { label: mLabel, disabledMessage, isDisabledOption = () => false } = mappingOption?.[otp] ?? {};

            const _disabled: boolean = otp === _status || isDisabledOption(cell);

            return (
              <Tooltip title={disabledMessage} disableHoverListener={!_disabled} placement='left' followCursor>
                <Option
                  disableRipple
                  disabled={_disabled}
                  status={otp}
                  style={_disabled ? { pointerEvents: 'inherit', cursor: 'pointer' } : {}}
                  onClick={() => {
                    if (!_disabled) {
                      handleStatusChange(otp);
                      setAnchorEl(null);
                    }
                  }}
                >
                  <Typography variant='bodyMedium'>{getLabelOption(label, { label: mLabel })}</Typography>
                  <HotKey component='div' variant='bodyMedium'>
                    {hotKey}
                  </HotKey>
                </Option>
              </Tooltip>
            );
          })}
        </MenuList>
      </Popover>
    );
  }, [anchorEl, _status, mappingOption]);

  return (
    <>
      {renderOptions}
      <Cell
        className='ellipsis'
        id={`cell-${tabIndex}`}
        tabIndex={tabIndex || 0}
        width={width}
        disabled={disabled}
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
            type={inputType}
            disabledEdit={disabledEdit}
            alignData={alignData}
            maxLength={maxLength}
            onBlur={handleBlur}
            onKeyDown={handleKeyDownInput}
            onChange={(e) => handleChange(e.target.value)}
            onInput={(e) => {
              if (maxLength && inputType === 'number') {
                set(e, 'target.value', get(e, 'target.value')?.slice(0, maxLength));
              }
            }}
          />
          {endAdornment && (
            <BoxAdornment className={isHoverShowAdornment ? 'endAdornment' : ''} ml={0.75}>
              {endAdornment(cell)}
            </BoxAdornment>
          )}
          {useStatus && (
            <BoxAdornment className={isHoverShowAdornment && !anchorEl ? 'endAdornment' : ''} ml={0.75}>
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
