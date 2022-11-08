import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: any) => ({
  emptyContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxHeight: 'calc(100% - 50px)',
    height: '100%',
    '&.style1': {
      color: theme.palette.primary.main,
      marginTop: theme.spacing(160 / 8 - 2),
    },
  },
  wrapContent: {
    textAlign: 'center',
    fontWeight: theme.fontWeight.light,
    marginTop: '4vh',
    marginBottom: theme.spacing(5),
    alignItems: 'center',
    '& .title': {
      fontWeight: theme.fontWeight.semi,
      fontSize: theme.fontSize.large,
    },
    '& .subtitle': {
      fontSize: theme.fontSize.normal,
      fontWeight: theme.fontWeight.normal,
    },
  },
  image: {
    margin: 'auto',
  },
  emptyTitle: {
    marginTop: theme.spacing(2),
    color: theme.newColors.gray[700],
  },
  emptySubTitle: {
    marginTop: theme.spacing(0.5),
    margin: 'auto',
    maxWidth: theme.spacing(62.5),
  },
  scrollBar: {
    width: '100%',
  },
}));

export default useStyles;
