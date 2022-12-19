import { SxProps, Theme } from '@mui/material/styles';

import { Tabs } from './constants';

export type ScheduleProps = {
  label?: string;
  count?: number;
  disabled?: boolean;
};

export type MenuProps = {
  label?: string;
  sx?: SxProps<Theme>;
  onClick?: (value: any) => void;
};

export type OverallProps = {
  status?: string;
  value?: number;
  onlyShowStatus?: boolean;
};

export type EstimateTimeProps = {
  dateTime?: string;
  estimate?: string;
  isAlert?: boolean;
};

export type CardProps = Record<string, any> & {
  type?: number;
  title?: string;
  subTitle?: string;
  divider?: boolean;
  isCollapse?: boolean;
  isHiddenFooter?: boolean;
  menuList?: MenuProps[];
  estimateTime?: EstimateTimeProps;
  scheduleFooter?: ScheduleProps;
  overall?: OverallProps;
  onClick?: (value: any) => void;
  onClickSchedule?: (value: any) => void;
  renderFooter?: (value: any) => void;
};

export type StudentTasksProps = {
  className?: string;
  title?: string;
  subTitle?: string;
  maxHeight?: number | string;
  tabLabelMapping?: { [P in keyof typeof Tabs]?: string };
  groupByData?: {
    label?: string;
    data?: CardProps[];
  };
  spacing?: {
    m?: number;
    mx?: number;
    my?: number;
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
    p?: number;
    px?: number;
    py?: number;
    pt?: number;
    pb?: number;
    pl?: number;
    pr?: number;
  };
};
