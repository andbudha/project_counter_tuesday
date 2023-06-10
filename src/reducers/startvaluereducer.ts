
export type StartValStateType = number;

const InitialState: StartValStateType = 0;

type StartValAcType = startValSettingACType;

export const startValReducer = (state: StartValStateType = InitialState, action: StartValAcType): StartValStateType => {
    switch (action.type) {
        case "SET-START-VALUE": {
            return action.payload.value;
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