import React, {useContext} from "react";
import {Comp1Context} from "./Component1";

function Component4() {
    const Comp4Context = useContext(Comp1Context);
    return(
        <div>
            <p>You pressed the button for {Comp4Context.Count} times!</p>
        </div>
    )
}

export default Component4;