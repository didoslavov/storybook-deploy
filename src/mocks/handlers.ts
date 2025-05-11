import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
    ]);
  }),

  http.post('/api/users', async ({ request }: { request: Request }) => {
    const user = await request.json();
    return HttpResponse.json({ id: 4, ...user }, { status: 201 });
  }),

  http.get('/api/profile', () => {
    return HttpResponse.json({
      id: 1,
      username: 'testuser',
      email: 'test@example.com',
      role: 'admin'
    });
  })
];
