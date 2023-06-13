import { Dispatch } from "redux";
import { AppActionsType } from "../store/store";

const InitialState = { value: 0 };

export type MaxValStateType = typeof InitialState;

export const maxValReducer = (state: MaxValStateType = InitialState, action: AppActionsType): MaxValStateType => {
    switch (action.type) {
        case "SET-MAX-VALUE": {
            return { ...state, value: action.payload.value }
        }
        case "GET-MAX-VALUE": {
            return { ...state, value: action.payload.value }
        }
        default: {
            return state;
        }
    }
}

export type maxValSettingACType = ReturnType<typeof maxValSettingAC>
export const maxValSettingAC = (value: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: { value }
    } as const
}

export type getMaxLocalStorageValueACType = ReturnType<typeof getMaxLocalStorageValueAC>;
export const getMaxLocalStorageValueAC = (value: number) => {
    return {
        type: 'GET-MAX-VALUE',
        payload: { value }
    } as const
}

//thunks

export const maxValSettingTC = (value: number) => {
    return (dispatch: Dispatch) => {
        localStorage.setItem('max-value', JSON.stringify(value));
        dispatch(maxValSettingAC(value));
    }
}

export const getMaxLocalStorageValueTC = () => {
    return (dispatch: Dispatch) => {
        const currentData = localStorage.getItem('max-value');
        if (currentData) {
            const retrievedData = JSON.parse(currentData);
            dispatch(getMaxLocalStorageValueAC(retrievedData));
        }
    }
}