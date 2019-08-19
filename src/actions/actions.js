export const INCREMENT_WORK = "INCREMENT_WORK";
export const DECREMENT_WORK = "DECREMENT_WORK";
export const INCREMENT_BREAK = "INCREMENT_BREAK";
export const DECREMENT_BREAK = "DECREMENT_BREAK";
export const START_STOP_TOGGLE = "START_STOP_TOGGLE";
export const SWITCH_MODE = "SWITCH_MODE";

export const incrementWork = () => {
  return {
    type: INCREMENT_WORK
  };
};

export const decrementWork = () => {
  return {
    type: DECREMENT_WORK
  };
};

export const incrementBreak = () => {
  return {
    type: INCREMENT_BREAK
  };
};

export const decrementBreak = () => {
  return {
    type: DECREMENT_BREAK
  };
};

export const startStopToggle = () => {
  return {
    type: START_STOP_TOGGLE
  };
};

export const switchMode = () => {
  return {
    type: SWITCH_MODE
  };
};
