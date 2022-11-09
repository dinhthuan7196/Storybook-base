import { ReactElement } from 'react';

import size from 'lodash/size';

import Autocomplete from '@mui/material/Autocomplete';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

import Box from '@components/Box';
import Checkbox from '@components/Checkbox';
import Chip from '@components/Chip';

import { DropdownProps, option, selectedOption } from './props';
import StyledFormControl from './styles';

const renderChip = (label: string, props?: Record<string, any>) => (
  <Chip label={label} status='suspended' size='small' {...props} />
);

const renderTags = (props: Record<string, any>, label: string, multiple?: boolean, selected?: boolean) => {
  let content: ReactElement = (
    <>
      <Box sx={{ textOverflow: 'ellipsis' }}>{label}</Box>
      {selected && (
        <Box sx={{ alignItems: 'center', alignContent: 'center', height: 25 }}>
          <CheckRoundedIcon color='secondary' />
        </Box>
      )}
    </>
  );

  if (multiple) {
    content = <Checkbox label={label} checked={selected} />;
  }

  return <Box {...props}>{content}</Box>;
};

export default ({
  placeholder,
  options = [],
  disableCloseOnSelect = true,
  onChange,
  value,
  label,
  errorMessage,
  multiple,
  width,
  disabled,
  required,
  disableFilter,
  sx,
  className,
  ...rest
}: DropdownProps) => (
  <>
    <StyledFormControl className={className} sx={{ ...sx, width }} disabled={disabled}>
      {!!label && <FormLabel required={required}>{label}</FormLabel>}
      <Autocomplete
        disablePortal
        size='small'
        disableCloseOnSelect={disableCloseOnSelect}
        value={value}
        options={options}
        multiple={multiple}
        disabled={disabled}
        onChange={(event: any, value: selectedOption) => onChange && onChange(value)}
        isOptionEqualToValue={(option: option, value: option) => option.value === value.value}
        getOptionDisabled={(option: option) => option?.disabled ?? false}
        getLimitTagsText={(more: number) => renderChip(`+${more}`)}
        clearIcon={multiple && <CancelOutlinedIcon fontSize='small' />}
        popupIcon={<ExpandMoreRoundedIcon />}
        renderTags={(values: option[], getTagProps) =>
          values.map(({ label }: option, index) => renderChip(label, getTagProps({ index })))
        }
        renderInput={({ inputProps, ...params }) => (
          <TextField
            {...params}
            placeholder={!value || !size(value) ? placeholder || 'Select an option' : ''}
            inputProps={{ ...inputProps, readOnly: disableFilter }}
          />
        )}
        renderOption={(props: Record<string, any>, { label }: option, { selected }: Record<string, any>) =>
          renderTags(props, label, multiple, selected)
        }
        {...rest}
      />
      {!!errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </StyledFormControl>
  </>
);
