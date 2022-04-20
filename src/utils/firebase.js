import { initializeApp } from 'firebase/app';
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

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const auth = getAuth(app);
