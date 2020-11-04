import React, { useState } from 'react';

function HookCounter() {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    const reset = () => {
        setCount(0);
    }

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (<React.Fragment>
        <p>{ count }</p>
        <button onClick = { decrement }>Decrement</button>
        <button onClick = { reset }>Reset</button>
        <button onClick = { increment }>Increment</button>
    </React.Fragment>);
}

export default HookCounter;
