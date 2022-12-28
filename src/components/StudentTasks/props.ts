import { SxProps, Theme } from '@mui/material/styles';

import { TypographyProps } from '@components/Typography/props';

import { Status, Tabs } from './constants';

export type ScheduleProps = {
  label?: string;
  count?: number;
  disabled?: boolean;
};

export type MenuProps = {
  label?: string;
  disabled?: boolean;
  sx?: SxProps<Theme>;
};

export type OverallProps = {
  status?: string;
  value?: number;
  disabled?: boolean;
  onlyShowStatus?: boolean;
};

export type EstimateTimeProps = {
  dateTime?: string;
  estimate?: string;
  isAlert?: boolean;
};

export type GroupDataProps = {
  title?: string;
  subTitle?: string;
  disabledCollapse?: boolean;
  data?: CardProps[];
};

export type TypeofTabs = keyof typeof Tabs;

export type DataByTabProps = { [P in TypeofTabs]?: GroupDataProps[] };

export type CardProps = Record<string, any> & {
  id?: string | number;
  dueTime?: any;
  type?: number;
  title?: string;
  subTitle?: string;
  divider?: boolean;
  isHiddenFooter?: boolean;
  menuList?: MenuProps[];
  estimateTime?: EstimateTimeProps;
  scheduleFooter?: ScheduleProps;
  overall?: OverallProps;
  status?: keyof typeof Status;
  hiddenContentRight?: boolean;
};

export type StudentTasksProps = {
  className?: string;
  title?: string;
  maxHeight?: number | string;
  disableSelectTab?: boolean;
  loading?: boolean;
  variantTitle?: TypographyProps['variant'];
  data?: DataByTabProps | GroupDataProps[];
  emptyContent?: {
    title?: string;
    subTitle?: string;
    image?: SVGSVGElement;
    imgType?: 'tasks' | 'planned';
  };
  labelMapping?: {
    [P in keyof typeof Status]?: string;
  } & {
    [P in TypeofTabs]?: string;
  } & {
    buttonSchedule?: string;
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
  onClickTab?: (value?: any) => void;
  onClickCard?: (value?: CardProps) => void;
  onClickSchedule?: (value?: CardProps) => void;
  onClickMenu?: (values?: CardProps) => void;
  customCardFooter?: (value?: CardProps) => void;
};
