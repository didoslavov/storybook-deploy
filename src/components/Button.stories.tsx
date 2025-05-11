import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    size: 'md'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    size: 'md'
  }
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
    size: 'md'
  }
};

export const Small: Story = {
  args: {
    variant: 'primary',
    children: 'Small Button',
    size: 'sm'
  }
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    children: 'Medium Button',
    size: 'md'
  }
};

export const Large: Story = {
  args: {
    variant: 'primary',
    children: 'Large Button',
    size: 'lg'
  }
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    size: 'md',
    disabled: true
  }
};
