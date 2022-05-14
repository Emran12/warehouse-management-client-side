import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  appId: process.env.REACT_APP_appId,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
