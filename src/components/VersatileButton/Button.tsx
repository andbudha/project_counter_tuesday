import React from 'react';
import styles from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: ()=> void
    id: number
    counterValue: number
    maxValue: number
    startValue: number
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
                disabled={props.counterValue === props.maxValue && props.id === 2}
            >
                {props.name}
            </button>
        </>
    );
};