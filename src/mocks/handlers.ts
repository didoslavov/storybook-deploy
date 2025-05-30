import { http, HttpResponse } from 'msw';

// Mock data
const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
];

// Define handlers
export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json(mockUsers, { status: 200 });
  }),

  http.post('/api/users', async ({ request }) => {
    const userData = (await request.json()) as Record<string, unknown>;
    return new HttpResponse(JSON.stringify({ id: 4, ...userData }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }),

  http.get('/api/profile', () => {
    return new HttpResponse(
      JSON.stringify({
        id: 1,
        username: 'testuser',
        email: 'test@example.com',
        role: 'admin'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  })
];
