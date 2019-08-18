import { INCREMENT_BREAK, DECREMENT_BREAK, INCREMENT_WORK, DECREMENT_WORK } from "../actions/actions";

const initialState = {
  workTime: 25,
  breakTime: 5
};

const timeSetterReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_WORK:
      console.log(state);
      return {
        ...state,
        workTime: state.workTime + 1
      };
    case DECREMENT_WORK:
      return {
        ...state,
        workTime: state.workTime - 1
      };
    case INCREMENT_BREAK:
      return {
        ...state,
        breakTime: state.breakTime + 1
      };
    case DECREMENT_BREAK:
      console.log(state);
      return {
        ...state,
        breakTime: state.breakTime - 1
      };
    default:
      return state;
  }
};

export default timeSetterReducers;
