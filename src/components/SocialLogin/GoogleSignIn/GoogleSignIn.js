import React, { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Spinner from "../../Spinner/Spinner";

const GoogleSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [currentUser] = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  if (loading) {
    <Spinner></Spinner>;
  }

  if (error) {
    toast.error(`error: ${error.message}`, { autoclose: 1500 });
  }

  if (user || currentUser) {
    navigate(from, { replace: true });
    if (user)
      toast.warn(
        `Signed in with google`,
        { autoclose: 1500 },
        { toastId: "007" }
      );
  }

  return (
    <div>
      <button onClick={() => signInWithGoogle()}>Sign In With Google</button>
    </div>
  );
};

export default GoogleSignIn;
