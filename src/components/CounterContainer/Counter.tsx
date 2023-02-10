import React, {useState} from 'react';
import  styles from './Counter.module.css'
import {Button} from "../VersatileButton/Button";
export const Counter = () => {

    //counter incrementing state
    const[counterValue, setCounterValue]=useState(0);

    
    //value incrementing func
    const incrementValueHandler = () => {
        setCounterValue(counterValue + 1);
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
                        <input type="number"/>
                    </div>
                </div>
                <div className={styles.set_btn_container}>
                    <Button
                        id={1}
                        name={'SET'}
                        callBack={()=>{}}
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