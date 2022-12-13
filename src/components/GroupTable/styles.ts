import Box from '@components/Box';

import { themes } from '@styles/Themes';
import styled from 'styled-components';

import { PROGRESS_STATUS } from './constants';
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
    td {
      background: ${themes.newColors.primary[50]};
    }
  }
`;

const Cell = styled.td<CellProps>`
  max-width: ${({ width }) => `${width || 120}px`};
  width: ${({ width }) => `${width || 120}px`};
  padding: 8px;
  text-align: ${({ alignData }) => alignData || 'left'};
  background-color: ${({ status, disabled }) => {
    if (disabled) return themes.newColors.gray[50];

    switch (status) {
      case PROGRESS_STATUS.MISSING:
        return themes.newColors.red[50];
      case PROGRESS_STATUS.MISSED:
        return themes.newColors.gray[200];
      case PROGRESS_STATUS.TURN_IN:
        return themes.newColors.green[50];
      case PROGRESS_STATUS.LATE_TURN_IN:
        return themes.newColors.yellow[50];
      default:
        return '#FFF';
    }
  }};
  color: ${({ status }) => {
    switch (status) {
      case PROGRESS_STATUS.MISSING:
        return themes.newColors.red[600];
      case PROGRESS_STATUS.TURN_IN:
        return themes.newColors.green[600];
      case PROGRESS_STATUS.LATE_TURN_IN:
        return themes.newColors.yellow[600];
      default:
        return themes.newColors.gray[800];
    }
  }};
  .endAdornment {
    visibility: hidden !important;
  }
  :hover {
    .endAdornment {
      visibility: visible !important;
    }
  }
  :focus {
    border: 1px solid ${themes.newColors.primary[500]};
  }
  :focus-visible {
    outline: 0px solid ${themes.newColors.primary[500]};
  }
`;

const Header = styled.th<ColumnProps & { rowIndex: number }>`
  height: 43px;
  text-align: left;
  padding: 4px 8px;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'unset')};
  position: ${({ stickyLeft }) => (stickyLeft !== undefined ? 'sticky' : 'initial')};
  top: ${({ stickyLeft, rowIndex }) => (stickyLeft !== undefined ? `${rowIndex * 43}px` : 'unset')};
  left: ${({ stickyLeft }) => (stickyLeft !== undefined ? `${stickyLeft}px` : 'unset')};
  visibility: ${({ isHidden }) => (isHidden ? 'hidden' : 'visible')};
  border-radius: ${({ borderRadiusTop }) => (borderRadiusTop ? '8px 8px 0px 0px' : 'none')};
  background-color: ${({ groupHeader, disabled }) =>
    groupHeader ? (disabled ? themes.newColors.gray[200] : themes.newColors.gray[800]) : themes.newColors.gray[50]};
  color: ${({ groupHeader, disabled }) =>
    groupHeader ? (disabled ? themes.newColors.gray[600] : '#FFF') : themes.newColors.gray[800]};
  border-top-color: ${({ borderRadiusTop }) =>
    borderRadiusTop ? themes.newColors.gray[100] : 'transparent'} !important;
`;

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

export { BoxAdornment, Cell, Container, FlexBox, Header, Row, TBody, THead, Table };
