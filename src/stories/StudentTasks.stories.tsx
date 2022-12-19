import { ComponentMeta, ComponentStory } from '@storybook/react';

import StudentTasks from '@components/StudentPage/Tasks';
import { TasksProps } from '@components/StudentPage/Tasks/props';

export default {
  title: 'Student Tasks',
  component: StudentTasks,
  argTypes: {},
} as ComponentMeta<typeof StudentTasks>;

export const Demo: ComponentStory<typeof StudentTasks> = (args: TasksProps) => <StudentTasks {...args} />;

Demo.args = {
  title: 'Student Tasks Assigned',
};
