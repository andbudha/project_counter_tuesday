import React from 'react';
import  styles from './Counter.module.css'
export const Counter = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.counter_container}>

            </div>
            <div className={styles.counter_container}>
                <div className={styles.incr_display}>0</div>
                <div className={styles.btn_container}>

                </div>
            </div>
        </div>
    );
};