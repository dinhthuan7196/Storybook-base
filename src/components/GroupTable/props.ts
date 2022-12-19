import { TypographyProps } from '@components/Typography/props';

type Aligns = 'center' | 'inherit' | 'justify' | 'left' | 'right';

export type RenderCellProps = {
  id: string | number;
  value?: unknown;
  row: Record<string, any>;
};

export type MappingOptionProps = {
  label?: string;
  disabledMessage?: string;
  isDisabledOption?: (values: RenderCellProps) => boolean;
};

export type _CellProps = {
  inputType?: 'text' | 'number';
  accessor?: string;
  disabled?: boolean;
  isHoverShowAdornment?: boolean;
  disabledEdit?: boolean;
  alignData?: Aligns;
  width?: number;
  status?: number | string;
  hiddenSelectStatus?: (values: RenderCellProps) => boolean;
  stickyLeft?: number;
  maxLength?: number;
  mappingOption?: Record<number, MappingOptionProps>;
  numberProps?: {
    min?: number;
    max?: number;
    decimalScale?: number;
    thousandSeparator?: boolean;
    allowNegative?: boolean;
  };
  renderCell?: (values: RenderCellProps) => string;
  endAdornment?: (values: RenderCellProps) => React.ReactNode;
};

export type ColumnProps = _CellProps & {
  isHidden?: boolean;
  borderRadiusTop?: boolean;
  groupHeader?: boolean;
  header?: string;
  colSpan?: number;
  rowSpan?: number;
  variant?: TypographyProps['variant'];
  description?: string;
  enableSort?: string[];
  alignHeader?: Aligns;
  maxWidth?: number;
  isShowTooltip?: boolean;
  columns?: ColumnProps[];
};

export type CellProps = _CellProps & {
  children?: React.ReactNode;
  tabIndex?: number;
  cellInOtherRow?: number;
  handleEditCell?: (values: unknown) => void;
};

export type EmptyPageProps = {
  emptyContent?: string;
  loading?: boolean;
};

export type GroupTableProps = EmptyPageProps & {
  columns: ColumnProps[];
  rows: Record<string, any>[];
  handleEditCell?: (values: unknown) => void;
};
