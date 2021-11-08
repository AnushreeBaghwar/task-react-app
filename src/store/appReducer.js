export const globalState = {
  user: null,
  showOtpPanel: false,
};

export const globalReducer = (state = globalState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.value,
      };
    case "SHOW_OTP_PANEL":
      return {
        ...state,
        showOtpPanel: action.value,
      };
    default:
      return state;
  }
};
