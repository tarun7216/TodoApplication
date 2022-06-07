import React, { Fragment, useState } from "react";
import "../App.css";
import Demo1 from "./Demo1";
import Editable from "./Editable";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import ReadOnlyRow from "../Code/ReadOnlyRow";
import EditRow from "../Code/EditRow";

const DemoList = ({ datalist, deleteHandler}) => {
  // const [editObject, setEditObject] = useState({});

  // const editHandler = (lists) => {
  //   setEditObject(lists);
  // };
  // const [editData, setEditData] = useState(null);
  // const editClickHandler = (editlists) => {
  //   setEditData(editlists);
  // };
 const[editListIndex,setEditListIndex] = useState(null);
  const handleEditClick = (event, lists) => {
    event.preventDefault();
    setEditListIndex(lists.index);
  }
 const handleSaveChange = () => {
   
 }

  return (
    <div>
      {/* {Object.keys(editObject).length > 0 && (
        <Demo1
          firstName={editObject.firstName}
          lastName={editObject.lastName}
          eMail={editObject.eMail}
          textMessage={editObject.textMessage}
          Sex={editObject.Sex}
        />
      )} */}

      <div>
        <form>
        <table style={{ width: 500 }}>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Message</th>
              <th>Gender</th>
              <th>checkbox</th>
              <th>
                Edit
              </th>
              <th> Delete</th>
            </tr>
          </thead>
          <tbody>
            {datalist.map((lists,index) => (
              // console.log(lists, " lists");
              <Fragment key={index}>
                { editListIndex ===lists.index ? ( <EditRow lists={lists}  editClickHandler={handleSaveChange}/> ) : ( <ReadOnlyRow lists={lists} index={index} deleteHandler={deleteHandler}handleEditClick={handleEditClick}/>) }

                <EditRow />
                <ReadOnlyRow lists={lists} deleteHandler={deleteHandler} index={index} handleEditClick={handleEditClick}/>
               
              </Fragment>
       
            ))}
          </tbody>
        </table>
        
        </form>
      </div>
    </div>
  );
};

export default DemoList;
