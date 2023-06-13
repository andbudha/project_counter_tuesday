


const InitialState = { value: 0 }

export type StartValStateType = typeof InitialState;

type AppActionsType = startValSettingACType

export const startValReducer = (state: StartValStateType = InitialState, action: AppActionsType): StartValStateType => {
    switch (action.type) {
        case "SET-START-VALUE": {
            return { ...state, value: action.payload.value }
        }
        default: {
            return state;
        }
    }
}


type startValSettingACType = ReturnType<typeof startValSettingAC>
export const startValSettingAC = (value: number) => {
    return {
        type: 'SET-START-VALUE',
        payload: { value }
    } as const
}