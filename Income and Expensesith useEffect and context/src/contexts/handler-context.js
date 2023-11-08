import { createContext } from "react";

export const HandlerContext = createContext({
  addAccountHandler: (newAccountData) => {},
  deleteHandler: (id) => {},
  editHandler: (id, todo) => {},
});