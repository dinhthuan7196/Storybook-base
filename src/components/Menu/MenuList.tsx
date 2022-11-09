import { forwardRef } from 'react';

import MenuList, { MenuListProps } from '@mui/material/MenuList';
import { styled } from '@mui/material/styles';

const StyledMenuList = styled(MenuList)(({ theme }: Record<string, any>) => ({
  paddingBottom: theme.spacing(0.5),
}));

export default forwardRef<HTMLUListElement, MenuListProps>((props, ref) => <StyledMenuList ref={ref} {...props} />);
