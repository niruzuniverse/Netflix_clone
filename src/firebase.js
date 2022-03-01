import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiNLmyA-Rci6YBRay34peH1-oNlz-O9IQ",
  authDomain: "netflix-clone-9f701.firebaseapp.com",
  projectId: "netflix-clone-9f701",
  storageBucket: "netflix-clone-9f701.appspot.com",
  messagingSenderId: "600953926939",
  appId: "1:600953926939:web:731e09ed32bc1dc1e88fbe"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth };
export default db;