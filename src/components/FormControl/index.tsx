import { forwardRef } from 'react';

import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

import Box from '@components/Box';
import Tooltip from '@components/Tooltip';

import { FormControlProps } from './props';
import { Optional, StyledFormControl, StyledFormHelperText, StyledFormLabel } from './styles';

export default forwardRef<HTMLDivElement, FormControlProps>(
  ({ label, required = true, helperLabel, helperText, children, disabled, error, ...rest }, ref) => {
    const options = { error, disabled };

    return (
      <StyledFormControl {...options} {...rest} ref={ref}>
        {label && (
          <Box sx={{ marginBottom: '1px', display: 'flex' }}>
            <Box>
              <StyledFormLabel {...options}>{label}</StyledFormLabel>
            </Box>
            {!required && (
              <Box>
                <Optional>(Optional)</Optional>
              </Box>
            )}
            {helperLabel && (
              <Tooltip title={helperLabel} arrow placement='right'>
                <HelpOutlineRoundedIcon sx={{ fontSize: 12 }} />
              </Tooltip>
            )}
          </Box>
        )}
        {children}
        {helperText && <StyledFormHelperText {...options}>{helperText}</StyledFormHelperText>}
      </StyledFormControl>
    );
  }
);
