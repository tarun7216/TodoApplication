// import React from "react";

// const Inputdata = ({
//   submitHandler,
//   changeHandler,
//   fName,
//   lName,
//   changeHandler1,
//   gmail,
//   changeHandler2,
//   msg,
//   changeHandler3,
//   handlerChange,
//   accepted,
//   submitHandler1,
// }) => {
//   const genderdata = ["Male", "Female", "Others"];
//   const [inputdata, setInputdata] = useState({
//     fName: "",
//     lName: "",
//     eMail: "",
//     msg: "",
//     gender: "",
//   });

//   const onChangeHandler = (key) = (e, key) => {
//     setInputdata({
//       ...inputdata,
//       [key]: e.target.value,
//     });
//     console.log(inputdata);
//   };

//   return (
//     <div>
//       <center>
//         <div>
//           <form onSubmit={submitHandler}>
//             <table>
//               <thead>
//                 <tr>
//                   <th>FirstName:</th>
//                   <th>
//                     <input
//                       type="text"
//                       name="fName"
//                       value={inputdata.fName}
//                       onChange={onChangeHandler("fName")}
//                     />
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* <tr>
//                   <td>LastName:</td>
//                   <td>
//                     <input
//                       type="text"
//                       name="lName"
//                       value={inputdata.lName}
//                       onChange={changeHandler1}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Email:</td>
//                   <td>
//                     <input
//                       type="email"
//                       name="gmail"
//                       value={inputdata.gmail}
//                       onChange={changeHandler2}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Message: </td>
//                   <td>
//                     <textarea
//                       type="textarea"
//                       name="msg"
//                       value={inputdata.msg}
//                       onChange={changeHandler3}
//                     />
//                   </td>
//                 </tr> */}
//                 <tr>
//                   <td>gender:</td>
//                   <td>
//                     {genderdata.map((text) => (
//                       <>
//                         <input
//                           type="radio"
//                           value={text}
//                           name="gender"
//                           onChange={handlerChange}
//                         />
//                         <b>{text}</b>
//                       </>
//                     ))}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <input type="checkbox" value={accepted} onClick={submitHandler1} />
//             If I tick checkbox submit button should Enable.
//             <br />
//             <button disabled={!accepted}>Submit</button>
//           </form>
//         </div>
//         <span></span>
//       </center>
//     </div>
//   );
// };

// export default Inputdata;




// <td>
//                   <button className="editbutton" onClick={() => editHandler(lists)} >
//                     Edit
//                   </button>
                  
//                   {/* <Router>
//                   <Link to="/Editable">
//                   <button>Edit</button></Link>
//                   <switch> <Route path="./Editable" component={Editable}/></switch>
//                   </Router> */}
//                 </td>
//                 <td>
//                   <button className="deletebutton" onClick={() => deleteHandler(key)}>
//                     Delete
//                   </button>
//                 </td>