import React from 'react';
import './App.module.scss';
import s from './App.module.scss';
import {WorkSpace} from "../components/workSpace/WorkSpace";

function App() {
    return (
        <div className={s.app}>
            <div className={s.container}>
                <WorkSpace/>
            </div>
        </div>
    );
}

export default App;
