import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  console.log(user);
  if (loading) {
    <Spinner></Spinner>;
  }
  if (error) {
    console.log(error.message);
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAuth;
