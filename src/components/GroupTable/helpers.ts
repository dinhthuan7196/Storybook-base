import size from 'lodash/size';

import { themes } from '@styles/Themes';

import { OPTIONS_STATUS, PROGRESS_STATUS } from './constants';
import { CellProps, ColumnProps, MappingOptionProps, _CellProps } from './props';

const isValidValue = (value: any) => {
  if (!value || value === undefined || value === null) return false;

  return true;
};

const getTableConfigs = (cols: ColumnProps[]) => {
  const accessors: _CellProps[] = [];
  const groupHeaders: Record<string, any>[][] = [];

  const convertData = (
    {
      accessor,
      columns,
      disabled,
      isHoverShowAdornment,
      disabledEdit,
      alignData,
      width,
      header,
      status,
      stickyLeft,
      inputType,
      maxLength,
      mappingOption,
      hiddenSelectStatus,
      endAdornment,
      renderCell,
      ...rest
    }: ColumnProps,
    idx: number,
    disabledFromParent?: boolean
  ) => {
    if (accessor) {
      accessors.push({
        accessor,
        disabled: disabledFromParent || disabled,
        isHoverShowAdornment,
        disabledEdit,
        status,
        alignData,
        width,
        stickyLeft,
        inputType,
        maxLength,
        mappingOption,
        hiddenSelectStatus,
        renderCell,
        endAdornment,
      });
    }

    if (header !== undefined) {
      groupHeaders[idx] = [
        ...(groupHeaders?.[idx] ?? []),
        {
          ...rest,
          disabled,
          header,
          stickyLeft,
        },
      ];
    }

    if (size(columns)) {
      columns?.forEach((col: ColumnProps) => convertData(col, idx + 1, disabledFromParent || disabled));
    }
  };

  cols.forEach((col: ColumnProps) => convertData(col, 0, col?.disabled));

  return { accessors, groupHeaders };
};

const renderBackground = ({ status, disabled, disabledEdit }: CellProps) => {
  if (disabledEdit) return 'white';
  if (disabled) return themes.newColors.gray[50];

  switch (status) {
    case PROGRESS_STATUS.MISSING:
      return themes.newColors.red[50];
    case PROGRESS_STATUS.MISSED:
      return themes.newColors.gray[200];
    case PROGRESS_STATUS.TURN_IN:
      return themes.newColors.green[50];
    case PROGRESS_STATUS.LATE_TURN_IN:
      return themes.newColors.yellow[50];
    default:
      return 'white';
  }
};

const renderColor = ({ status }: CellProps) => {
  switch (status) {
    case PROGRESS_STATUS.MISSING:
      return themes.newColors.red[600];
    case PROGRESS_STATUS.TURN_IN:
      return themes.newColors.green[600];
    case PROGRESS_STATUS.LATE_TURN_IN:
      return themes.newColors.yellow[600];
    default:
      return themes.newColors.gray[800];
  }
};

const CreateResizableColumn = (col: HTMLTableCellElement, divResize: HTMLDivElement) => {
  let x = 0;
  let w = 0;

  const mouseDownHandler = (e: MouseEvent) => {
    x = e.clientX;
    const styles = window.getComputedStyle(col);

    w = parseInt(styles.width, 10);

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

    divResize.classList.add('resizing');
  };

  const mouseMoveHandler = (e: MouseEvent) => {
    const dx = e.clientX - x;

    col.style.width = `${w + dx}px`;
    divResize.classList.remove('resizing');
  };

  const mouseUpHandler = () => {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  divResize.addEventListener('mousedown', mouseDownHandler);
};

const focusElementById = (goToElement: string, currentElement?: string) => {
  const element = (id: string) => document.getElementById(id);

  const getElement = element(goToElement);

  if (getElement) {
    getElement.focus();
  } else if (currentElement) {
    const getElement = element(currentElement);

    getElement?.focus();
  }
};

const formatStringToNumber = (value: string) => parseFloat(value.replaceAll(',', ''));

const formatNumberToString = (value: string, options: _CellProps['numberProps']) => {
  const { min, max, decimalScale, thousandSeparator, allowNegative = false } = options || {};

  let _value = value;

  if (!allowNegative) {
    _value = _value.replace('-', '');
  }

  if (!isValidValue(_value)) return _value;

  let number = formatStringToNumber(_value);

  if (min !== undefined && number < min) {
    number = min;
  }

  if (max !== undefined && number > max) {
    number = max;
  }

  if (thousandSeparator) {
    return number.toLocaleString('en-US', { maximumFractionDigits: decimalScale !== undefined ? decimalScale : 2 });
  }

  return number.toString();
};

const optionStatus = Object.entries(OPTIONS_STATUS)
  .filter(([value]) => parseInt(value) !== PROGRESS_STATUS.MISSED)
  .map(([value, option]) => ({ value: parseInt(value), ...option }));

const getLabelOption = (label: string, mapping?: MappingOptionProps) => mapping?.label ?? label;

export {
  getTableConfigs,
  getLabelOption,
  focusElementById,
  renderBackground,
  renderColor,
  CreateResizableColumn,
  formatNumberToString,
  formatStringToNumber,
  isValidValue,
  optionStatus,
};
