import { SxProps, Theme } from '@mui/material/styles';

export type option = {
  value: string | number;
  label: string;
  disabled?: boolean;
};

export type selectedOption = option | option[] | null;

export type DropdownProps = {
  options: option[];
  disabled?: boolean;
  loading?: boolean;
  multiple?: boolean;
  disableCloseOnSelect?: boolean;
  noOptionsText?: React.ReactNode;
  loadingText?: React.ReactNode;
  limitTags?: number;
  placeholder?: string;
  value?: selectedOption;
  onChange?: (values: selectedOption) => void;
  sx?: SxProps<Theme>;
  label?: string;
  errorMessage?: string;
  width?: number | string;
  required?: boolean;
  disableFilter?: boolean;
  className?: string;
};
