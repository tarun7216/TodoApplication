import React, { useState } from "react";

const Second = (props) => {
    const[product, setProduct] = useState([]);
    
    const handleChange = (e)=>{
        setProduct(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault()
    }
    
  return (
    <div>
      <form onClick={submitHandler} >
        <label>
          Smart Store:
          <select value={product} onChange={handleChange}>
            <option value="mobiles">Mobiles</option>
            <option value="laptops">Laptops</option>
            <option value="computers">Computers</option>
            <option value="ipads">Ipads</option>
            <option value="airpods">Airpods</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Second;
