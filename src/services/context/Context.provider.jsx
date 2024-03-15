import { createContext, useContext, useState } from "react";
const UserContext = createContext();
const LoginContext = createContext();
const RoleContext = createContext();
const CollectionPostContext = createContext();
const CollectionFileContext = createContext();
const CollectionStudentContext = createContext();
const CollectionTeacherContext = createContext();
const CollectionUserOneContext = createContext();
const CollectionPostOneContext = createContext();
const CollectionPostLimitContext = createContext();

export const UserProvider = ({ children }) => {
  const [userLog, setUserLog] = useState("");

  return (
    <UserContext.Provider value={{ userLog, setUserLog }}>
      {children}
    </UserContext.Provider>
  );
};

export const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const RoleProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <RoleContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </RoleContext.Provider>
  );
};

export const CollectionPostProvider = ({ children }) => {
  const [collectionPost, setCollectionPost] = useState([]);

  return (
    <CollectionPostContext.Provider
      value={{ collectionPost, setCollectionPost }}
    >
      {children}
    </CollectionPostContext.Provider>
  );
};
export const CollectionFileProvider = ({ children }) => {
  const [collectionFile, setCollectionFile] = useState([]);

  return (
    <CollectionFileContext.Provider
      value={{ collectionFile, setCollectionFile }}
    >
      {children}
    </CollectionFileContext.Provider>
  );
};
export const CollectionStudentProvider = ({ children }) => {
  const [collectionStudent, setCollectionStudent] = useState([]);

  return (
    <CollectionStudentContext.Provider
      value={{ collectionStudent, setCollectionStudent }}
    >
      {children}
    </CollectionStudentContext.Provider>
  );
};
export const CollectionTeacherProvider = ({ children }) => {
  const [collectionTeacher, setCollectionTeacher] = useState([]);

  return (
    <CollectionTeacherContext.Provider
      value={{ collectionTeacher, setCollectionTeacher }}
    >
      {children}
    </CollectionTeacherContext.Provider>
  );
};
export const CollectionUserOneProvider = ({ children }) => {
  const [collectionUserOne, setCollectionUserOne] = useState("");

  return (
    <CollectionUserOneContext.Provider
      value={{ collectionUserOne, setCollectionUserOne }}
    >
      {children}
    </CollectionUserOneContext.Provider>
  );
};
export const CollectionPostOneProvider = ({ children }) => {
  const [collectionPostOne, setCollectionPostOne] = useState([]);

  return (
    <CollectionPostOneContext.Provider
      value={{ collectionPostOne, setCollectionPostOne }}
    >
      {children}
    </CollectionPostOneContext.Provider>
  );
};

export const CollectionPostLimitProvider = ({ children }) => {
  const [collectionPostLimit, setCollectionPostLimit] = useState([]);

  return (
    <CollectionPostLimitContext.Provider
      value={{ collectionPostLimit, setCollectionPostLimit }}
    >
      {children}
    </CollectionPostLimitContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export const useLogin = () => useContext(LoginContext);
export const useRole = () => useContext(RoleContext);
export const useCollectionPost = () => useContext(CollectionPostContext);
export const useCollectionFile = () => useContext(CollectionFileContext);
export const useCollectionStudent = () => useContext(CollectionStudentContext);
export const useCollectionTeacher = () => useContext(CollectionTeacherContext);
export const useCollectionUserOne = () => useContext(CollectionUserOneContext);
export const useCollectionPostOne = () => useContext(CollectionPostOneContext);
export const useCollectionPostLimit = () => useContext(CollectionPostLimitContext);