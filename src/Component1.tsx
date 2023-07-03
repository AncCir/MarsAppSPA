import React, {createContext} from "react";
import {useState} from "react";
import Component2 from "./Component2";
import Component3 from "./Component3";

export const Comp1Context = createContext({Count : 0, incrementCount : () => {}})

function Component1() {
    const [Count, setCount] = useState(0);
    function incrementCount() {
        setCount(Count + 1);
    }
    return (
        <Comp1Context.Provider value={{Count, incrementCount}}>
            <div>
                <Component2/>
                <Component3/>
            </div>
        </Comp1Context.Provider>
    )
 }

 export default Component1;