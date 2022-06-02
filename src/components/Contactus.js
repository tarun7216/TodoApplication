import React, { useState } from "react";

const Contactus = () => {
  const [First, setFirst] = useState();
  const [Last, setLast] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [accepted, setAccepted] = useState();

  const handleSubmit = (e) => {
   
    // console.log(
    //   FirstName = {First},
    //   LastName = {Last},
    //   Email = {email},
    //   Message = {message},
    //   Accepted ={accepted},
    //   );

    e.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <h2>Contact Us Form </h2>
      <lable>
        FirstName:
        <input
          name="FirstName"
          type="text"
          value={First}
          onChange={(e) => setFirst(e.target.value)}
        required />
      </lable><br/>
      <lable>
        LastName: &nbsp;
        <input
          name="LastName"
          type="text"
          value={Last}
          onChange={(e) => setLast(e.target.value)}
          required />
      </lable><br/>
      <lable>
        Email-Id:
        <input
          name="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required  />
      </lable><br/>
      <label>
        Message
        <textarea
          name="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required />
      </label><br/>
      <lable>
        <input
          name="accepted"
          type="checkbox"
          value={accepted}
          onChange={(e) => setAccepted(e.target.value)}
          required />
      </lable><br/>
      <button>Submit</button>
    </form>
  );
};

export default Contactus;
