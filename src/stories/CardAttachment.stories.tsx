import { ComponentMeta, ComponentStory } from '@storybook/react';

import CardAttachment from '@components/CardAttachment';
import { CardAttachmentProps } from '@components/CardAttachment/props';

export default {
  title: 'CardAttachment',
  component: CardAttachment,
  argTypes: {},
} as ComponentMeta<typeof CardAttachment>;

export const Demo: ComponentStory<typeof CardAttachment> = (args: CardAttachmentProps) => <CardAttachment {...args} />;

Demo.args = {
  icon: 'lesson',
  title:
    'Assignment 1: Loren hahahaha Assignment 1: Loren hahahaha Assignment 1: Loren hahahaha Assignment 1: Loren hahahaha Assignment 1: Loren hahahaha',
  subTitle:
    'Document Document Document Document Document Document Document Document Document Document Document Document Document Document Document',
  onClick: () => alert('onClick !!'),
  onRemove: () => alert('onRemove !!'),
  switchProps: {
    label: 'Use as template',
    checked: true,
    onChange: () => alert('onChange !!'),
  },
};
