import React from 'react';
import styles from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: ()=> void
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
            >
                {props.name}
            </button>
        </>
    );
};