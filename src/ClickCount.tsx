import React from "react";
import {useState} from "react";
import {useEffect} from "react";

function ClickCount() {
    const [Count, setCount] = useState(localStorage.getItem('NumberClicks') || 0);

    useEffect(() => {
        localStorage.setItem('NumberClicks', Count.toString());

    }, [Count])
    function incrementCount() {
        if (typeof Count === "string") {
            setCount(parseInt(Count, 10) + 1);
        } else {
            setCount(Count + 1);
        }
    }
    return (
        <div>
            <p>You clicked {Count} times!</p>
            <button onClick={incrementCount}> Click me!</button>
        </div>
    )
}

export default ClickCount;