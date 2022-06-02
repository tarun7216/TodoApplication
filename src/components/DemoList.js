import React from "react";
import "../App.css";

const DemoList = ({ datalist, deleteHandler, editHandler }) => {
  return (
    <div>
      <div>
        <table style={{ width: 500 }} className="btn btn-table">
          <thead>
            <tr>
              <th>FirstName:</th>
              <th>LastName:</th>
              <th>Email:</th>
              <th>Message:</th>
              <th>Gender:</th>
              <th>checkbox:</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {datalist.map((lists, key) => {
            console.log(lists," lists");
            return (
              <tr border-size="4">
                <td>{lists.firstName} </td>
                <td>{lists.lastName}</td>
                <td>{lists.eMail}</td>
                <td>{lists.textMessage}</td>
                <td>{lists.Sex}</td>
                <td>{lists.accepted}</td>
                
                 <td><button onClick={() => editHandler(key)}>Edit</button></td> 
                <td><button onClick={() => deleteHandler(key)}>Delete</button></td> 
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default DemoList;
