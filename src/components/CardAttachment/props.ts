import { SxProps, Theme } from '@mui/material/styles';

export type CardAttachmentProps = {
  className?: string;
  src?: string;
  icon?: 'document' | 'video' | 'image' | 'audio';
  title?: string;
  subTitle?: string;
  onClick?: () => void;
  onRemove?: () => void;
  sx?: SxProps<Theme>;
  switchProps?: {
    label?: string;
    checked?: boolean;
    onChange?: () => void;
  };
};
