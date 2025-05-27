// import './App.css'
// import UsersAxios from './components/Axios/UsersAxios'
// import Users from './components/json/users'

// function App() {

//   return (
//     <>
//       <Users/>
//       {/* <UsersAxios/> */}
//     </>
//   )
// }

// export default App

//MSW
import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const onSendClick = (e) => {
    e.preventDefault();
    fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: 'token123'
      },
      body: JSON.stringify({ content }),
    });
  };
  
  return (
    <div>
      <h1>User List (Mocked API)</h1>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}

      <div>
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button onClick={onSendClick}>Send</button>
      </div>
    </div>
  );
};

export default App;
