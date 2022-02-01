import * as React from "react";

import AuthContext, { AuthContextType } from "./Context";

const initialStateUser = {
  username: "",
  password: "",
} as AuthContextType;

const AuthUser = ({ children }: any) => {
  const [user, setUser] = React.useState<AuthContextType>(initialStateUser);
  const [signed, setSigned] = React.useState(false);

  const addUser = (user: AuthContextType) => {
    setUser(user);
    setSigned(true);
  };
  return (
    <AuthContext.Provider value={{ addUser, user, signed }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthUser;
