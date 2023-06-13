import { Dispatch } from "redux";
import { AppActionsType } from "../store/store";

const InitialState = { value: 0 }

export type StartValStateType = typeof InitialState;

export const startValReducer = (state: StartValStateType = InitialState, action: AppActionsType): StartValStateType => {
    switch (action.type) {
        case "SET-START-VALUE": {
            return { ...state, value: action.payload.value }
        }
        case "GET-START-VALUE": {
            return { ...state, value: action.payload.value }
        }
        default: {
            return state;
        }
    }
}

export type startValSettingACType = ReturnType<typeof startValSettingAC>
export const startValSettingAC = (value: number) => {
    return {
        type: 'SET-START-VALUE',
        payload: { value }
    } as const
}

export type getStartLocalStorageValueACType = ReturnType<typeof getStartLocalStorageValueAC>;
export const getStartLocalStorageValueAC = (value: number) => {
    return {
        type: 'GET-START-VALUE',
        payload: { value }
    } as const
}

//thunks

export const startValSettingTC = (value: number) => {
    return (dispatch: Dispatch) => {
        localStorage.setItem('start-value', JSON.stringify(value));
        dispatch(startValSettingAC(value));
    }
}

export const getStartLocalStorageValueTC = () => {
    return (dispatch: Dispatch) => {
        const currentData = localStorage.getItem('start-value');
        if (currentData) {
            const retrievedData = JSON.parse(currentData);
            dispatch(getStartLocalStorageValueAC(retrievedData));
        }
    }
}