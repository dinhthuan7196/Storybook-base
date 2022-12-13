import size from 'lodash/size';

import { themes } from '@styles/Themes';

import { OPTIONS_STATUS, PROGRESS_STATUS } from './constants';
import { CellProps, ColumnProps, _CellProps } from './props';

const getTableConfigs = (cols: ColumnProps[]) => {
  const accessors: _CellProps[] = [];
  const groupHeaders: Record<string, any>[][] = [];

  const convertData = (
    {
      accessor,
      columns,
      disabled,
      endAdornment,
      isHoverShowAdornment,
      disabledEdit,
      alignData,
      width,
      header,
      renderCell,
      status,
      stickyLeft,
      inputType,
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
        endAdornment,
        renderCell,
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

const FocusElementById = (id: string) => {
  const element = document.getElementById(id);

  element?.focus();
};

const renderBackground = ({ status, disabled }: CellProps) => {
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
      return '#FFF';
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

const optionStatus = Object.entries(OPTIONS_STATUS).map(([value, label]) => ({ value: parseInt(value), label }));

export { getTableConfigs, FocusElementById, renderBackground, renderColor, optionStatus };
