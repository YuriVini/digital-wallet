import * as React from "react";

export type AuthContextType = {
  username: string;
  password: string;
};

export type Context = {
  addUser: (user: AuthContextType) => void;
  user: AuthContextType;
  signed: boolean;
};

const AuthContext = React.createContext<Context>({} as Context);

export default AuthContext;
