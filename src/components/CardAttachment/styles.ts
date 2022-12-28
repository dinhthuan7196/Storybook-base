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
  cursor: 'pointer',
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
  },
}));

const LeftBox = styled(EllipsisBox)(({ theme }: Record<string, any>) => ({
  ...FlexBox,
  marginRight: 16,
  '.MuiDivider-root': {
    borderColor: theme.newColors.gray[200],
  },
  ' svg.MuiSvgIcon-root': {
    fontSize: theme.fontSizeIcon.normal,
    path: {
      fill: theme.newColors.gray[800],
    },
  },
  ' svg[id*="icn"]': {
    width: theme.spacing(4.25),
    path: {
      fill: theme.newColors.gray[800],
    },
  },
  ' .google-icon': {
    margin: theme.spacing(0, 0.25),
  },
}));

const RightBox = styled(Box)(({ theme }: Record<string, any>) => ({
  ...FlexBox,
  marginLeft: 16,
  justifyContent: 'flex-end',
}));

export { CardAttachment, GroupTitle, LeftBox, RightBox };
