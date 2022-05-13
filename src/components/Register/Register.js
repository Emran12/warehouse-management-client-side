// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [createUserWithEmailAndPassword, user, loading, error] =
//     useCreateUserWithEmailAndPassword(auth);
//   console.log(auth, user);
//   const navigate = useNavigate();
//   const location = useLocation();
//   let from = location.state?.from?.pathname || "/";

//   if (user) {
//     navigate(from, { replace: true });
//     toast("User loged in successfully!!");
//   }

//   if (error) {
//     toast(`${error.message}`);
//   }

//   return (
//     <div className="mt-5">
//       <div className="w-25 mx-auto d-flex flex-column ">
//         <input
//           type="text"
//           id=""
//           placeholder="Enter Name"
//           required
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br></br>
//         <input
//           type="email"
//           id=""
//           placeholder="Enter Email"
//           required
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br></br>
//         <input
//           type="password"
//           placeholder="Enter Password"
//           required
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br></br>
//         <button
//           className="btn btn-primary"
//           onClick={() => createUserWithEmailAndPassword(email, password)}
//         >
//           Register
//         </button>
//         <p>
//           Already have an account?<Link to={"/login"}>Log in</Link>
//         </p>

//         <ToastContainer></ToastContainer>
//       </div>
//     </div>
//   );
// };

// export default Register;

import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
  }
  return (
    <div className="App">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => createUserWithEmailAndPassword(email, password)}>
        Register
      </button>
    </div>
  );
};
export default Register;
