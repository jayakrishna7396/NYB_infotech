import React,{UseEffect, useState} from "react";
import UseEffect from "../../use local hook/UseHook";

function UserEffect () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default UserEffect;







function A(){
    //    let[a,seta] useState(1)const ComponentsPage = () => {
      return (
        <div>
            <A/>
            <B/>
    
        </div>
      )
    }
    
    export default ComponentsPage



    import { useEffect, useState } from "react";
