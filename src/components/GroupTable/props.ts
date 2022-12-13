import { TypographyProps } from '@components/Typography/props';

type Aligns = 'center' | 'inherit' | 'justify' | 'left' | 'right';

export type RenderCellProps = {
  id: string | number;
  value?: unknown;
  row: Record<string, any>;
};

export type _CellProps = {
  accessor?: string;
  disabled?: boolean;
  isHoverShowAdornment?: boolean;
  enableEdit?: boolean;
  type?: 'text' | 'input' | 'status';
  alignData?: Aligns;
  width?: number;
  status?: number | string;
  stickyLeft?: number;
  renderCell?: (values: RenderCellProps) => void;
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

export type GroupTableProps = {
  columns: ColumnProps[];
  rows: Record<string, any>[];
  handleEditCell?: (values: unknown) => void;
};
