import { createContext, useState, useEffect } from 'react';
import { createUserDocumentFromAuth, getCurrentUser } from '../utils/firebase';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    const unsubscribe = getCurrentUser((user) => {
      if (user) {
        createUserDocumentFromAuth();
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
