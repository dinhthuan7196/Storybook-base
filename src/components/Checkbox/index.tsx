import { FC, SyntheticEvent } from 'react';

import { withStyles } from 'tss-react/mui';

import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import SvgIcon from '@mui/material/SvgIcon';

import Typography from '@components/Typography';

import { ReactComponent as CheckboxIndeterminate } from '../../assets/images/icn_checkbox_indeterminate.svg';
import { ReactComponent as CheckboxSelected } from '../../assets/images/icn_checkbox_selected.svg';
import { ReactComponent as CheckboxUnselected } from '../../assets/images/icn_checkbox_unselected.svg';

import { CheckboxLabelProps } from './props';
import styles from './styles';

const MyCheckbox: FC<CheckboxProps> = withStyles(
  (props) => (
    <Checkbox
      disableRipple
      checkedIcon={<SvgIcon component={CheckboxSelected} />}
      indeterminateIcon={<SvgIcon component={CheckboxIndeterminate} />}
      icon={<SvgIcon component={CheckboxUnselected} />}
      {...props}
    />
  ),
  styles
);

export default ({ label, indeterminate, onChange, ...rest }: CheckboxLabelProps) => (
  <FormControlLabel
    control={<MyCheckbox indeterminate={indeterminate} />}
    label={<Typography variant='bodyMedium'>{label}</Typography>}
    onChange={(event: SyntheticEvent, checked: boolean) => !!onChange && onChange(checked)}
    {...rest}
  />
);
