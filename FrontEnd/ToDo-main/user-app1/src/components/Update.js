import React, { useRef, useState } from 'react'
import axios from 'axios'
export default function Update() {
  const [u_userName, setUserName] = useState("");
  const [u_password, setPassword] = useState("");
  // let updatedUserName = useRef();
  // let updatedPassword = useRef();
  let id = localStorage.getItem('id');
  let name = localStorage.getItem('name');
  let userName = localStorage.getItem("userName");
  let password = localStorage.getItem('pass');
  console.log(id, name, userName, password);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(u_userName,u_password);
    axios.put(`http://localhost:8080/api/tasks/{id}`, {
      userName: u_userName,
      password: u_password
    }).then((response) => { 
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <>
      <div className="container mt-3 mb-3">
        <form className="myForm p-3">
          <div className="text-center">
            <h2>Update User</h2>
          </div>
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputUserName"
              // value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              // ref={updatedUserName}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword"
              // value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              // ref={updatedPassword}
            />
          </div>
          <button type="submit" class="btn btn-primary" onClick={handleUpdate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
