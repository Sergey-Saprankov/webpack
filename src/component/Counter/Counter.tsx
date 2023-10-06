import React, {useState} from 'react';

import style from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)
    const onDecrementHandler = () => {
        setCount(count - 1)
    }

    const onIncrementHandler = () => {
        setCount(count + 1)
    }
    return (
        <div className={style.counter}>
            <div className={style.color}>
                {count}
            </div>
            <div>
                <button onClick={onIncrementHandler}>increment</button>
                <button onClick={onDecrementHandler}>decrement</button>
            </div>
        </div>
    );
};