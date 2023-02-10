import React, {ChangeEvent, useState} from 'react';
import  styles from './Counter.module.css'
import {Button} from "../VersatileButton/Button";
export const Counter = () => {

    //max value setting state
    const[maxValue, setMaxValue]=useState(Number('0'));

    //start value setting state
    const[startValue, setStartValue]=useState(Number('0'));
    console.log('start value:', startValue)
    //counter incrementing state
    const[counterValue, setCounterValue]=useState(0);


    //max&start values setting func
    const valueSettingHandler = () => {
        setCounterValue(startValue);
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
    }
    return (
        <div className={styles.main_container}>

            {/*Incrementing counter*/}
            <div className={styles.counter_container}>
                <div className={styles.set_display}>
                    <div className={styles.val_container}>
                        <h2>max-value:</h2>
                        <input type="number" onChange={maxValueGettingHandler} value={maxValue}/>
                    </div>
                    <div className={styles.val_container}>
                        <h2>start-value:</h2>
                        <input type="number" onChange={startValueGettingHandler} value={startValue}/>
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
                    />
                </div>
            </div>

            {/*value setting container*/}
            <div className={styles.counter_container}>
                <div className={`${styles.incr_display} ${maxValue !== 0 && counterValue === maxValue && styles.max_val}`}>
                    {counterValue}
                </div>
                <div className={styles.incr_btn_container}>
                    <Button
                        id={2}
                        name={'INCREMENT'}
                        callBack={incrementValueHandler}
                        counterValue={counterValue}
                        maxValue={maxValue}
                        startValue={startValue}
                    />
                    <Button
                        id={3}
                        name={'RESET'}
                        callBack={resetValueHandler}
                        counterValue={counterValue}
                        maxValue={maxValue}
                        startValue={startValue}
                    />
                </div>
            </div>
        </div>
    );
};