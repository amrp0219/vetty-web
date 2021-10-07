import { Meta, Story } from '@storybook/react';
import { Input, IInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<IInputProps> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  placeholder: 'Text input',
};
