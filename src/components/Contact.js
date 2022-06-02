import React, { useState } from "react";
import Submit from "./Submit";

const Contact = () => {
    const data = [ "Male", "Female", "Transgender"];
    const [gender,setGender] = useState();
    const changeHandler = (e) => {
        setGender(e.target.value);

    }

    
  return (
    <div>
      <form>
        <div>
          <label>
            <b>FirstName </b>: <input type="text" value="FirstName"/>
          </label><br/>
          <label>
            <b>LastName</b> : <input type="text" value="LastName" />
          </label>
        </div>
        <div>
            <label>
               <b> Email </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input type="text" value="Email" />
            </label><br/>
            <div>
                {data.map((text) => (
                    <>
                    <input type="radio" value={text} text="radiovalue" onChange={changeHandler} />
                    <b>{text}</b>
                    </> 
                   
                ))}
               
            </div>
           <Submit />
        </div>
      </form>
    </div>
  );
};

export default Contact;
