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
  title: 'Student Tasks Assigned',
  subTitle: 'Student Tasks Assigned subtitle',
};
