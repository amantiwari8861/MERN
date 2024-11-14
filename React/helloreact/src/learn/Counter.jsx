import { useState } from "react"

const Counter = () => {

    let [num,setNum]=useState(0);  // state

    function incerement() 
    {
        setNum(num+1);
    }


  return (
    <div>
        <div className="container">
         {/* <h1>{(num>3) ? "greater than 3" : ""}</h1> */}

        { num > 4 ? <Error/> : <Success/> }

        </div>



        <h1>Num : {num}</h1>
        {/* <button onClick={incerement} className="btn btn-success">+</button> */}
        {/* <button onClick={setNum(num+1)} className="btn btn-danger">error</button> */}
        <button onClick={()=>setNum(num+1)} className="btn btn-success">increment</button>

      {console.log(num)}
    </div>
  )
}

export default Counter


let Success=()=>{    
return (
    <span style={{color:"green"}}>Correct Value! </span>
)};
let Error=()=>(
    <span style={{color:"red"}}>Error !!</span>
);