import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {

    const [message, setMessage] = useState("Welcome");

    return (
        <>
            <h2>Parent Component</h2>

            <Child1 message={message} />

            <Child2 changeMessage={setMessage} />
        </>
    );
}

export default Parent;