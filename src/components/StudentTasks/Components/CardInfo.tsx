import AssignmentIcon from '@mui/icons-material/AssignmentOutlined';
import CalendarIcon from '@mui/icons-material/CalendarMonthOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Box from '@components/Box';
import Button from '@components/Button';
import Divider from '@components/Divider';
import IconButton from '@components/IconButton';
import Typography from '@components/Typography';
// import QuizIcon from '@mui/icons-material/QuizOutlined';

import { GroupCalendar } from '../styles';
import { CardInfo, ContentBottom, ContentTop, Icon } from '../styles';

export default () => (
  <CardInfo>
    <ContentTop>
      <Icon>
        <AssignmentIcon fontSize='small' />
      </Icon>
      <Box ml={2}>
        <Typography component='div'>Title</Typography>
        <Typography component='div'>Sub Title</Typography>
      </Box>
      <Box className='last-item' mr={1}>
        <Typography component='div'>Title</Typography>
        <Typography component='div'>Sub Title</Typography>
      </Box>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <MoreVertIcon fontSize='small' />
      </IconButton>
    </ContentTop>
    <Divider />
    <ContentBottom>
      <GroupCalendar>
        <CalendarIcon fontSize='small' />
        <span>34</span>
      </GroupCalendar>
      <Typography noWrap component='div' sx={{ maxWidth: '80%' }}>
        Nothing in here !! Nothing in here !! Nothing in here !! Nothing in here !! Nothing in here !! Nothing in here
        !! Nothing in here !! Nothing in here !! Nothing in here !! Nothing in here !! Nothing in here !! Nothing in
        here !! Nothing in here !! Nothing in here !! Nothing in here !! Nothing in here !! Nothing in here !! Nothing
        in here !! Nothing in here !! Nothing in here !!
      </Typography>
      <Button
        className='last-item'
        variant='outlined'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        Schedule
      </Button>
    </ContentBottom>
  </CardInfo>
);
