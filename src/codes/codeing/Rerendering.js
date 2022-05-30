import React, {useEffect, useState} from 'react'

const Rerendering = () => {
    const[count,setCount] = useState(0);
   const handleClick = (e) => {
       console.log(count+1);
       setCount(count+1);
   }
   useEffect (() => {
       console.log("I am calling.")
   });
   useEffect (() => {
    console.log("I called once")
}, []
);

   console.log(count, "count value");
  return (
    <div>
      <h1>
          {count}
      </h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Rerendering
