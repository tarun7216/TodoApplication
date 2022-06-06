import React from 'react'

const Onerow = ( lists, deleteHandler,editHandler) => {
  return (
    <form>
      <tr border-size="4">
                <td>{lists.firstName} </td>
                <td>{lists.lastName}</td>
                <td>{lists.eMail}</td>
                <td>{lists.textMessage}</td>
                <td>{lists.Sex}</td>
                <td>{lists.accepted}</td>
                <td>
                  <button
                    className="editbutton"
                    onClick={() => editHandler(lists)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="deletebutton"
                    onClick={() => deleteHandler(key)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
    </form>
  )
}

export default Onerow
