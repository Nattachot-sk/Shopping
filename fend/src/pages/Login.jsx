import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmitLogin = async (event) => {
    event.preventDefault();
  
    try {
      const res = await axios.post("http://localhost:3307/login", {
        email: email,
        password: password,
      });
  
      if (res.data.Status === "OK") {
        const userData = { role: res.data.role , token: res.data.token};
        console.log(userData)
        if (res.data.role === "admin") {
          navigate("/admin");
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Admin Login success",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (res.data.role === "member") {
          navigate("/", { state: userData });
          Swal.fire({
            position: "top",
            icon: "success",
            title: "User login success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        Swal.fire({
          position: "top",
          icon: "error",
          title: res.data.Error,
          showConfirmButton: false,
        });
      }
    } catch (err) {
      console.error(err); // แสดงข้อผิดพลาดใน console
  
      // แสดงข้อความข้อผิดพลาดให้ผู้ใช้
      Swal.fire({
        position: "top",
        icon: "error",
        title: "An error occurred. Please try again later.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-indigo-300 p-4">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="../video/bg-login.mp4"
        autoPlay
        loop
        muted
      />
      <div className="container max-w-4xl w-full h-auto bg-white rounded-3xl flex flex-col lg:flex-row relative">
        <div className="flex-1 w-full h-full bg-indigo-500 relative rounded-3xl hidden lg:block">
          <div className="relative w-[400px] h-[500px] p-10  rounded-3xl mx-auto mt-10 lg:mt-20 overflow-hidden ">
            <img
              src="../img/img-login/shopping-login.jpg"
              className="w-full h-full object-cover rounded-3xl "
              alt=""
            />
          </div>
          <div className="w-12 h-12 mx-auto relative -top-5 bg-indigo-800 rounded-full">
            <div className="text-2xl text-red-300 text-center p-2">
              <FontAwesomeIcon icon={faBolt} />
            </div>
          </div>
        </div>

        <div className="flex-1 w-full h-full relative text-center p-4 lg:p-8">
          <div className="w-40 h-40 rounded-full mx-auto mt-5">
            <img
              src="./img/img-login/logo2.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="mt-2 w-full shadow-sm pb-5">
            <h1 className="text-2xl font-bold">Login</h1>
          </div>
          <div className="w-full h-auto p-4">
            <form
              onSubmit={handleSubmitLogin}
              className="mx-auto w-full h-full"
            >
              <div className="w-full flex flex-col items-center">
                <div className="relative mt-5 flex items-center">
                  <label
                    htmlFor="email"
                    className="text-black text-md bg-white px-1 rounded-lg"
                  >
                    <FontAwesomeIcon icon={faUser} className="p-2" />
                  </label>
                  <div className="w-64 lg:w-80">
                    <input
                      id="email"
                      type="text"
                      placeholder="Email"
                      className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="relative mt-5 flex items-center">
                  <label
                    htmlFor="password"
                    className="text-black text-md bg-white px-1 rounded-lg"
                  >
                    <FontAwesomeIcon icon={faLock} className="p-2" />
                  </label>
                  <div className="w-64 lg:w-80">
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 w-40 h-10 flex justify-center text-white bg-blue-500 rounded-lg mx-auto shadow-md shadow-blue-500/50 cursor-pointer">
                <input type="submit" value="Login" className="cursor-pointer" />
              </div>
            </form>
            <div className="w-full h-20 relative mt-4">
              <h1 className="w-full flex justify-center">
                Not registered yet?{" "}
                <Link
                  to={"/register"}
                  className="text-blue-400 ml-2 cursor-pointer hover:underline"
                >
                  Create Account
                </Link>
              </h1>
              <div className="relative left-[130px] top-20">
                <div className="flex">
                  <Link
                    to={"/"}
                    className="hover:text-blue-400 flex transition-transform transform hover:-translate-x-2"
                  >
                    <p>Back to home</p>
                    <div className="pl-2">
                      <FontAwesomeIcon icon={faHouse} className="" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
