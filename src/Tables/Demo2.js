import React, { useState } from "react";
import DemoList from "./DemoList";
import '../App.css'

const Demo2 = () => {
    const[task,setTask] = useState("");
    const[list,setList] = useState([]);
    const changeHandler = e => {
        setTask(e.target.value)
    }
    
    const submitHandler = e => {
        e.preventDefault();
        const newList = [...list,task];
        setList(newList);
        setTask("");
    }
    const deleteHandler = ( indexValue) => {
        const newList = list.filter((lists,index) => index  !== indexValue);
        setList(newList);
    }
  return (
    <div>
      <center>
       <div>
       <form onSubmit={submitHandler}>
            <input type="text" name="task" value={task} onChange={changeHandler}/> <span> </span> 
            <input type="submit" value="Add" name="Add" />
        </form>
       </div>
       <span>

       </span>
        <DemoList datalist={list} deleteHandler={deleteHandler}/>

      </center>
    </div>
  );
};

export default Demo2;
