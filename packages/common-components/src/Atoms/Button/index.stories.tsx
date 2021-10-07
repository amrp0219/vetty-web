import { Meta, Story } from '@storybook/react';
import { Button } from '.';
import { ThemeWrapper } from '../../Theme/ThemeWrapper';
import { IButtonProps } from './types';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => (
  <ThemeWrapper>
    <Button {...args} />
  </ThemeWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  onClick: () => {
    console.log('hey');
  },
  children: 'Click me',
};
