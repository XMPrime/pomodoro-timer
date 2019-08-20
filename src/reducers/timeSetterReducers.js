import { INCREMENT_BREAK, DECREMENT_BREAK, INCREMENT_WORK, DECREMENT_WORK, RESET, WORK_TIME_TICK, BREAK_TIME_TICK } from "../actions/actions";

const initialState = {
  workTime: 25,
  breakTime: 5,
  workTimerSeconds: 25 * 60,
  breakTimerSeconds: 5 * 60
};

const timeSetterReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_WORK:
      return {
        ...state,
        workTime: state.workTime + 1,
        workTimerSeconds: state.workTimerSeconds + 60
      };
    case DECREMENT_WORK:
      if (state.workTime === 0) {
        return state;
      }
      return {
        ...state,
        workTime: state.workTime - 1,
        workTimerSeconds: state.workTimerSeconds - 60
      };
    case INCREMENT_BREAK:
      return {
        ...state,
        breakTime: state.breakTime + 1,
        breakTimerSeconds: state.breakTimerSeconds + 60
      };
    case DECREMENT_BREAK:
      if (state.breakTime === 0) {
        return state;
      }
      return {
        ...state,
        breakTime: state.breakTime - 1,
        breakTimerSeconds: state.breakTimerSeconds - 60
      };
    case WORK_TIME_TICK: //BROKEN
      return {
        ...state,
        workTimerSeconds: state.workTimerSeconds - 1
      };
    case BREAK_TIME_TICK: //BROKEN
      return {
        ...state,
        breakTimerSeconds: state.breakTimerSeconds - 1
      };
    case RESET:
      console.log("working");
      return {
        ...state,
        breakTime: state.breakTime,
        workTime: state.workTime,
        workTimerSeconds: state.workTime * 60,
        breakTimerSeconds: state.breakTime * 60
      };
    default:
      return state;
  }
};

export default timeSetterReducers;
