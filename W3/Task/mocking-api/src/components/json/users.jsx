// import React, { useState, useEffect } from 'react';
// // import usersData from './users.json'; // fixed path

// function Users() {
//     // const [userList, setUsers] = useState([]);


//     // useEffect(() => {
//     //     setUsers(usersData);
//     // }, []);

//     return (
//         <div>
//             <h1>Users List</h1>
//             <ul>
//                 {userList.map((user, index) => (
//                     <li key={index}>{user.name}</li> // assuming each user has a 'name' field
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Users;


import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default Users;