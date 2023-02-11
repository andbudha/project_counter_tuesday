import React from 'react';
import styles from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: ()=> void
    id: number
    counterValue: number
    maxValue: number
    startValue: number
    btnState: boolean
}
export const Button = (props: ButtonPropsType) => {


    const onClickHandler = () => {
        props.callBack();
    }

    return (
        <>
            <button
                className={styles.btn}
                onClick={onClickHandler}
                disabled={
                    props.counterValue === props.maxValue && props.id === 2
                    || props.startValue === 0 && props.id === 1
                    || props.startValue === props.counterValue && props.id === 1
                    || props.btnState && props.id === 1
                    || props.maxValue < props.startValue && props.id === 2
                    || props.startValue < 0 && props.id !== 3
                    || props.maxValue < 0 && props.id !== 3
                    || props.startValue > props.maxValue && props.id === 1
                }
            >
                {props.name}
            </button>
        </>
    );
};