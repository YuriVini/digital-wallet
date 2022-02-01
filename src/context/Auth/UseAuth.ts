import * as React from "react";

import AuthContext from "./Context";

const useAuth = () => React.useContext(AuthContext);
export default useAuth;
