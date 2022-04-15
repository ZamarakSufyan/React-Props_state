import React, { useState } from "react";
function Blue({updateLevel1, updateLevel2,updateLevel3}){
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      
      setCount(count + 1);
    };
    return (
        <div className="blue-area"> 
        <div className="btn">
        <button onClick={incrementCount}> Add level3_1</button> 
        <button onClick={updateLevel1}> update level1</button> 
        <button onClick={updateLevel2}> update level2</button> 
        <button onClick={updateLevel3}> update level3</button> 
        

        </div>
        <h2> Count:{count}</h2>
        

            </div>
    );
}
export default Blue;