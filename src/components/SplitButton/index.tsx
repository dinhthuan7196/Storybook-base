import { useRef, useState } from 'react';

import size from 'lodash/size';

import ButtonGroup from '@mui/material/ButtonGroup';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Box from '@components/Box';
import Button from '@components/Button';
import ClickAwayListener from '@components/ClickAwayListener';
import MenuItem from '@components/Menu/MenuItem';
import MenuList from '@components/Menu/MenuList';

import { OptionItemsProps, SplitButtonProps } from './props';

export default ({ disabled, primaryLabel, optionItems, onClickPrimary, className }: SplitButtonProps) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef?.current?.contains(event.target as Node | null)) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <ButtonGroup ref={anchorRef} aria-label='split button' className={className}>
        <Button disabled={disabled} onClick={onClickPrimary}>
          {primaryLabel}
        </Button>
        <Box width='2px' sx={{ backgroundColor: disabled ? '#D4D4D8' : '#0F6BE6' }} />
        <Button
          disabled={disabled}
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label='select merge strategy'
          aria-haspopup='menu'
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          style={{ padding: 0, minWidth: 32 }}
        >
          <KeyboardArrowDownIcon fontSize='small' />
        </Button>
      </ButtonGroup>
      {!!size(optionItems) && (
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal placement='top-end'>
          {({ TransitionProps }) => (
            <Grow {...TransitionProps} style={{ transformOrigin: 'top' }}>
              <Paper sx={{ marginBottom: '10px' }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id='split-button-menu' autoFocusItem>
                    {optionItems.map((item: OptionItemsProps) => {
                      const { label, onItemClick, value } = item;

                      return (
                        <MenuItem
                          key={label}
                          onClick={() => {
                            onItemClick(value);
                            setOpen(false);
                          }}
                        >
                          {label}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      )}
    </>
  );
};
