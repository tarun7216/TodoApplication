import React, { useState } from "react";
import "../App.css";


const Editable = ({firstName, lastName,eMail,textMessage,Sex}) => {
  const genderdata = ["Male", "Female", "Others"];
  const [gender, setGender] = useState(Sex ? Sex : "");
  const handlerChange = (e) => {
    setGender(e.target.value);
  };

  const [fName, setFName] = useState(firstName ? firstName: "" );
  const [lName, setLName] = useState(lastName ? lastName: "");
  const [gmail, setGmail] = useState(eMail ? eMail: "");
  const [msg, setMsg] = useState(textMessage ? textMessage: "");
  const [list, setList] = useState([]);
  const [accepted, setAccepted] = useState(false);
  
  console.log(accepted);
  const changeHandler = (e) => {
    setFName(e.target.value);
  };
  const changeHandler1 = (e) => {
    setLName(e.target.value);
  };
  const changeHandler2 = (e) => {
    setGmail(e.target.value);
  };
  const changeHandler3 = (e) => {
    setMsg(e.target.value);
  };
  const saveHandler = (e) => {
    e.preventDefault();
    const data = {
      firstName: fName,
      lastName: lName,
      eMail: gmail,
      textMessage: msg,
      Sex: gender,
      accepted: accepted,
    };
    console.log(data);
    const editList = [...list, data];
    setList(editList);
  };

  return (
    <div>
      <center>
        <div>
          <form onSubmit={saveHandler}>
            <table>
              <thead>
                <tr>
                  <th>FirstName:</th>
                  <th>
                 
                      <input
                        type="text"
                        name="fName"
                        value={fName}
                        onChange={changeHandler}
                      />
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LastName:</td>
                  <td>
                    <input
                      type="text"
                      name="lName"
                      value={lName}
                      onChange={changeHandler1}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>
                    <input
                      type="email"
                      name="gmail"
                      value={gmail}
                      onChange={changeHandler2}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Message: </td>
                  <td>
                    <textarea
                      type="textarea"
                      name="msg"
                      value={msg}
                      onChange={changeHandler3}
                    />
                  </td>
                </tr>
                <tr>
                  <td>gender:</td>
                  <td>
                    {genderdata.map((text) => (
                      <>
                        <input
                          type="radio"
                          value={text}
                          name="gender"
                          onChange={handlerChange}
                        />
                        <b>{text}</b>
                      </>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
            <button>Save</button>
          </form>
        </div>  
      </center>
    </div>
  );
};

export default Editable;
