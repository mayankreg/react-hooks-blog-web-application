import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDx_e48kf_twVY1ZFWHrJ5BdTwCg1pbA4s",
  authDomain: "react-hooks-blog-ef2aa.firebaseapp.com",
  projectId: "react-hooks-blog-ef2aa",
  storageBucket: "react-hooks-blog-ef2aa.appspot.com",
  messagingSenderId: "7619264658",
  appId: "1:7619264658:web:1c3190d9c47a1fb99ae64b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
