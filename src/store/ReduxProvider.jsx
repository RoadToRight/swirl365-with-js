"use client"
import React from 'react'
import { Provider } from "react-redux";
import { SwirlStore } from './store';

const ReduxProvider = ({children}) => {
  return (
    <Provider store={SwirlStore}>
      {children}
    </Provider>
  )
}

export default ReduxProvider
