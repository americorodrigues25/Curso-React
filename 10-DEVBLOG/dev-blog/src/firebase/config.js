import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwZWNf2JHAXU-iD9foy_tSa0oBkuGXxp4",
  authDomain: "devblog-a2c15.firebaseapp.com",
  projectId: "devblog-a2c15",
  storageBucket: "devblog-a2c15.firebasestorage.app",
  messagingSenderId: "375603268752",
  appId: "1:375603268752:web:3d8556c792d846b1f79c15",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
