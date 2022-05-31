import React from "react";

const DemoList = ({ datalist, deleteHandler}) => {
  return (
    <div>
      {datalist.map((lists, index) => (
        <div key={index}>
          <h4>
            {lists} <span> </span>
            <button onClick={() => deleteHandler(index)}>Delete</button>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default DemoList;
