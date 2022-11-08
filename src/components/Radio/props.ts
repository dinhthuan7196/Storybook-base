export type option = {
  label: string;
  value: unknown;
  disabled?: boolean;
};

export type RadioProps = {
  className?: string;
  fullWidth?: boolean;
  label?: string;
  disabled?: boolean;
  options: option[];
  value?: unknown;
  onChange?: (value: unknown) => void;
};
