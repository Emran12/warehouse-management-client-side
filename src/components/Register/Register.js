import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    toast(`${error.message}`);
  }

  return (
    <div className="mt-5">
      <div className="w-25 mx-auto d-flex flex-column ">
        <input
          type="text"
          id=""
          placeholder="Enter Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
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
          onClick={() => createUserWithEmailAndPassword(email, password)}
        >
          Register
        </button>
        <p>
          Already have an account?<Link to={"/login"}>Log in</Link>
        </p>

        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Register;
