import React from 'react'
import '../App.css'

const data = [
    {name: "Tarun", age: 26, gender: "Male" },
    {name: "Sai", age: 25, gender: "Male" },
    {name: "Vinay", age: 24, gender: "Male" },
    {name: "Madhu", age: 28, gender: "Female" },
    {name: "Mouni", age: 27, gender: "Female" },
    {name: "Venky", age: 29, gender: "Male" },
]
const Demo1 = () => {
  return (
    <div className='tablecn'>
      <table>
          <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
          </tr>
          {data.map((value,key) => {
              return(
                  <tr key={key}>
                      <td>{value.name}</td>
                      <td>{value.age}</td>
                      <td>{value.gender}</td>
                  </tr>
              )
          })}
      </table>
    </div>
  )
}

export default Demo1
