import React, { useState } from 'react';



function Counter()
{
    const [count, setCount] = useState(0);
    const increment = () =>
    {
        setCount(prev => prev + 1);
        sayHello();
        staticMessage();
    }
    const decrement = () => {
        setCount(prev => prev - 1);
    }
    const sayHello = () => console.log("hello");
    const staticMessage = () => console.log("static meaage");
    return (
        <>
            <p>Count : {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    );
}

export default Counter;