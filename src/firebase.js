import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_8YE3IhsB8Hr_pNwa61_C8YuUqXcctg8",
  authDomain: "tinder-clone-c3d57.firebaseapp.com",
  projectId: "tinder-clone-c3d57",
  storageBucket: "tinder-clone-c3d57.appspot.com",
  messagingSenderId: "322254852549",
  appId: "1:322254852549:web:db2d5991bdf4f4fdb2fbac",
  measurementId: "G-CT7V10EXKB",
};

const firebaseApp = initializeApp(firebaseConfig);

const database = getFirestore(firebaseApp);

export default database;
