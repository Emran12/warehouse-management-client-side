import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import app from "../../../firebase.init";
import auth from "../../../firebase.init";
import Spinner from "../../Spinner/Spinner";

const GoogleSignIn = () => {
  const auth = getAuth(app);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  console.log(auth);
  console.log("dkfjdkfj", user);

  if (loading) {
    <Spinner></Spinner>;
  }

  if (error) {
    toast(`error: ${error.message}`);
  }

  if (user) {
    navigate(from, { replace: true });
    toast(`Signed in with `);
  }

  return (
    <div>
      <button onClick={() => signInWithGoogle()}>Sign In With Google</button>
    </div>
  );
};

export default GoogleSignIn;
