import React, { useState } from 'react';

const UseStateCounter = () => {
    const [value,setValue]=useState(0);
    const complexIncrease=()=>{
        // setTimeout(() => {
        //     setValue(value+1);
        // }, 2000);//This will change only once no matter how many clicks done in 2s
        setTimeout(() => {
            setValue((prevState)=>{
                return prevState+1;
            });//For every click value is changed
        }, 2000);
    }
    return (
    <>
        <section>
            <h2>Regular counter</h2>
            <h2>{value}</h2>
            <button className="btn" onClick={()=>{setValue(value-1)}}>
                Decrease
            </button>
            <button className="btn" onClick={()=>{setValue(0)}}>
                Reset
            </button>
            <button className="btn" onClick={()=>{setValue(value+1)}}>
                Increase
            </button>
        </section>
        <section style={{marginTop:"1rem"}}>
            <h2>More complex counter</h2>
            <h2>{value}</h2>
            <button className="btn" onClick={complexIncrease}>
                Increase later
            </button>
        </section>
    </>
    );
};

export default UseStateCounter;
