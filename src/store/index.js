import React, {createContext, useContext, useReducer} from 'react';
import {initialState, reducer} from './reducers';

export const StateContext = createContext(initialState);
export const StateProvider = ({children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
