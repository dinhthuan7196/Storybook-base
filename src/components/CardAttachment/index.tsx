import { useMemo } from 'react';

import size from 'lodash/size';

import AudioFileIcon from '@mui/icons-material/AudioFileOutlined';
import CloseIcon from '@mui/icons-material/CloseRounded';
import DocumentFileIcon from '@mui/icons-material/DescriptionOutlined';
import DownloadIcon from '@mui/icons-material/DownloadRounded';
import ErrorIcon from '@mui/icons-material/ErrorOutlined';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import VideoFileIcon from '@mui/icons-material/VideoFileOutlined';

import Button from '@components/Button';
import Divider from '@components/Divider';
import IconButton from '@components/IconButton';
import Switch from '@components/Switch';
import Typography from '@components/Typography';

import { ReactComponent as IcnAssignment } from '../../assets/images/icn_assignment.svg';
import { ReactComponent as IcnLesson } from '../../assets/images/icn_lesson.svg';
import { ReactComponent as IcnMenu } from '../../assets/images/icn_myCourses.svg';
import { ReactComponent as IcnQuiz } from '../../assets/images/icn_quiz.svg';

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
  onDownload,
  endTitle,
}: CardAttachmentProps) => {
  const renderIcon = useMemo(() => {
    if (src) {
      return <img className='google-icon' loading='lazy' width='1em' height='1em' alt='Course image' src={src} />;
    }

    switch (icon) {
      case 'audio':
        return <AudioFileIcon />;
      case 'video':
        return <VideoFileIcon />;
      case 'image':
        return <ImageIcon />;
      case 'document':
        return <DocumentFileIcon />;
      case 'assignment':
        return <IcnAssignment />;
      case 'quiz':
      case 'test':
        return <IcnQuiz />;
      case 'lesson':
        return <IcnLesson />;
      case 'course':
        return <IcnMenu />;
      case 'unknown':
        return <ErrorIcon />;
      default:
        return <IcnMenu />;
    }
  }, [src, icon]);

  const renderAction = useMemo(() => {
    if (!size(switchProps)) return null;
    const { label, checked, isButton, onChange = () => {} } = switchProps;

    if (isButton)
      return (
        <Button sx={{ whiteSpace: 'nowrap' }} onClick={onChange}>
          {label}
        </Button>
      );

    return (
      <>
        {label && (
          <Typography noWrap component='div' mr={1} variant='bodyLarge'>
            {label}
          </Typography>
        )}
        <Switch checked={checked} onChange={({ target }) => onChange({ checked: target?.checked })} />
      </>
    );
  }, [switchProps]);

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
        {renderAction}
        {endTitle && (
          <Typography noWrap component='div' mr={1} variant='bodyLarge'>
            {endTitle}
          </Typography>
        )}
        {onDownload && (
          <IconButton sx={{ ml: 1 }} onClick={() => onDownload()}>
            <DownloadIcon fontSize='small' />
          </IconButton>
        )}
        {onRemove && (
          <IconButton sx={{ ml: 1 }} onClick={() => onRemove()}>
            <CloseIcon fontSize='small' />
          </IconButton>
        )}
      </RightBox>
    </CardAttachment>
  );
};
