import React, {useState} from 'react';
import Counter from "../components/Counter";
import ClassCounter from "../components/ClassCounter";
import MyInput from "../components/UI/input/MyInput";

const ComponentsSimple = () => {
    const [value, setValue] = useState('Hello')
    return (
        <div>
            <Counter/>
            <hr style={{margin: "15px 0"}}/>
            <ClassCounter/>
            <hr style={{margin: "15px 0"}}/>
            {/*Двусторонее связывание*/}
            <div style={{textAlign: "center"}}>
                <h1>{value}</h1>
                <MyInput type="text" value={value} onChange={event => setValue(event.target.value)}/>
            </div>
        </div>
    );
};

export default ComponentsSimple;
