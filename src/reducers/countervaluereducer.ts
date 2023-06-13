import { AppActionsType } from "../store/store";

const InitialState = { value: 0 }

export type CounterValStateType = typeof InitialState;

export const counterValReducer = (state: CounterValStateType = InitialState, action: AppActionsType): CounterValStateType => {
    switch (action.type) {
        case "SET-COUNTER-VALUE": {
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