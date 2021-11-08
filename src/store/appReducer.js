export const globalState = {
  user: null,
};

export const globalReducer = (state = globalState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.value,
      };
    default:
      return state;
  }
};
