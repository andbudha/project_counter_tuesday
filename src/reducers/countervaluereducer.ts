
const InitialState = { value: 0 }

export type CounterValStateType = typeof InitialState;

type AppActionsType = counterValSettingACType;

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

type counterValSettingACType = ReturnType<typeof counterValSettingAC>
export const counterValSettingAC = (value: number) => {
    return {
        type: 'SET-COUNTER-VALUE',
        payload: { value }
    } as const
}