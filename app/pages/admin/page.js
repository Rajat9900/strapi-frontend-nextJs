"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = ({ jwt }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
        // localStorage.getItem("jwt-token")
      try {
        const response = await axios.get(`http://localhost:1337/api/users`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers([jwt]);
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:1337/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;


