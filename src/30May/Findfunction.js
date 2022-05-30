import React from 'react'

const Findfunction = () => {
    const numbers = [2,15,18,25];
    

   
  return (
    <div>
     <div>{numbers.find(num  => num>15)}</div>
     {numbers.findIndex(num  => num>19)}
    </div>
  )
}

export default Findfunction
