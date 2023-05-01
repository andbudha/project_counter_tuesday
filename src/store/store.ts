import {combineReducers, legacy_createStore} from "redux";
import {startValReducer} from "../reducers/startvaluereducer";
import {maxValReducer} from "../reducers/maxvaluereducer";
import {counterValReducer} from "../reducers/countervaluereducer";


const rootReducer = combineReducers({
    counterVal: counterValReducer,
    startValue: startValReducer,
    maxValue: maxValReducer
});


export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer);