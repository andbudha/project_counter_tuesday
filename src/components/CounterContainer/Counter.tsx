import React, {ChangeEvent, useState} from 'react';
import  styles from './Counter.module.css'
import {Button} from "../VersatileButton/Button";
export const Counter = () => {
    //btn state
    const[btnState, setBtnState]=useState(false);

    //max value setting state
    const[maxValue, setMaxValue]=useState(Number('0'));

    //start value setting state
    const[startValue, setStartValue]=useState(Number('0'));

    //counter incrementing state
    const[counterValue, setCounterValue]=useState(0);

    //error state
    const[error, setError]=useState(true);

    //max&start values setting func
    const valueSettingHandler = () => {
        setCounterValue(startValue);
        setBtnState(true);
    }
    
    //value incrementing func
    const incrementValueHandler = () => {
        setCounterValue(counterValue + 1);
    }

    //max value getting func
    const maxValueGettingHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(event.currentTarget.value));
    }
    
    //start value catching func
    const startValueGettingHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(event.currentTarget.value));
    }

    //value resetting func
    const resetValueHandler = () => {
        setCounterValue(0);
        setMaxValue(0);
        setStartValue(0);
        setBtnState(false);
    }
    return (
        <div className={styles.main_container}>

            {/*Incrementing counter*/}
            <div className={styles.counter_container}>
                <div className={styles.set_display}>
                    <div className={styles.val_container}>
                        <h2>max-value:</h2>
                        <input
                            type="number"
                            onChange={maxValueGettingHandler}
                            value={maxValue}
                            className={`${maxValue < 0 && styles.input_error}`}
                        />
                    </div>
                    <div className={styles.val_container}>
                        <h2>start-value:</h2>
                        <input
                            type="number"
                            onChange={startValueGettingHandler}
                            value={startValue}
                            className={`${startValue < 0 && styles.input_error}`}
                        />
                    </div>
                </div>
                <div className={styles.set_btn_container}>
                    <Button
                        id={1}
                        name={'SET'}
                        callBack={valueSettingHandler}
                        counterValue={counterValue}
                        maxValue={maxValue}
                        startValue={startValue}
                        btnState={btnState}
                    />
                </div>
            </div>

            {/*value setting container*/}
            <div className={styles.counter_container}>
                <div className={`
                ${styles.incr_display} 
                ${maxValue !== 0 && counterValue === maxValue && styles.max_val}
                `}>
                    <span>{counterValue}</span>
                </div>
                <div className={styles.incr_btn_container}>
                    <Button
                        id={2}
                        name={'INCREMENT'}
                        callBack={incrementValueHandler}
                        counterValue={counterValue}
                        maxValue={maxValue}
                        startValue={startValue}
                        btnState={btnState}
                    />
                    <Button
                        id={3}
                        name={'RESET'}
                        callBack={resetValueHandler}
                        counterValue={counterValue}
                        maxValue={maxValue}
                        startValue={startValue}
                        btnState={btnState}
                    />
                </div>
            </div>
        </div>
    );
};