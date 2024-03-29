import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { getStartLocalStorageValueACType, startValReducer, startValSettingACType } from "../reducers/startvaluereducer";
import { getMaxLocalStorageValueACType, maxValReducer, maxValSettingACType } from "../reducers/maxvaluereducer";
import { counterValReducer, counterValSettingACType, getCounterLocalStorageValueACType } from "../reducers/countervaluereducer";
import thunk, { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";


const rootReducer = combineReducers({
    counterValue: counterValReducer,
    startValue: startValReducer,
    maxValue: maxValReducer
});


export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppActionsType = startValSettingACType
    | maxValSettingACType
    | counterValSettingACType
    | getStartLocalStorageValueACType
    | getMaxLocalStorageValueACType
    | getCounterLocalStorageValueACType

type AppDispatchType = ThunkDispatch<AppRootStateType, any, AppActionsType>;
export const useAppDispatch = () => useDispatch<AppDispatchType>();

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

//@ts-ignore
window.store = store;