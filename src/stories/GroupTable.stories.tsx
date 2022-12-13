import { ComponentMeta, ComponentStory } from '@storybook/react';

import range from 'lodash/range';

import GroupTable from '@components/GroupTable';
import { ColumnProps } from '@components/GroupTable/props';

export default {
  title: 'GroupTable',
  component: GroupTable,
} as ComponentMeta<typeof GroupTable>;

export const Demo: ComponentStory<typeof GroupTable> = () => {
  const columns: ColumnProps[] = [
    {
      header: '',
      isHidden: true,
      colSpan: 3,
      columns: [
        {
          header: 'Student Name',
          accessor: 'name',
          variant: 'labelLarge',
          borderRadiusTop: true,
          rowSpan: 2,
          width: 200,
        },
        {
          header: 'Overall Grade',
          variant: 'labelLarge',
          borderRadiusTop: true,
          rowSpan: 2,
          colSpan: 2,
          columns: [
            {
              accessor: 'overall',
              width: 60,
              alignData: 'center',
            },
            {
              accessor: 'overallLetter',
              width: 60,
              alignData: 'center',
            },
          ],
        },
      ],
    },
    {
      header: 'Attendance · 10%',
      borderRadiusTop: true,
      groupHeader: true,
      columns: [
        {
          header: '%',
          accessor: 'attendance',
          rowSpan: 2,
          width: 120,
          renderCell: ({ value }) => `${value} render cell`,
        },
      ],
    },
    {
      header: 'Participation · 10%',
      borderRadiusTop: true,
      groupHeader: true,
      columns: [
        {
          header: '%',
          accessor: 'participation',
          rowSpan: 2,
        },
      ],
    },
    {
      header: 'Assignment · 20%',
      borderRadiusTop: true,
      groupHeader: true,
      colSpan: 2,
      columns: [
        {
          header: 'Assignment 1 2 3 4 5 6 7 8 9 0',
          variant: 'labelLarge',
          maxWidth: 120,
          isShowTooltip: true,
          columns: [
            {
              header: 'pt. out of 100',
              accessor: 'assignment_1',
            },
          ],
        },
        {
          header: 'Assignment 2',
          variant: 'labelLarge',
          columns: [
            {
              header: 'pt. out of 100',
              accessor: 'assignment_2.value',
              status: 'assignment_2.status',
              width: 200,
            },
          ],
        },
      ],
    },
    {
      header: 'Homework · 20%',
      borderRadiusTop: true,
      groupHeader: true,
      colSpan: 3,
      columns: [
        {
          header: 'Homework 1',
          variant: 'labelLarge',
          columns: [
            {
              header: 'pt. out of 100',
              accessor: 'homework_1',
            },
          ],
        },
        {
          header: 'Homework 2',
          variant: 'labelLarge',
          colSpan: 3,
          columns: [
            {
              header: 'pt. out of 100',
              accessor: 'homework_2',
            },
            {
              header: 'pt. out of 3333',
              accessor: 'homework_3',
            },
          ],
        },
      ],
    },
  ];

  const rows: Record<string, unknown>[] = range(1, 10).map((idx) => ({
    id: idx,
    name: `Student ${idx}`,
    overall: `${idx}%`,
    overallLetter: 'A+',
    attendance: idx,
    participation: idx,
    assignment_1: idx,
    assignment_2: {
      value: idx % 3 === 0 ? idx : '',
      status: -1,
    },
    homework_1: idx,
    homework_2: '',
    homework_3: idx,
  }));

  const handleEditCell = (cell: unknown) => {
    console.log('=== cell ===: ', cell);
  };

  return <GroupTable columns={columns} rows={rows} handleEditCell={handleEditCell} />;
};
