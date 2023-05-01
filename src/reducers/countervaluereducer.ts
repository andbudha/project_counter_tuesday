
export type CounterValStateType = number;

const InitialState: CounterValStateType = 0;

type CounterValAcType = counterValSettingACType;
export const counterValReducer = (state: CounterValStateType, action: CounterValAcType): CounterValStateType => {
    switch (action.type) {
        case "SET-COUNTER-VALUE": {
            return action.payload.value + 1;
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