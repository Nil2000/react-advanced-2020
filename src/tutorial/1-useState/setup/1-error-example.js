import React from 'react';



const ErrorExample = () => {
    let title="Random title";
    const handleClick=()=>{
        title="New title";
        console.log(title);
    }
    return (
        <React.Fragment>
            <h2>{title}</h2>
            <button className="btn" onClick={handleClick}>Change title</button>
        </React.Fragment>
    );
};

export default ErrorExample;
