import React, { useState } from 'react'

const Form = (props) => {
    const [name,setName] = useState("");
    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(name);
    }
  return (
    <div className='btn'>
      <form onSubmit={handleSubmit}>
          <input type='text' value={name} onChange={handleChange} />
          <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
  