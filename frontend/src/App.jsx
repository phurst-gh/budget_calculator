import React from "react";

import { AuthProvider } from "./context/AuthContext";
import Routes from "./Routes";

const App = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);

export default App;
