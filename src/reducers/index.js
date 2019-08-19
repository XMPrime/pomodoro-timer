import { combineReducers } from "redux";
import timeSetterReducers from "./timeSetterReducers";
import startStopReducer from "./startStopReducer";
import timerReducers from "./timerReducers";

export default combineReducers({ timeSetterReducers, startStopReducer, timerReducers });
