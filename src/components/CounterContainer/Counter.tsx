import React, {ChangeEvent, useState} from 'react';
import  styles from './Counter.module.css'
import {Button} from "../VersatileButton/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {counterValSettingAC, CounterValStateType} from "../../reducers/countervaluereducer";
import {startValSettingAC, StartValStateType} from "../../reducers/startvaluereducer";
import {maxValSettingAC, MaxValStateType} from "../../reducers/maxvaluereducer";
export const Counter = () => {
    //btn state
    const[btnState, setBtnState]=useState(false);

    //error state
    const[error, setError]=useState(false);

    const counterValue = useSelector<AppRootStateType, CounterValStateType>(state => state.counterValue);

    const startValue = useSelector<AppRootStateType, StartValStateType>(state => state.startValue);

    const maxValue = useSelector<AppRootStateType, MaxValStateType>(state => state.maxValue);

    const dispatch = useDispatch();



    //max&start values setting func
    const valueSettingHandler = (startValue: number) => {
        dispatch(counterValSettingAC(startValue));
        setBtnState(true);
    }
    
    //value incrementing func
    const incrementValueHandler = (counterValue: number) => {
        dispatch(counterValSettingAC(counterValue + 1));
    }

    //max value getting func
    const maxValueGettingHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(maxValSettingAC(Number(event.currentTarget.value)));
        if(Number(event.currentTarget.value) < 0){
            setError(true)
        } else {
            setError(false);
        }
    }
    
    //start value catching func
    const startValueGettingHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(startValSettingAC(Number(event.currentTarget.value)));
        if(Number(event.currentTarget.value) < 0){
            setError(true)
        } else {
            setError(false);
        }
    }

    //value resetting func
    const resetValueHandler = () => {
        dispatch(counterValSettingAC(0));
        dispatch(maxValSettingAC(0));
        dispatch(startValSettingAC(0));
        setBtnState(false);
        localStorage.clear();
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
                            className={`${maxValue < 0 
                            || maxValue > 0 && maxValue === startValue 
                            || maxValue < startValue ? styles.input_error : ''}`}
                        />
                    </div>
                    <div className={styles.val_container}>
                        <h2>start-value:</h2>
                        <input
                            type="number"
                            onChange={startValueGettingHandler}
                            value={startValue}
                            className={`${startValue < 0 
                            || startValue > 0 && maxValue === startValue 
                            || maxValue < startValue ? styles.input_error : ''}`}
                        />
                    </div>
                </div>
                <div className={styles.set_btn_container}>
                    <Button
                        id={1}
                        name={'SET'}
                        callBack={()=>valueSettingHandler(startValue)}
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
                    <span className={`${error || startValue < 0 || maxValue < 0 || maxValue > 0 && maxValue === startValue || maxValue < startValue ? styles.error_msg : ''}`}>
                        {error || startValue < 0 || maxValue < 0 || maxValue > 0 && maxValue === startValue || maxValue < startValue ? 'Incorrect Value!' : counterValue}
                    </span>
                </div>
                <div className={styles.incr_btn_container}>
                    <Button
                        id={2}
                        name={'INCREMENT'}
                        callBack={()=>incrementValueHandler(counterValue)}
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