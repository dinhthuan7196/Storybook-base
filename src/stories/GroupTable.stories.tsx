import { ComponentMeta, ComponentStory } from '@storybook/react';

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
            },
            {
              accessor: 'overallLetter',
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
          header: 'Assignment 1',
          variant: 'labelLarge',
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
              accessor: 'assignment_2',
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
          colSpan: 2,
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

  const rows: Record<string, unknown>[] = [
    {
      id: 1,
      name: 'Student 1',
      overall: '89.9%',
      overallLetter: 'A+',
      attendance: '100',
      participation: '69',
      assignment_1: '100',
      assignment_2: '',
      homework_1: '100',
      homework_2: '',
      homework_3: '35',
    },
    {
      id: 2,
      name: 'Student 2',
      overall: '89.9%',
      overallLetter: 'A+',
      attendance: '100',
      participation: '69',
      assignment_1: '100',
      assignment_2: '',
      homework_1: '100',
      homework_2: '',
    },
    {
      id: 3,
      name: 'Student 3',
      overall: '89.9%',
      overallLetter: 'A+',
      attendance: '100',
      participation: '69',
      assignment_1: '100',
      assignment_2: '',
      homework_1: '100',
      homework_2: '',
    },
    {
      id: 4,
      name: 'Student 4',
      overall: '89.9%',
      overallLetter: 'A+',
      attendance: '100',
      participation: '69',
      assignment_1: '100',
      assignment_2: '',
      homework_1: '100',
      homework_2: '',
    },
  ];

  const handleEditCell = (cell: unknown) => {
    console.log('=== cell ===: ', cell);
  };

  return <GroupTable columns={columns} rows={rows} handleEditCell={handleEditCell} />;
};
