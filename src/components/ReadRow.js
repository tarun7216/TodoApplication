import React from "react";

const ReadRow = (lists) => {
  return (
    <tr>
      <td>{lists.firstName} </td>
      <td>{lists.lastName}</td>
      <td>{lists.eMail}</td>
      <td>{lists.textMessage}</td>
      <td>{lists.Sex}</td>
      <td>{lists.accepted}</td>
    </tr>
  );
};

export default ReadRow;
