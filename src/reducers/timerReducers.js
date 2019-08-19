import { SWITCH_MODE } from "../actions/actions";

const initialState = {
  workMode: true,
  timerSeconds: 25 * 60
};

const timerReducers = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_MODE:
      if (state.workMode === true) {
        return {
          ...state,
          workMode: false
        };
      } else {
        return {
          ...state,
          workMode: true
        };
      }

    default:
      return state;
  }
};

export default timerReducers;
