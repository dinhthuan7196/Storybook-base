const PROGRESS_STATUS = {
  MISSING: -3,
  MISSED: -2,
  LATE_TURN_IN: -1,
  NOT_TURN_IN: 0,
  COMPLETED: 2,
  TURN_IN: 3,
  GRADED: 4,
  REJECTED: 5,
};

const OPTIONS_STATUS = [
  {
    label: 'Missing',
    value: PROGRESS_STATUS.MISSING,
  },
  {
    label: 'Missed',
    value: PROGRESS_STATUS.MISSED,
  },
  {
    label: 'Turned In',
    value: PROGRESS_STATUS.TURN_IN,
  },
  {
    label: 'Turned In (Late)',
    value: PROGRESS_STATUS.LATE_TURN_IN,
  },
];

export { PROGRESS_STATUS, OPTIONS_STATUS };
