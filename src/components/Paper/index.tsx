import MPaper, { PaperProps } from '@mui/material/Paper';

export default ({ children, ...rest }: PaperProps) => <MPaper {...rest}>{children}</MPaper>;
