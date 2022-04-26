import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC8RZrq3PtlXneqxOwliBzqXihOJlduIfQ',
  authDomain: 'crwn-clothing-5b1a5.firebaseapp.com',
  projectId: 'crwn-clothing-5b1a5',
  storageBucket: 'crwn-clothing-5b1a5.appspot.com',
  messagingSenderId: '302751077615',
  appId: '1:302751077615:web:95d0d1ed29b4f8806fb71a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

//* Sign in with Google
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const auth = getAuth(app);

const db = getFirestore(app);

//* Adding user to firestore
export const createUserDocumentFromAuth = async (authUser) => {
  const userDocRef = doc(db, 'users', authUser.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};

export default db;
