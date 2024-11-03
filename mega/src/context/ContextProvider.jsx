import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Ensure initial data is set in local storage
    setLocalStorage();
    const { emp, admin } = getLocalStorage();
    setUserData({ emp, admin });
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
