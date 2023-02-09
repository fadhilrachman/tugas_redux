import * as counter from "./contant";

let initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case counter.inc:
      return {
        ...state,
        count: state.count + 1,
      };
    case counter.dec:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
