import React from "react";
import "../App.css";

const DemoList = ({ datalist}) => {
    
  return (
    <div>
      {datalist.map((lists, key) => (
        <div key={key}>
          {lists} 
        </div>
      ))}
    </div>
  );
};

export default DemoList;