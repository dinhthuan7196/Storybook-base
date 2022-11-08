import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

const StyledMenuItem = styled(MenuItem)(({ theme }: Record<string, any>) => ({
  margin: theme.spacing(0, 1, 1, 1),
  height: theme.spacing(5),
  minWidth: theme.spacing(18),
  borderRadius: theme.borderRadius.default,
  padding: theme.spacing(1),
}));

export default (props: MenuItemProps) => <StyledMenuItem {...props} />;
