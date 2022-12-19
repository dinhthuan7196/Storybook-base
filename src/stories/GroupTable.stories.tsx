import { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import isNaN from 'lodash/isNaN';
import range from 'lodash/range';
import set from 'lodash/set';

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

import GroupTable from '@components/GroupTable';
import { PROGRESS_STATUS } from '@components/GroupTable/constants';
import { ColumnProps } from '@components/GroupTable/props';
import IconButton from '@components/IconButton';

export default {
  title: 'GroupTable',
  component: GroupTable,
} as ComponentMeta<typeof GroupTable>;

export const Demo: ComponentStory<typeof GroupTable> = () => {
  const [data, setData] = useState<Record<string, unknown>[]>(
    range(1, 10).map((idx) => ({
      id: idx,
      name: `Student ${idx}`,
      overall: idx,
      overallLetter: 'A',
      attendance: null,
      participation: undefined,
      assignment_1: idx,
      assignment_2: {
        value: idx % 4 === 0 ? idx : '',
        status:
          idx % 2 === 0
            ? PROGRESS_STATUS.LATE_TURN_IN
            : idx % 3 === 0
            ? PROGRESS_STATUS.TURN_IN
            : PROGRESS_STATUS.MISSING,
      },
      homework_1: idx,
      homework_2: '',
      homework_3: idx,
    }))
  );

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
          endAdornment: () => (
            <IconButton>
              <DescriptionOutlinedIcon />
            </IconButton>
          ),
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
              width: 40,
              disabledEdit: true,
              alignData: 'center',
              renderCell: ({ value }) => (value ? `${value}%` : ''),
            },
            {
              accessor: 'overallLetter',
              width: 40,
              disabledEdit: true,
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
          inputType: 'number',
          numberProps: {
            decimalScale: 3,
            thousandSeparator: true,
          },
          rowSpan: 2,
          width: 120,
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
          inputType: 'number',
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
              inputType: 'number',
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
              inputType: 'number',
              isHoverShowAdornment: true,
              width: 200,
              hiddenSelectStatus: () => false,
              mappingOption: {
                [PROGRESS_STATUS.LATE_TURN_IN]: {
                  disabledMessage: 'aho aho aho',
                  isDisabledOption: () => false,
                },
                [PROGRESS_STATUS.TURN_IN]: {
                  label: 'PROGRESS STATUS TURN_IN =.=',
                  disabledMessage: 'ahoooooooooooo',
                  isDisabledOption: () => false,
                },
              },
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
      disabled: true,
      columns: [
        {
          header: 'Homework 1',
          variant: 'labelLarge',
          columns: [
            {
              header: 'pt. out of 100',
              accessor: 'homework_1',
              inputType: 'number',
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
              inputType: 'number',
            },
            {
              header: 'pt. out of 3333',
              accessor: 'homework_3',
              inputType: 'number',
            },
          ],
        },
      ],
    },
  ];

  const handleEditCell = ({ accessor, rowInfo, value }: any) => {
    if (!isNaN(value) && value !== rowInfo?.row?.value)
      setData((prevData: Record<string, any>[]) =>
        prevData.map((_data: Record<string, any>) => {
          if (_data?.id === rowInfo?.id) {
            return set(_data, accessor, value);
          }

          return _data;
        })
      );
  };

  return <GroupTable columns={columns} rows={data} handleEditCell={handleEditCell} />;
};
