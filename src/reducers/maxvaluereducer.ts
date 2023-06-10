
export type MaxValStateType = number;

const InitialState: MaxValStateType = 0;

type MaxValAcType = maxValSettingACType;

export const maxValReducer = (state: MaxValStateType = InitialState, action: MaxValAcType): MaxValStateType => {
    switch (action.type) {
        case "SET-MAX-VALUE": {
            return action.payload.value;
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