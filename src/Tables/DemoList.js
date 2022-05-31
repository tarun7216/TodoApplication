import React from "react";
import "../App.css";

const DemoList = ({ datalist, deleteHandler }) => {
  return (
    <div>
      {datalist.map((lists, index) => (
        <div key={index}>
          <table>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
            <tr>
              <td className="tabledata">{lists} </td>
              <td>
                <button onClick={() => deleteHandler(index)}>Delete</button>
              </td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
};

export default DemoList;
