import React from 'react';
import styles from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: ()=> void
    id: number
    counterValue: number
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
                disabled={props.counterValue === 5 && props.id === 2}
            >
                {props.name}
            </button>
        </>
    );
};