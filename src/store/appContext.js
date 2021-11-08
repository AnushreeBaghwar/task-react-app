import { createContext, useReducer } from "react";

import { globalState, globalReducer } from "./appReducer";

export const AppStateContext = createContext({});

export const AppStateContextProvider = ({ children }) => {
  const globalStateAndDispatch = useReducer(globalReducer, globalState);

  return (
    <AppStateContext.Provider
      value={{
        globalStateAndDispatch,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
