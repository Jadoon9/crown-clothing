import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

// *Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC8RZrq3PtlXneqxOwliBzqXihOJlduIfQ',
  authDomain: 'crwn-clothing-5b1a5.firebaseapp.com',
  projectId: 'crwn-clothing-5b1a5',
  storageBucket: 'crwn-clothing-5b1a5.appspot.com',
  messagingSenderId: '302751077615',
  appId: '1:302751077615:web:95d0d1ed29b4f8806fb71a',
};

//* Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

// * Google Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// * Sign in with google
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// * Observer Pattern/ Getting current logged in user
export const getCurrentUser = (callback) => {
  onAuthStateChanged(auth, callback);
};

//* save the user to fireStore
export const createUserDocumentFromAuth = async (user, additionalInfo = {}) => {
  const userDocRef = doc(db, 'users', user.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};

// * Sign in with Redirect
export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, googleProvider);
};

// * Sign up with email
export const signUpWithEmail = async (email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};
// * Sign in with email
export const signInWithEmail = async (email, password) => {
  if (!email || !password) return;
  const { user } = await signInWithEmailAndPassword(auth, email, password);

  return user;
};

// * Sign Out
export const signOutUser = async () => {
  await signOut(auth);
};

export default db;
