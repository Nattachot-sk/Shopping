
import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [firstname, setFirstname] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    const fetchAuthAdmin = async () => {
      try {
        const res = await axios.get("http://localhost:3307/admin");
        setAuth(true);
        setFirstname(res.data.firstname)
        setRole(res.data.role);
        if ((res.data.role !== "admin" )) {

          navigate("/login");
        }

 // Assuming the response has a 'role' field
      } catch (error) {
        console.error("Error fetching admin data:", error);
        setMessage("Failed to fetch admin data");
      }
    };

    fetchAuthAdmin();
  }, []);

  const isAdmin = () => role === "admin";
  const isUser = () => role === "member";

  const navigateToAdminPage = () => {
    if (isAdmin()) {
      setAuth(true);
      navigate("/admin");
    } else if (isUser()) {
      navigate("/login");
      alert("NOT ADMIN");
      setMessage("You do not have access to this page");
    }
  };

  return (
    <AuthContext.Provider
      value={{ auth, message, firstname, role, isAdmin, navigateToAdminPage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
