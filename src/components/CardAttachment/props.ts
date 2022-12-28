import { SxProps, Theme } from '@mui/material/styles';

export type CardAttachmentProps = {
  className?: string;
  src?: string;
  icon?: 'document' | 'video' | 'image' | 'audio' | 'assignment' | 'quiz' | 'test' | 'lesson' | 'course' | 'unknown';
  title?: string;
  subTitle?: string;
  onClick?: () => void;
  onRemove?: () => void;
  onDownload?: () => void;
  sx?: SxProps<Theme>;
  switchProps?: {
    label?: string;
    checked?: boolean;
    isButton?: boolean;
    onChange?: (value?: any) => void;
  };
  endTitle?: string
};
