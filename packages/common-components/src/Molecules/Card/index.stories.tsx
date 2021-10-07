import { Meta, Story } from '@storybook/react';
import { Card } from '.';
import { ThemeWrapper } from '../../Theme/ThemeWrapper';
import { ICardProps } from './types';

export default {
  title: 'Molecules/Card',
  component: Card,
} as Meta;

const Template: Story<ICardProps> = (args) => (
  <ThemeWrapper>
    <Card {...args} />
  </ThemeWrapper>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  ),
};

export const canBeDeleted = Template.bind({});
canBeDeleted.args = {
  canBeDeleted: true,
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  ),
};
