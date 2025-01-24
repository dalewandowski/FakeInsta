import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <Context.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
