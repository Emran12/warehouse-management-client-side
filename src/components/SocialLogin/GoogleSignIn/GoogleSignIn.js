import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Spinner from "../../Spinner/Spinner";

const GoogleSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (loading) {
    <Spinner></Spinner>;
  }
  if (error) {
    toast(`error: ${error.message}`);
  }
  if (user) {
    navigate(from, { replace: true });
    toast(`Signed in with ${user.displayName}`);
  }
  return (
    <div>
      <button onClick={() => signInWithGoogle()}>Sign In With Google</button>
    </div>
  );
};

export default GoogleSignIn;
