import { styled } from '@mui/material/styles';

import Box from '@components/Box';
import Paper from '@components/Paper';

const FlexBox = {
  display: 'flex',
  alignItems: 'center',
};

const CardAttachment = styled(Paper)(({ theme }: Record<string, any>) => ({
  ...FlexBox,
  borderStyle: 'solid',
  padding: theme.spacing(0, 3),
  height: theme.spacing(7.5),
  borderRadius: theme.spacing(1),
  borderWidth: theme.spacing(0.125),
  borderColor: theme.newColors.gray[200],
}));

const EllipsisBox = styled(Box)(() => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

const GroupTitle = styled(EllipsisBox)(({ theme }: Record<string, any>) => ({
  div: {
    ':first-of-type': {
      color: theme.newColors.gray[800],
    },
    ':last-child': {
      color: theme.newColors.gray[400],
    },
    ':hover': {
      cursor: 'default',
    },
  },
}));

const LeftBox = styled(EllipsisBox)(({ theme }: Record<string, any>) => ({
  ...FlexBox,
  marginRight: 16,
  '.MuiSvgIcon-root': {
    color: theme.newColors.gray[600],
  },
  '.MuiDivider-root': {
    borderColor: theme.newColors.gray[200],
  },
}));

const RightBox = styled(Box)(({ theme }: Record<string, any>) => ({
  ...FlexBox,
  marginLeft: 16,
  justifyContent: 'flex-end',
}));

export { CardAttachment, GroupTitle, LeftBox, RightBox };
