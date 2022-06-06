import React, { useState } from "react";
import "../App.css";
import Demo1 from "./Demo1";
import Editable from "./Editable";
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


const DemoList = ({ datalist, deleteHandler }) => {
  const [editObject, setEditObject] = useState({});
  // const editHandler = (lists) => {
  //   setEditObject(lists);

  // };
    const [editData,setEditData] =useState(null);
  const editHandler = (editlists) => {
    setEditObject(editlists);
  };
  const dataEdit = ["firstName","lastName","eMail","textMessage","Sex","accepted"]
  return (
    <div>
      {Object.keys(editObject).length > 0 && <Editable firstName={editObject.firstName} lastName={editObject.lastName} eMail={editObject.eMail} textMessage={editObject.textMessage} Sex={editObject.Sex} />}
    
      <div>
        <table style={{ width: 500 }}>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Message</th>
              <th>Gender</th>
              <th>checkbox</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {datalist.map((lists, key) => {
            console.log(lists, " lists");
            return (
              <tr border-size="4">
                <td>{lists.firstName} </td>
                <td>{lists.lastName}</td>
                <td>{lists.eMail}</td>
                <td>{lists.textMessage}</td>
                <td>{lists.Sex}</td>
                <td>{lists.accepted}</td>
                <td>
                  <button
                    className="editbutton"
                    onClick={() => editHandler(lists)}
                  >
                    Edit
                  </button>
                  {/* <Router>
                  <Link to="/Editable">
                  <button>Edit</button></Link>
                  <switch> <Route path="./Editable" component={Editable}/></switch>
                  </Router> */}
                </td>
                <td>
                  <button
                    className="deletebutton"
                    onClick={() => deleteHandler(key)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}

        </table>
      </div>
    </div>
  );
};

export default DemoList;
