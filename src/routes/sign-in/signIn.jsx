import React from 'react';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase';

const signIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    const userRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
};

export default signIn;
