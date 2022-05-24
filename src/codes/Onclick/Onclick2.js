import Spotlight from "../../images/Spotlight.png"
const Onclick2 = () => {
  return (
    <div>
      <center>
          <button onClick={() => console.log("Hitted")}>Click</button>
         <img src={Spotlight} />
      </center>
    </div>
  )
}

export default Onclick2;
