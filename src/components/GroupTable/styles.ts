import Box from '@components/Box';
import MenuItem from '@components/Menu/MenuItem';

import { themes } from '@styles/Themes';
import styled from 'styled-components';

import { renderBackground, renderColor } from './helpers';
import { CellProps, ColumnProps } from './props';

const Container = styled.div`
  overflow: auto;
`;

const Table = styled.table`
  width: max-content;
  border-collapse: separate;
  border-spacing: 0px;

  td,
  th {
    border: 1px solid ${themes.newColors.gray[100]};
    border-top-color: transparent;
  }

  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Row = styled.tr`
  :hover {
    td,
    th {
      cursor: default;
    }
    td,
    td > div > input {
      background: ${themes.newColors.primary[50]};
    }
  }
`;

const Cell = styled.td<CellProps>(({ width, alignData, status, disabled }) => ({
  maxWidth: width || 120,
  width: width || 120,
  padding: '2px 6px',
  textAlign: alignData || 'left',
  backgroundColor: renderBackground({ status, disabled }),
  color: renderColor({ status, disabled }),
  '.endAdornment': {
    visibility: 'hidden',
  },
  ':hover': {
    '.endAdornment': {
      visibility: 'visible',
    },
  },
  ':focus': {
    border: `1px solid ${themes.newColors.primary[500]}`,
  },
  ':focus-within': {
    border: `1px solid ${themes.newColors.primary[500]}`,
  },
  ':focus-visible': {
    outline: `0px solid ${themes.newColors.primary[500]}`,
  },
}));

const Header = styled.th<ColumnProps & { rowIndex: number }>(
  ({ alignHeader, maxWidth, isHidden, borderRadiusTop, groupHeader, disabled, stickyLeft, rowIndex }) => ({
    height: 43,
    textAlign: alignHeader || 'left',
    padding: '4px 8px',
    maxWidth: maxWidth || 'unset',
    visibility: isHidden ? 'hidden' : 'visible',
    borderRadius: borderRadiusTop ? '8px 8px 0px 0px' : 'none',
    backgroundColor: groupHeader
      ? disabled
        ? themes.newColors.gray[200]
        : themes.newColors.gray[800]
      : themes.newColors.gray[50],
    color: groupHeader ? (disabled ? themes.newColors.gray[600] : '#FFF') : themes.newColors.gray[800],
    borderTopColor: `${borderRadiusTop ? themes.newColors.gray[100] : 'transparent'} !important`,
    position: stickyLeft !== undefined ? 'sticky' : 'initial',
    top: stickyLeft !== undefined ? `${rowIndex * 43}px` : 'unset',
    left: stickyLeft !== undefined ? `${stickyLeft}px` : 'unset',
  })
);

const THead = styled.thead``;
const TBody = styled.tbody``;

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoxAdornment = styled(Box)`
  .MuiIconButton-root {
    padding: 0px;
    :hover {
      background-color: unset;
    }
  }
  .MuiSvgIcon-root {
    width: 18px;
  }
`;

const Input = styled.input<CellProps>(({ status }) => ({
  ...themes.typography.bodyMedium,
  width: '100%',
  border: 'none',
  height: 30,
  backgroundColor: renderBackground({ status }),
  ':focus': {
    '::placeholder ': {
      color: 'transparent',
    },
  },
  ':focus-visible': {
    outline: 'none',
  },
  '::placeholder': {
    color: renderColor({ status }),
  },
  ':disabled': {
    color: themes.newColors.gray[800],
  },
}));

const Option = styled(MenuItem)<{ status?: number }>(({ status }) => ({
  backgroundColor: renderBackground({ status }),
  color: renderColor({ status }),
}));

export { BoxAdornment, Cell, Container, FlexBox, Header, Row, TBody, THead, Table, Input, Option };
