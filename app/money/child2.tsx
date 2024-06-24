"use client"
import React from 'react';

interface Child2Props {
    decrementMoney: () => void;
}

const Child2: React.FC<Child2Props> = ({ decrementMoney }) => {
    return (
        <div>
            <h2>Child 2 Component</h2>
            <button onClick={decrementMoney} className=' bg-blue-500 text-white px-4 py-2 rounded '>Decrement by 500</button>
        </div>
    );
};

export default Child2;
