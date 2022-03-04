import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
    const [people,setPeople] = React.useState(data);
    // Fetching data from the data.js
    const removeItem = (id)=>{
        let newPeople=people.filter((person)=>person.id!==id);
        setPeople(newPeople);
        // Filter only those who don't have the mentioned id
    };
    return ( 
        <>
            {
                people.map((person)=>{
                    const {id,name}=person;
                    return (
                        <div key={id} className="item">
                            <h2>{id}</h2>
                            <h4>{name}</h4>
                            <button className="btn" onClick={()=>removeItem(id)}>
                                {/* This will remove only id item */}
                                Clear this item
                            </button>
                        </div>
                    );
                })
            }
            <button className='btn' onClick={()=>setPeople([])}>
                {/* This will remove all elements */}
                Clear items
            </button>
        </>
    );
};

export default UseStateArray;
