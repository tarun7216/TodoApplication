import React, { useState } from 'react'

const Submit = () => {
    const [accepted,setAccepted] = useState();
    const submitHandler = (e) => {
        setAccepted(e.target.value);
        
    }
  return (
    <div>
        <form>
        <label>
                <input type="checkbox" value={accepted} onClick={submitHandler}/>
                 If I tick checkbox submit button should Enable.
            </label><br/>
            <button>Submit</button>
           
        </form>
      
    </div>
  )
}

export default Submit
