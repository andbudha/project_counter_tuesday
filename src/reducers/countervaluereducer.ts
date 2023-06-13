import { Dispatch } from "redux";
import { AppActionsType } from "../store/store";

const InitialState = { value: 0 }

export type CounterValStateType = typeof InitialState;

export const counterValReducer = (state: CounterValStateType = InitialState, action: AppActionsType): CounterValStateType => {
    switch (action.type) {
        case "SET-COUNTER-VALUE": {
            return { ...state, value: action.payload.value }
        }
        case "GET-COUNTER-VALUE": {
            return { ...state, value: action.payload.value }
        }
        default: {
            return state;
        }
    }
}

export type counterValSettingACType = ReturnType<typeof counterValSettingAC>
export const counterValSettingAC = (value: number) => {
    return {
        type: 'SET-COUNTER-VALUE',
        payload: { value }
    } as const
}

export type getCounterLocalStorageValueACType = ReturnType<typeof getCounterLocalStorageValueAC>;
export const getCounterLocalStorageValueAC = (value: number) => {
    return {
        type: 'GET-COUNTER-VALUE',
        payload: { value }
    } as const
}

//thunks

export const counterValSettingTC = (value: number) => {
    return (dispatch: Dispatch) => {
        localStorage.setItem('counter-value', JSON.stringify(value));
        dispatch(counterValSettingAC(value));
    }
}

export const getCounterLocalStorageValueTC = () => {
    return (dispatch: Dispatch) => {
        const currentData = localStorage.getItem('counter-value');
        if (currentData) {
            const retrievedData = JSON.parse(currentData);
            dispatch(getCounterLocalStorageValueAC(retrievedData));
        }
    }
}