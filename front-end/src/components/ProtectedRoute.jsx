// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   const token = localStorage.getItem("token");

//   // If no token, redirect to login
//   return token ? <Outlet /> : <Navigate to="/login" />;
// };

// export default ProtectedRoute;

import { Navigate, Outlet } from "react-router-dom";

const isTokenExpired = (token) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1])); // Decode token payload
    return payload.exp * 1000 < Date.now(); // Check if expired
  } catch (error) {
    return true; // If decoding fails, treat it as expired
  }
};

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!token || isTokenExpired(token)) {
    localStorage.removeItem("token"); // Remove expired token
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
