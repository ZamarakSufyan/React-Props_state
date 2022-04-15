import React, { useState } from "react";
import Yellow from "./Yellow";

function Red(){

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
    return (
      
        <div className="red">
          <div className="btn">
            <button onClick={incrementCount}> Add level 1</button>
            </div>
            
            <h2> Count:{count}</h2>
           
            <Yellow updatelevel1={incrementCount}/>
      
            </div>
             
        
    );
}
export default Red;