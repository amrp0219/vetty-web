import { Meta, Story } from '@storybook/react';
import { Input } from '.';
import { ThemeWrapper } from '../../Theme/ThemeWrapper';
import { IInputProps } from './types';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<IInputProps> = (args) => (
  <ThemeWrapper>
    <Input {...args} />
  </ThemeWrapper>
);

export const Text = Template.bind({});
Text.args = {
  placeholder: 'Text input',
};
