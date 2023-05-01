
export type CounterValStateType = number;

type CounterValAcType = any;
export const counterValReducer = (state: CounterValStateType, action: CounterValAcType) => {
    switch (action.type) {
        case 'XXX': {
            return state;
        } default: {
            return state;
        }
    }
}