import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <div className="p-4 text-center">Loading users...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="mb-4 text-xl font-semibold">Users</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-3 border rounded hover:bg-gray-50">
            <div className="font-medium">{user.name}</div>
            <div className="text-sm text-gray-600">{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
