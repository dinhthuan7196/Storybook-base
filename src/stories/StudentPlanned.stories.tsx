import { ComponentMeta, ComponentStory } from '@storybook/react';

import StudentPlanned from '@components/StudentPage/Planned';
import { PlannedProps } from '@components/StudentPage/Planned/props';

export default {
  title: 'Student Planned',
  component: StudentPlanned,
  argTypes: {},
} as ComponentMeta<typeof StudentPlanned>;

export const Demo: ComponentStory<typeof StudentPlanned> = (args: PlannedProps) => <StudentPlanned {...args} />;

Demo.args = {
  title: 'Planned Schoolwork',
};
