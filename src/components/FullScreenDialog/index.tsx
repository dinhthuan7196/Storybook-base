import { ReactElement, Ref, forwardRef } from 'react';

import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import { TransitionProps } from '@mui/material/transitions';

import CloseIcon from '@mui/icons-material/CloseRounded';

import IconButton from '@components/IconButton';

import { FullScreenDialogProps } from './props';
import { Content, StyledAppBar, StyledDialog, Title } from './styles';

const Transition = forwardRef((props: TransitionProps & { children: ReactElement }, ref: Ref<unknown>) => (
  <Slide direction='up' ref={ref} {...props} />
));

export default ({ children, groupButtons, title, open, onClose, ...rest }: FullScreenDialogProps) => (
  <StyledDialog fullScreen open={!!open} onClose={onClose} TransitionComponent={Transition} {...rest}>
    <StyledAppBar>
      <Toolbar>
        <IconButton aria-label='close' size='small' onClick={onClose}>
          <CloseIcon />
        </IconButton>
        {!!title && (
          <Title component='div' variant='titleLarge'>
            {title}
          </Title>
        )}
        {groupButtons}
      </Toolbar>
    </StyledAppBar>
    <Content>{children}</Content>
  </StyledDialog>
);
