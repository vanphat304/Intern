import React, { createContext, ReactNode, useContext, useReducer, Reducer, Dispatch } from 'react';

type children<type> = {
  children: type;
};

export function createStore<T, R>(initialState: T, reducer: R) {
  const StateContext = createContext<T>(initialState);
  const UpdateContext = createContext<Dispatch<any>>((A: any) => {});
  const StoreProvider = ({ children }: children<ReactNode>) => {
    const [state, updateState] = useReducer(reducer as Reducer<any, any>, initialState);
    console.log({state});
    
    return (
      <UpdateContext.Provider value={updateState}>
        <StateContext.Provider value={state}>{children}</StateContext.Provider>
      </UpdateContext.Provider>
    );
  };

  const useStore = (): [T, Dispatch<any>] => [useContext(StateContext), useContext(UpdateContext)];
  return { Provider: StoreProvider, useStore };
}
