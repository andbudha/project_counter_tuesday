import React from 'react';
import  styles from './Counter.module.css'
import {Button} from "../VersatileButton/Button";
export const Counter = () => {
    return (
        <div className={styles.main_container}>
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
                    <Button/>
                </div>
            </div>
            <div className={styles.counter_container}>
                <div className={styles.incr_display}>0</div>
                <div className={styles.incr_btn_container}>
                    <Button/>
                    <Button/>
                </div>
            </div>
        </div>
    );
};