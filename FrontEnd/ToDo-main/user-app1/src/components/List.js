import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
export default function List() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    axios.get(`http://localhost:8080/api/tasks`)
      .then((response) => {
        console.log(response.data);
        setTasks(response.data);
      }).catch((error) => {
        console.log(error);
      })
  }

  const handleRegister = () => {
    // console.log(767);
    navigate('/create');
  }

  const handleLocalStorage = (assignedTo,status,dueDate,priority,comments) => {
    // console.log(id,name,userName,pass);
    localStorage.setItem("assignedTo", assignedTo);
    localStorage.setItem("status", status);
    localStorage.setItem("dueDate", dueDate);
    localStorage.setItem("priority", priority);
    localStorage.setItem("comments", comments);
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
     <nav class="navbar bg-body-tertiary">
      
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
          Tasks
        </a>
        
        <div class="btn-group" role="group" aria-label="Basic example">
        <Link to="/add"><button type="button" class="btn btn-primary">New Task</button></Link>
         <Link to="/list"><button type="button" class="btn btn-primary">Refresh</button></Link>
     
    </div>
      </div>
      <input type="text" placeholder="Search.." name="search2" style={{marginLeft : '811px'}}  />
      <i class="fa fa-search"></i>
      

    </nav>
      <div className="container mt-3 mb-3">
        {/* <button className='btn btn-info m-2' onClick={handleRegister}>Register</button> */}
        <div className="row mt-3 mb-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
</div>
</th>

                <th scope="col">AssignedTo</th>
                <th scope="col">Status</th>
                <th scope="col">Due Date</th>
                <th scope="col">Priority</th>
                <th scope="col">Comments</th>
              </tr>
            </thead>
            <tbody>
              {
                tasks.map((task) => {
                  return (
                    <tr>
                      <td>{task.assignedTo}</td>
                      <td>{task.assignedTo}</td>
                      <td>{task.status}</td>
                      <td>{task.dueDate}</td>
                      <td>{task.priority}</td>
                      <td>{task.comments}</td>
                      <td>
                        <Link to="/update">
                          <button
                            className="btn btn-success"
                            onClick={() =>
                              handleLocalStorage(

                                task.assignedTo,
                                task.status,
                                task.dueDate,
                                task.priority,
                                task.comments
                              )
                            }
                          >
                            Update
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <div class="pagination">
  <select class="page-size">
    <option value="10">10</option>
    <option value="20" selected>20</option>
    <option value="50">50</option>
  </select>
  <div style={{marginLeft:'595px'}}>
  <button type="button" class="first-page">First</button>
  <button type="button" class="prev-page">Prev</button>
  <input type="number" class="page-number" value="1" min="1"/>
  <button type="button" class="next-page">Next</button>
  <button type="button" class="last-page">Last</button>
</div>  
</div>

    </>
  );
}

