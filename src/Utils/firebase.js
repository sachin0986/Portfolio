import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApdgvJ-IJ7z4AvP14bgwm5PsqhtWdCt5A",
  authDomain: "professioanl-portfolio.firebaseapp.com",
  databaseURL: "https://professioanl-portfolio-default-rtdb.firebaseio.com",
  projectId: "professioanl-portfolio",
  storageBucket: "professioanl-portfolio.firebasestorage.app",
  messagingSenderId: "70650215863",
  appId: "1:70650215863:web:0b5911b43e2baa6159bc32",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;
