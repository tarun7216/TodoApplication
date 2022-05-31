import React, { useState } from "react";

const Radios = () => {
  const data = ["Tarun", "Sai", "Madhuri", "Venky"];
  const [text, setText] = useState();
  const changeHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <div>
        <h2> Radio Button and Get selected radio button value.</h2>
      </div>
      <div>
        {data.map((name) => (
          <>
            <input
              type="radio"
              value={name}
              name="radiovalue"
              onChange={changeHandler}
            />

            <b>{name}</b>
          </>
        ))}
        <aside>
          <h3>{text}</h3>
        </aside>
      </div>
      <div>
        {data.map((name) => (
          <>
            <input type="checkbox" value={name} />

            <b>{name}</b>
          </>
        ))}
      </div>
    </div>
  );
};

export default Radios;
