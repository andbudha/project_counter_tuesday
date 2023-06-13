


const InitialState = { value: 0 };

export type MaxValStateType = typeof InitialState;

type AppActionsType = maxValSettingACType;

export const maxValReducer = (state: MaxValStateType = InitialState, action: AppActionsType): MaxValStateType => {
    switch (action.type) {
        case "SET-MAX-VALUE": {
            return { ...state, value: action.payload.value }
        }
        default: {
            return state;
        }
    }
}

type maxValSettingACType = ReturnType<typeof maxValSettingAC>
export const maxValSettingAC = (value: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: { value }
    } as const
}