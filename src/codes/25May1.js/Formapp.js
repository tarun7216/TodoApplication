import React from 'react'
import Form from './Form';

const Formapp = () => {
  const getData = (data) => {
    console.log("Data from AppJs", data)
  };
  return (
    <div>
     <center>
     <Form onSubmit={getData} />
     </center>
    </div>
  )
}

export default Formapp
