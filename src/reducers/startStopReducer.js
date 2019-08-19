import { START_STOP_TOGGLE } from "../actions/actions";

const initialState = {
  isTicking: false
};

const startStopReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_STOP_TOGGLE:
      if (state.isTicking === true) {
        return {
          ...state,
          isTicking: false
        };
      } else {
        return {
          ...state,
          isTicking: true
        };
      }

    default:
      return state;
  }
};

export default startStopReducer;
