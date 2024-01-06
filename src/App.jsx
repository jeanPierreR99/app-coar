import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouteMain from "./services/routes/RouteMain";
import { LoginProvider, RoleProvider } from "./services/context/Context.provider";

const App = () => (
    <LoginProvider>
    <RoleProvider>
      <BrowserRouter>
        <div className="App app">
          <RouteMain />
        </div>
      </BrowserRouter>
    </RoleProvider>
  </LoginProvider>
);

export default App;
