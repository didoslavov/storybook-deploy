import type { Meta, StoryObj } from '@storybook/react';
import UserList from './UserList';
import { http, HttpResponse } from 'msw';

const meta = {
  title: 'Components/UserList',
  component: UserList,
  parameters: {
    layout: 'centered',
    msw: {
      handlers: [
        http.get('/api/users', () => {
          return HttpResponse.json([
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
            { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
          ]);
        })
      ]
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof UserList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/users', () => {
          return HttpResponse.json([]);
        })
      ]
    }
  }
};

export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/users', () => {
          return HttpResponse.error();
        })
      ]
    }
  }
};
