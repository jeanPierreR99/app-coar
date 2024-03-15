import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouteMain from "./services/routes/RouteMain";
import {
  CollectionFileProvider,
  CollectionPostLimitProvider,
  CollectionPostOneProvider,
  CollectionPostProvider,
  CollectionStudentProvider,
  CollectionTeacherProvider,
  CollectionUserOneProvider,
  LoginProvider,
  RoleProvider,
  UserProvider,
} from "./services/context/Context.provider";

const App = () => (
  <UserProvider>
    <LoginProvider>
      <RoleProvider>
        <CollectionPostProvider>
        <CollectionFileProvider>
          <CollectionStudentProvider>
            <CollectionTeacherProvider>
              <CollectionPostOneProvider>
                <CollectionUserOneProvider>
                <CollectionPostLimitProvider>
                  <BrowserRouter>
                    <div className="App app">
                      <RouteMain />
                    </div>
                  </BrowserRouter>
                  </CollectionPostLimitProvider>
                </CollectionUserOneProvider>
              </CollectionPostOneProvider>
            </CollectionTeacherProvider>
          </CollectionStudentProvider>
          </CollectionFileProvider>
        </CollectionPostProvider>
      </RoleProvider>
    </LoginProvider>
  </UserProvider>
);

export default App;
