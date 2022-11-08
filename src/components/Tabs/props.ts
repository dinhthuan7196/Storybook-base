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
  activeTab?: number;
  scrollButtons?: boolean;
  divider?: boolean;
  onChange?: (tab: unknown) => void;
  height?: number | string;
  width?: number | string;
};

export interface TabPanelProps {
  children?: React.ReactNode;
  hidden?: boolean;
  index?: string | number;
}
