import size from 'lodash/size';

import { ColumnProps, _CellProps } from './props';

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
      enableEdit,
      type,
      alignData,
      width,
      header,
      ...rest
    }: ColumnProps,
    idx: number,
    disabledFromParent?: boolean
  ) => {
    if (accessor) {
      accessors.push({
        accessor,
        disabled: disabledFromParent || disabled,
        endAdornment,
        isHoverShowAdornment,
        enableEdit,
        type,
        alignData,
        width,
      });
    }

    if (header !== undefined) {
      groupHeaders[idx] = [
        ...(groupHeaders?.[idx] ?? []),
        {
          ...rest,
          disabled,
          header,
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

export { getTableConfigs };
