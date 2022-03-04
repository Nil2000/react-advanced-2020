import React, { useState } from 'react';

const UseStateObject = () => {
    const [person,setPerson]=useState({
        name:"Peter",
        age:24,
        message:"Random message"
    }); 
    // console.log(person);
    const changeMessage=()=>{
        if(person.message==="Random Message"){
            setPerson({ ...person,message:"New Message"})
        }
        else{
            setPerson({ ...person,message:"Random Message"})
        }
    }
    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className="btn" onClick={changeMessage}>
                Change message
            </button>
        </>
    );
};

export default UseStateObject;
