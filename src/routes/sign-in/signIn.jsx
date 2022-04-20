import React from 'react';
import { signInWithGooglePopup } from '../../utils/firebase';

const signIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      signIn
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
};

export default signIn;
