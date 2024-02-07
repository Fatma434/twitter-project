import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBlk74yNLKV2P64UTSG-OjeyB2_0XeLnSg",
  authDomain: "twitter-clone-27fa2.firebaseapp.com",
  databaseURL: "https://twitter-clone-27fa2-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-27fa2",
  storageBucket: "twitter-clone-27fa2.appspot.com",
  messagingSenderId: "352904110775",
  appId: "1:352904110775:web:4e4d2fbe9adb5925da2332",
  measurementId: "G-476VYZ8SZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };