import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './mocks'; // activates the mock adapter setup

function UsersAxios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h2>Mocked User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li> // Adjust based on mock data structure
        ))}
      </ul>
    </div>
  );
}

export default UsersAxios;
