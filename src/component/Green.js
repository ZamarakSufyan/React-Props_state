import Blue from "./Blue";
import React, { useState } from "react";
function Green( {updateLevel1, updateLevel2}){
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      
      setCount(count + 1);
    };
    return (
        <div className="green-area"> 
        <div className="btn">
        <button onClick={incrementCount}> Add level3_1</button> 
        <button onClick={updateLevel2}> Add level2</button> 
        <button onClick={updateLevel1}> Add level1</button> 

        </div>
        <h2> Count:{count}</h2>

            <Blue updateLevel1={updateLevel1} updateLevel2={updateLevel2} updateLevel3={incrementCount} />
            </div>
    );
}
export default Green;