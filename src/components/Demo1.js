import React, { useState } from "react";
import DemoList from "./DemoList";
import "../App.css";
import Submit from "./Submit";

const Demo2 = () => {
  const genderdata = ["Male", "Female", "Others"]
  const [gender, setGender] = useState("");
  const handlerChange = (e) => {
    setGender(e.target.value)

  }
  

  
 
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [gmail, setGmail] = useState("");
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);
  const [accepted,setAccepted] = useState(false);
  const submitHandler1 = (e) => {
      setAccepted(!accepted);
      
  }
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
      firstName :fName,
      lastName : lName,
      eMail : gmail,
      textMessage : msg,
      Sex : gender

    }
    console.log(data);
  //   const newList = [fName, lName, gmail,msg];
  //   setList(newList);
  //   setTask("");
  };

  return (
    <div>
      <center>
        <div>
          <form onSubmit={submitHandler}>
            <label>
              FirstName:
              <input
                type="text"
                name="fName"
                value={fName}
                onChange={changeHandler}
              />
            </label><br/>
            <label>
              LastName:
              <input
                type="text"
                name="lName"
                value={lName}
                onChange={changeHandler1}
              />
            </label><br/>
            <label>
              Email:
              <input
                type="email"
                name="gmail"
                value={gmail}
                onChange={changeHandler2}
              />
            </label><br/>
            <label>
              Message:
              <textarea
                type="textarea"
                name="msg"
                value={msg}
                onChange={changeHandler3}
              />
            </label><br/>
            <label>
              gender:
             {genderdata.map((text) => ( <><input type="radio" value={text} name="gender" onChange={handlerChange} />
             <b>{text}</b>
             </>))}
            
            </label>
            <br/>
            <input type="checkbox" value={accepted} onClick={submitHandler1}/>
                 If I tick checkbox submit button should Enable.

            <br/>
            <button disabled={!accepted}>Submit</button>
          </form>
        </div>
        <span></span>
        <DemoList datalist={list} />
        
      </center>
    </div>
  );
};

export default Demo2;
