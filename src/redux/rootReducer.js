import { combineReducers } from 'redux'
import CakeReducer from "./cake/CakeReducer";
import IceCreamReducer from './iceCream/IceCreamReducer';

const rootReducer = combineReducers ({
    Cake: CakeReducer,
    IceCream: IceCreamReducer
})

export default rootReducer;