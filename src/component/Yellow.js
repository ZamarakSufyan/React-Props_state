import Green from "./Green";
import React, { useState } from "react";

const Yellow = ({updatelevel1})=>{

    const [count, setCount] = useState(0);

    const incrementCount = () => {
      
      setCount(count + 1);
    };
    return (
        <div className="yellow-area"> 
        <div className="btn">
          <button  onClick={incrementCount}> Add level 1</button>
          <button onClick={updatelevel1}>update level 1</button>
          </div>
             <h2> Count:{count}</h2>
            <Green updateLevel1={updatelevel1} updateLevel2={incrementCount} /> 
            </div>
    );
}
export default Yellow;