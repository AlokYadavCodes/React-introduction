import { useState } from 'react';
import style from './display.module.css'

function Display({displayValue}){

    return (
        <>
        <input readOnly className={style.display} value={displayValue}>
        </input>
        </>
    )
}

export default Display;