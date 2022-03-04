import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
    const [text,setText]=useState('')
    const [isError,setIsError]=useState(false)
    // const firstValue = text || 'hello world';//if text is empty then first value is hello world
    // const secondValue = text && 'hello world';
    return ( 
    <>
        {/* <h1>{firstValue}</h1> */}
        {/* <h1>value:{secondValue}</h1> */}
        <h1>{text || 'John Doe'}</h1>
        <button className="btn" onClick={()=>setIsError(!isError)}>Toggle error</button>
        {isError && <h1>Error!!!</h1>}
        {isError ? <h1>Error found!!!</h1> : <h1>No error!!!</h1>}
    </>)
};

export default ShortCircuit;
