import { TypographyProps } from '@components/Typography/props';

type Aligns = 'center' | 'inherit' | 'justify' | 'left' | 'right';

export type _CellProps = {
  accessor?: string;
  disabled?: boolean;
  isHoverShowAdornment?: boolean;
  enableEdit?: boolean;
  endAdornment?: React.ReactNode;
  type?: 'text' | 'input' | 'status';
  alignData?: Aligns;
  width?: number;
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
  columns?: ColumnProps[];
};

export type CellProps = _CellProps & {
  children?: React.ReactNode;
  status?: number;
  tabIndex?: number;
  cellInOtherRow?: number;
};

export type GroupTableProps = {
  columns: ColumnProps[];
  rows: Record<string, any>[];
  handleEditCell?: (values: unknown) => void;
};
