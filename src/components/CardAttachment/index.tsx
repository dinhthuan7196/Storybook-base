import { useMemo } from 'react';

import size from 'lodash/size';

import AudioFileIcon from '@mui/icons-material/AudioFileOutlined';
import CloseIcon from '@mui/icons-material/CloseRounded';
import DocumentFileIcon from '@mui/icons-material/DescriptionOutlined';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import VideoFileIcon from '@mui/icons-material/VideoFileOutlined';

import Divider from '@components/Divider';
import IconButton from '@components/IconButton';
import Switch from '@components/Switch';
import Typography from '@components/Typography';

import { CardAttachmentProps } from './props';
import { CardAttachment, GroupTitle, LeftBox, RightBox } from './styles';

export default ({
  className,
  sx,
  src,
  icon,
  title,
  subTitle,
  switchProps = {},
  onClick = () => {},
  onRemove,
}: CardAttachmentProps) => {
  const { label, checked, onChange } = switchProps;

  const renderIcon = useMemo(() => {
    if (src) {
      return <img loading='lazy' width='1em' height='1em' alt='Course image' src={src} />;
    }

    switch (icon) {
      case 'audio':
        return <AudioFileIcon fontSize='small' />;
      case 'video':
        return <VideoFileIcon fontSize='small' />;
      case 'image':
        return <ImageIcon fontSize='small' />;
      case 'document':
        return <DocumentFileIcon fontSize='small' />;
      default:
        return null;
    }
  }, [src, icon]);

  return (
    <CardAttachment className={className} sx={sx} elevation={0} onClick={onClick}>
      <LeftBox sx={{ flexGrow: 1 }}>
        {renderIcon}
        <Divider sx={{ height: 60, ml: 3, mr: 2 }} orientation='vertical' />
        <GroupTitle>
          <Typography noWrap component='div' variant='titleSmall'>
            {title}
          </Typography>
          <Typography noWrap component='div' variant='bodySmall'>
            {subTitle}
          </Typography>
        </GroupTitle>
      </LeftBox>
      <RightBox onClick={(e) => e.stopPropagation()}>
        {!!size(switchProps) && (
          <>
            {label && (
              <Typography noWrap component='div' mr={1} variant='bodyLarge'>
                {label}
              </Typography>
            )}
            <Switch checked={checked} onChange={onChange} />
          </>
        )}
        {onRemove && (
          <IconButton sx={{ ml: 2 }} onClick={() => onRemove()}>
            <CloseIcon fontSize='small' />
          </IconButton>
        )}
      </RightBox>
    </CardAttachment>
  );
};
