import React from 'react';
import MyButton from "./UI/button/MyButton";

const Counter = () => {
    const [count,setCount] = React.useState(0)

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }
    return (
        <div style={{textAlign: "center"}}>
            <h1>{count}</h1>
            <MyButton onClick={increment}>Increment</MyButton>
            <MyButton onClick={decrement}>Decrement</MyButton>
        </div>
    );
};

export default Counter;
