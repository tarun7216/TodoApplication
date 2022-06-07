import React, { useState } from "react";

import "../App.css";
import TableView from "./TableView";

const InputForm = ({ firstName }) => {
  const genderdata = ["Male", "Female", "Others"];
  const [gender, setGender] = useState("");
  const handlerChange = (e) => {
    setGender(e.target.value);
  };

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [gmail, setGmail] = useState("");
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);
  const [accepted, setAccepted] = useState(false);
  const submitHandler1 = (e) => {
    setAccepted(!accepted);
  };
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
  const submitHandler = (e) => {
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
    const newList = [...list, data];
    setList(newList);
    setFName("");
    setLName("");
    setGmail("");
    setMsg("");
    setGender("");
    setAccepted(true);
  };
  const deleteHandler = (keyValue) => {
    const newList = list.filter((lists, key) => key !== keyValue);
    setList(newList);
  };

  return (
    <div>
      <center>
        <div>
          <form onSubmit={submitHandler}>
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
            <input type="checkbox" value={accepted} onClick={submitHandler1} />
            If I tick checkbox submit button should Enable.
            <br />
            <button disabled={!accepted}>Submit</button>
          </form>
        </div>
        <span></span>
        <TableView datalist={list} deleteHandler={deleteHandler} />
      </center>
    </div>
  );
};

export default InputForm;
