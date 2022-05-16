import React, { useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import GoogleSignIn from "../SocialLogin/GoogleSignIn/GoogleSignIn";
import Spinner from "../Spinner/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [currentUser, loading1] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user || currentUser) {
    if (user) toast("User logged in successfully!!");
    navigate(from, { replace: true });
  }
  if (loading || loading1) {
    <Spinner></Spinner>;
  }
  if (error) {
    toast(`${error.message}`);
  }

  return (
    <div className="mt-5">
      <div className="w-25 mx-auto d-flex flex-column ">
        <input
          type="email"
          id=""
          placeholder="Enter Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          placeholder="Enter Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button
          className="btn btn-primary"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Log in
        </button>
        <p>
          New with medicor? <Link to={"/register"}>Register</Link>
        </p>
        <div className="d-flex">
          <span>or</span>
        </div>
        <GoogleSignIn></GoogleSignIn>
      </div>
    </div>
  );
};

export default Login;
