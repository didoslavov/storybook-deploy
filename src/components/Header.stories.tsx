import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary']
    },
    title: { control: 'text' },
    subtitle: { control: 'text' }
  }
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    title: 'Primary Header',
    subtitle: 'This is a subtitle for the primary header'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    title: 'Secondary Header',
    subtitle: 'This is a subtitle for the secondary header'
  }
};

export const WithoutSubtitle: Story = {
  args: {
    variant: 'primary',
    title: 'Header Without Subtitle'
  }
};
