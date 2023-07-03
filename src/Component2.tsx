import React, { useContext} from "react";
import {Comp1Context} from "./Component1";

function Component2 () {
    const Comp2Context = useContext(Comp1Context);
    return (
        <div>
            <button onClick={Comp2Context.incrementCount}> Click me!</button>
        </div>
    )
}

export default Component2;