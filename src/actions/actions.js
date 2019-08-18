export const INCREMENT_WORK = "INCREMENT_WORK";
export const DECREMENT_WORK = "DECREMENT_WORK";
export const INCREMENT_BREAK = "INCREMENT_BREAK";
export const DECREMENT_BREAK = "DECREMENT_BREAK";

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
