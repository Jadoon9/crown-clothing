import { getRedirectResult } from 'firebase/auth';
import React, { useEffect } from 'react';
import SignUp from '../../components/sign-up/SignUp';
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from '../../utils/firebase';
import { createUserDocumentFromAuth } from '../../utils/firebase';

const SignIn = () => {
  useEffect(() => {
    const getRedirectResults = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    getRedirectResults();
  }, []);

  // * Sign in with Google Popup
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>
      <SignUp />
    </div>
  );
};

export default SignIn;
