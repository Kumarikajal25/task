"use client"
import React, { useState } from 'react';
import Child1 from './child1';
import Child2 from './child2';

export default function Parent(){
    const [money, setMoney] = useState<number>(0);

    const incrementMoney = () => {
        setMoney(money + 1000);
    };

    const decrementMoney = () => {
        setMoney(money - 500);
    };

    return (
        <div className='flex  flex-col min-h-screen'>
            <div className=' items-center flex flex-col justify-center'>
            <h1>Parent Component</h1>
            <p>Money: {money}</p>
            <Child1 incrementMoney={incrementMoney} />
            <Child2 decrementMoney={decrementMoney} />
            </div>
            
        </div>
    );
};


