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

export default function ModalAddMember({ setOpenModal }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [age, setAge] = useState();
  const [role, setRole] = useState("member");
  const [showModal, setShowModal] = useState(false);

  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:3307/register", {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        firstname: firstname,
        lastname: lastname,
        age: age,
        role: role,
      });
      if (res.data.Status === "OK") {
        Swal.fire({
          icon: "success",
          title: "You are signup Successfully!!!",
        });
        setOpenModal(false);
        setTimeout(function () {
          location.reload(1);
        }, 1000);
      } else if (res.data.Error === "Email already exists") {
        Swal.fire({
          icon: "error",
          title: "Email already exists",
        });
      } else if (res.data.Error === "Passwords do not match") {
        Swal.fire({
          icon: "error",
          title: "Passwords do not match",
        });
      }
    } catch (error) {
      console.error("Error Register:", error);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถสมัครได้ในขณะนี้",
      });
    }
  };
  return (
    <div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-xl p-4 mx-auto bg-white rounded-md shadow-lg ">
            <div className="mt-3 sm:block">
              <div className="mt-2 text-center sm:ml-4 sm:text-left">
                <div className="singup-page">
                  <div className="flex justify-center mx-auto ">
                    <h1 className="text-2xl font-bold">เพิ่มข้อมูลสมาชิก</h1>
                  </div>
                  <div className="w-full h-auto p-4">
                    <form
                      onSubmit={handleSubmitRegister}
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
                        <div className="relative mt-5 flex items-center">
                          <label
                            htmlFor="comfirm-password"
                            className="text-black text-md bg-white px-1 rounded-lg"
                          >
                            <FontAwesomeIcon icon={faLock} className="p-2" />
                          </label>
                          <div className="w-64 lg:w-80">
                            <input
                              id="confirm-password"
                              type="password"
                              placeholder="Comfirm password"
                              className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              onChange={(event) => {
                                setConfirmPassword(event.target.value);
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
                              id="firstname"
                              type="text"
                              placeholder="Firstname"
                              className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              onChange={(event) => {
                                setFirstname(event.target.value);
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
                              id="lastname"
                              type="text"
                              placeholder="Lastname"
                              className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              onChange={(event) => {
                                setLastname(event.target.value);
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
                              id="age"
                              type="text"
                              placeholder="age"
                              className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              onChange={(event) => {
                                setAge(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-10 w-full h-10 flex justify-center text-white bg-blue-500 rounded-lg mx-auto shadow-md shadow-blue-500/50 cursor-pointer">
                        <button type="submit" className="cursor-pointer">
                          Create account
                        </button>
                      </div>
                      <div>
                        <button
                          className="w-full mt-2 p-2.5 flex-1  text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                          onClick={() => setOpenModal(false)}
                        >
                          ยกเลิก
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
