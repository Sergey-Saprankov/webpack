import React from 'react';
import {Counter} from "./component/Counter/Counter";
import './index.css'
import {Title} from "./component/Title/Title";

export const App = () => {
    return (
        <div className={'app'}>
            <Title/>
            <Counter/>
        </div>
    );
};