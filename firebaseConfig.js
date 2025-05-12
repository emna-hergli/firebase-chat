// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore' 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrq_23qWzNErVPN6Me4GiHuhnOiw0WJ7c",
  authDomain: "fir-chat-43cc8.firebaseapp.com",
  projectId: "fir-chat-43cc8",
  storageBucket: "fir-chat-43cc8.firebasestorage.app",
  messagingSenderId: "636754753506",
  appId: "1:636754753506:web:22d06d673770546d2a6bbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
export const db=getFirestore(app);

export const usersRef= collection(db, 'users');
export const roomRef = collection(db, 'rooms');