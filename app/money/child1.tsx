"use client"
import React from 'react';

interface Child1Props {
    incrementMoney: () => void;
}

const Child1: React.FC<Child1Props> = ({ incrementMoney }) => {
    return (
        <div>
            <h2>Child 1 Component</h2>
            <button onClick={incrementMoney} className='bg-blue-500 text-white px-4 py-2 rounded'>Increment by 1000</button>
        </div>
    );
};

export default Child1;
