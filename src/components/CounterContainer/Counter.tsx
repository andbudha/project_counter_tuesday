import React, {ChangeEvent, useState} from 'react';
import  styles from './Counter.module.css'
import {Button} from "../VersatileButton/Button";
export const Counter = () => {
    //start value setting state
    const[startValue, setStartValue]=useState(Number('0'))

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
    
    //start value catching func
    const startValueGettingHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(event.currentTarget.value));
    }

    //value resetting func
    const resetValueHandler = () => {
        setCounterValue(0);
    }
    return (
        <div className={styles.main_container}>

            {/*Incrementing counter*/}
            <div className={styles.counter_container}>
                <div className={styles.set_display}>
                    <div className={styles.val_container}>
                        <h2>max-value:</h2>
                        <input type="number"/>
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
                    />
                </div>
            </div>

            {/*value setting container*/}
            <div className={styles.counter_container}>
                <div className={`${styles.incr_display} ${counterValue===5 && styles.max_val}`}>
                    {counterValue}
                </div>
                <div className={styles.incr_btn_container}>
                    <Button
                        id={2}
                        name={'INCREMENT'}
                        callBack={incrementValueHandler}
                        counterValue={counterValue}
                    />
                    <Button
                        id={3}
                        name={'RESET'}
                        callBack={resetValueHandler}
                        counterValue={counterValue}
                    />
                </div>
            </div>
        </div>
    );
};