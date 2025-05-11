import type { Meta, StoryObj } from '@storybook/react';
import UserList from './UserList';
import { http, HttpResponse } from 'msw';

// Define the mock data for users
const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
];

const meta = {
  title: 'Components/UserList',
  component: UserList,
  parameters: {
    layout: 'centered',
    msw: {
      handlers: [
        http.get('/api/users', () => {
          return HttpResponse.json(mockUsers, { status: 200 });
        })
      ]
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof UserList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/users', () => {
          return HttpResponse.json([], { status: 200 });
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
          return HttpResponse.json(
            { message: 'Error fetching users' },
            { status: 500 }
          );
        })
      ]
    }
  }
};
