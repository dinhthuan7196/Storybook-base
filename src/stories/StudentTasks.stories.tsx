import { ComponentMeta, ComponentStory } from '@storybook/react';

import StudentTasks from '@components/StudentTasks';
import { StudentTasksProps } from '@components/StudentTasks/props';

export default {
  title: 'Student Tasks',
  component: StudentTasks,
  argTypes: {},
} as ComponentMeta<typeof StudentTasks>;

export const Demo: ComponentStory<typeof StudentTasks> = (args: StudentTasksProps) => <StudentTasks {...args} />;

Demo.args = {
  maxHeight: 480,
  loading: false,
  title: 'Student Tasks Assigned',
  data: {
    assigned: [
      {
        title: 'Assigned 1',
        data: [
          {
            id: 1,
            title: '',
            subTitle: 'Course Name',
            status: 'late',
            type: 1,
            isHiddenFooter: true,
            hiddenContentRight: true,
          },
        ],
      },
      {
        title: 'Assigned 2',
        data: [
          {
            id: 2,
            title:
              'abcdqweiruehgldfjknghlkfhjngfloi dfsgljhrteuiohguioert geroigjeriogjer erlogiwerjiogeroig weoirh8w37qeuju2193erui430ifgtj weio0prjuf34890gjforiekgjnm fwo4hjgt98345hjtg89345noeigh',
            subTitle:
              'abcdqweiruehgldfjknghlkfhjngfloi dfsgljhrteuiohguioert geroigjeriogjer erlogiwerjiogeroig weoirh8w37qeuju2193erui430ifgtj weio0prjuf34890gjforiekgjnm fwo4hjgt98345hjtg89345noeigh',
            status: 'late',
            type: 4,
            isHiddenFooter: true,
            estimateTime: {
              dateTime: 'asdasdasd asdasdasd',
              estimate: 'asdasdasd',
              isAlert: false,
            },
          },
          {
            id: 3,
            title: 'huhuhu 3',
            subTitle: 'hahahah',
            status: 'late',
            type: 1,
            isHiddenFooter: true,
            hiddenContentRight: true,
          },
        ],
      },
    ],
    done: [
      {
        title: 'Assigned 2',
        subTitle: 'Sub Assigned 2',
        disabledCollapse: true,
        data: [
          {
            id: 2,
            title: 'huhuhu 2',
            subTitle: 'hahahah',
            status: 'late',
            type: 4,
            isHiddenFooter: true,
            overall: {
              status: 'Turn In Turn In Turn In',
              value: 43,
              disabled: false,
              onlyShowStatus: false,
            },
          },
          {
            id: 3,
            title: 'huhuhu 3',
            subTitle: 'hahahah',
            status: 'late',
            type: 1,
            isHiddenFooter: true,
            overall: {
              status: 'Turn In Turn In Turn In',
              value: 43,
              disabled: false,
              onlyShowStatus: false,
            },
          },
        ],
      },
      {
        title: 'Assigned 4',
        data: [
          {
            id: 4,
            title: 'huhuhu 4',
            subTitle: 'hahahah',
            status: 'late',
            type: 4,
            isHiddenFooter: true,
            hiddenContentRight: true,
          },
          {
            id: 5,
            title: 'huhuhu 5',
            subTitle: 'hahahah',
            status: 'late',
            type: 1,
            isHiddenFooter: true,
            hiddenContentRight: true,
          },
        ],
      },
      {
        title: 'Assigned 6',
        data: [
          {
            id: 6,
            title: 'huhuhu 6',
            subTitle: 'hahahah',
            status: 'late',
            type: 4,
            isHiddenFooter: true,
            hiddenContentRight: true,
          },
          {
            id: 7,
            title: 'huhuhu 7',
            subTitle: 'hahahah',
            status: 'late',
            type: 1,
            isHiddenFooter: true,
            hiddenContentRight: true,
          },
          {
            id: 8,
            title: 'huhuhu 8',
            subTitle: 'hahahah',
            status: 'late',
            type: 4,
            isHiddenFooter: true,
            hiddenContentRight: true,
          },
          {
            id: 9,
            title: 'huhuhu 9',
            subTitle: 'hahahah',
            status: 'late',
            type: 1,
            isHiddenFooter: true,
            hiddenContentRight: true,
          },
          {
            id: 10,
            title: 'huhuhu 10',
            subTitle: 'hahahah',
            status: 'late',
            type: 4,
            isHiddenFooter: true,
            hiddenContentRight: true,
          },
          {
            id: 11,
            title: 'huhuhu 11',
            subTitle: 'hahahah',
            status: 'late',
            type: 1,
            isHiddenFooter: true,
            hiddenContentRight: true,
          },
          {
            id: 12,
            title: 'huhuhu 12',
            subTitle: 'hahahah',
            status: 'late',
            type: 1,
            isHiddenFooter: true,
            hiddenContentRight: true,
          },
          {
            id: 13,
            title: 'huhuhu 13',
            subTitle: 'hahahah',
            status: 'late',
            type: 1,
            isHiddenFooter: true,
            hiddenContentRight: true,
          },
          {
            id: 14,
            title: 'huhuhu 14',
            subTitle: 'hahahah',
            status: 'late',
            type: 1,
            isHiddenFooter: true,
            hiddenContentRight: true,
          },
          {
            id: 15,
            title: 'huhuhu 15',
            subTitle: 'hahahah',
            status: 'late',
            type: 1,
            isHiddenFooter: true,
            hiddenContentRight: true,
          },
        ],
      },
    ],
  },
};
