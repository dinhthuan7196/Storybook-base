import { useMemo } from 'react';

import get from 'lodash/get';

import Cell from './components/Cell';
import Header from './components/Header';
import { getTableConfigs } from './helpers';
import { GroupTableProps, _CellProps } from './props';
import { Container, Row, TBody, THead, Table } from './styles';

export default ({ columns, rows, handleEditCell }: GroupTableProps) => {
  let tabIndex = 0;

  const { accessors, groupHeaders } = useMemo(() => getTableConfigs(columns), [columns, rows]);

  return (
    <Container>
      <Table>
        <THead>
          {groupHeaders.map((row, idx) => (
            <Row key={`row-${idx}`}>
              {row.map((header, index) => (
                <Header key={`header-${index}`} {...header} />
              ))}
            </Row>
          ))}
        </THead>
        <TBody>
          {rows.map((row: Record<string, any>, idx) => (
            <Row key={`row-${idx}`}>
              {accessors.map(({ accessor, ...rest }: _CellProps) => {
                const value = get(row, accessor || '');

                tabIndex++;

                return (
                  <Cell
                    key={`cell-${tabIndex}`}
                    tabIndex={tabIndex}
                    cellInOtherRow={accessors.length}
                    cell={{
                      id: row?.id,
                      value,
                      row,
                    }}
                    {...rest}
                  >
                    {value}
                  </Cell>
                );
              })}
            </Row>
          ))}
        </TBody>
      </Table>
      <div
        id={`cell-${tabIndex + 1}`}
        tabIndex={tabIndex + 1}
        onFocus={() => {
          const firstItem = document.getElementById('cell-1');

          firstItem?.focus();
        }}
      />
    </Container>
  );
};
