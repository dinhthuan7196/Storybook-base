import size from 'lodash/size';

import { autocompleteClasses } from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';

import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';

import CheckIcon from '@mui/icons-material/Check';

import Chip from '@components/Chip';
import ListItemIcon from '@components/List/ListItemIcon';
import ListItemText from '@components/List/ListItemText';
import MenuItem from '@components/Menu/MenuItem';
import MenuList from '@components/Menu/MenuList';
import Paper from '@components/Paper';
import TextField from '@components/TextField';

const InputWrapper = styled('div')(
  ({ theme }) => `
  border: 1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'};
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  border-radius: 8px;
  padding: 2px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
  }

  &.focused {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'};
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

const Listbox = styled('ul')(
  ({ theme }) => `
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);

export default function CustomizedHook() {
  const {
    getRootProps,
    // getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
    anchorEl,
  } = useAutocomplete({
    defaultValue: [top100Films[1]],
    multiple: true,
    options: top100Films,
    getOptionLabel: (option) => option.title,
    disableCloseOnSelect: true,
  });

  const { onClick, ...rest } = getRootProps() || {};

  console.log('==anchorEl', anchorEl);

  return (
    <>
      <div onClick={onClick} {...rest}>
        <TextField label='Testing' fullWidth sx={{ my: 5 }} />
      </div>

      <div onClick={onClick} {...rest}>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option: FilmOptionType, index: number) => (
            <Chip sx={{ m: 0.5 }} label={option.title} status='suspended' size='small' {...getTagProps({ index })} />
          ))}
          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {!!size(groupedOptions) && (
        <Paper>
          <MenuList {...getListboxProps()}>
            {(groupedOptions as typeof top100Films).map((option, index) => (
              <MenuItem {...getOptionProps({ option, index })}>
                <ListItemText>{option.title}</ListItemText>
                <ListItemIcon>
                  <CheckIcon fontSize='small' />
                </ListItemIcon>
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      )}
    </>
  );
}

interface FilmOptionType {
  title: string;
  year: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
];
