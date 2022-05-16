import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const verifyEmail = async () => {
    await sendEmailVerification();
    toast("Sent email");
  };
  const handleRegister = async () => {
    await createUserWithEmailAndPassword(email, password);
    await verifyEmail();
  };
  console.log(sending);
  if (user && !sending) {
    toast.warn(
      `User logged in successfully!!`,
      { autoclose: 1500 },
      { toastId: "007" }
    );

    navigate(from, { replace: true });
  }
  if (loading || sending) {
    <Spinner></Spinner>;
  }
  if (error) {
    toast(`${error.message}`);
  }

  return (
    <div className="mt-5 container">
      <div className="w-25 mx-auto d-flex flex-column ">
        <input
          type="text"
          placeholder="Enter Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <input
          type="email"
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
        <button className="btn btn-primary" onClick={() => handleRegister()}>
          Register
        </button>

        <p>
          Already have an account?<Link to={"/login"}>Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
