import React, { createContext } from "react";
import useCustomerState from "../hooks/useCustomerState";

export const CustomerContext = createContext();

export function CustomerProvider(props) {
  const c = useCustomerState();

  return (
    <CustomerContext.Provider value={c}>
      {props.children}
    </CustomerContext.Provider>
  );
}
