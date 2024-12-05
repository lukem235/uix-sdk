import React, {useState} from 'react';

export default function Extension() {
    const [counter, setCounter] = useState(0);

    return (
        <div className='card'>
            <h3>Counter from guest</h3>
            <button onClick={() => {setCounter(counter + 1)}}>Count: {counter}</button>
        </div>
    );
};