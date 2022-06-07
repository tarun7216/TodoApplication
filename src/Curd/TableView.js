import React, { useState } from "react";
import "../App.css";
import InputForm from "./InputForm";

const TableView = ({ datalist, deleteHandler }) => {
  const [editObject, setEditObject] = useState({});
  // const editHandler = (lists) => {
  //   setEditObject(lists);

  // };
  const [editData, setEditData] = useState(null);
  const editHandler = (editlists) => {
    setEditObject(editlists);
  };
  const dataEdit = [
    "firstName",
    "lastName",
    "eMail",
    "textMessage",
    "Sex",
    "accepted",
  ];
  return (
    <div>
      {Object.keys(editObject).length > 0 && (
        <InputForm
          firstName={editObject.firstName}
          lastName={editObject.lastName}
          eMail={editObject.eMail}
          textMessage={editObject.textMessage}
          Sex={editObject.Sex}
        />
      )}

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

export default TableView;
