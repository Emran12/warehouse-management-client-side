import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQ_RMkixGZvJes3YScOGWtSunlMO1P6BY",
  authDomain: "medicor-612ce.firebaseapp.com",
  projectId: "medicor-612ce",
  storageBucket: "medicor-612ce.appspot.com",
  messagingSenderId: "198939414636",
  appId: "1:198939414636:web:49de595597b76c476b0849",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
