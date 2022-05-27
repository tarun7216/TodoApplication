import React, {useState} from 'react'
import Example from './Example'
import '../../App.css'

const Exampleapp = () => {
    const [toggled,setToggled] = useState(false);
  return (
    <div className='App'>
        <button onClick={() => setToggled(!toggled)}>
            Toggle
        </button>
        {toggled && <Example />}
      {/* <Example /> */}
    {toggled ? <h1>Online-Tarun</h1> :<h1>Offline</h1> }
    </div>
  )
}

export default Exampleapp
