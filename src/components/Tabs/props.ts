import { SxProps, Theme } from '@mui/system';

export type Tab = {
  content?: React.ReactNode;
  label?: React.ReactNode;
  disabled?: boolean;
  wrapped?: boolean;
  sx?: SxProps<Theme>;
  icon?: string | React.ReactElement;
  iconPosition?: 'top' | 'bottom' | 'start' | 'end';
};

export type TabsProps = {
  variant?: 'scrollable' | 'standard';
  tabs?: Tab[];
  orientation?: 'horizontal' | 'vertical';
  defaultTab?: number;
  scrollButtons?: boolean;
  divider?: boolean;
  handleChangeTab?: (tab: number) => void;
  height?: number | string;
  width?: number | string;
};

export interface TabPanelProps {
  children?: React.ReactNode;
  hidden?: boolean;
  index?: string | number;
}
