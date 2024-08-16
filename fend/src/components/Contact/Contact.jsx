import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faUser,
  faComment
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

function Contact() {

    const [firstname , setFirstname] = useState("");
    const [lastname , setLastname] = useState("");
    const [phone , setPhone] = useState("");
    const [email , setEmail] = useState("");
    const [message , setMessage] = useState("");


    const handleSubmitContact = async (event) =>{
        event.preventDefault();
        try {
            const res = await axios.post("http://localhost:3307/addcontact" , {
                firstname: firstname,
                lastname: lastname,
                phone: phone,
                email: email,
                message: message,
            })
            if (res.data.Status === "OK") {
                Swal.fire({
                  icon: "success",
                  title: "You are add contact success",
                });
              }else if(res.data.Error === "Error") {
                Swal.fire({
                    icon: "error",
                    title: "You are Error",
                  });

              }
        } catch (error) {
            console.error("Error Register:", error);
            Swal.fire({
              icon: "error",
              title: "เกิดข้อผิดพลาด",
              text: "ไม่สามารถเพิ่มได้ในขณะนี้",
            });
        }
    }


  return (
    <div className="w-full h-[700px] flex justify-center items-center slanted-bg ">
      <div className="flex gap-x-16 mt-10 relative z-10 mb-20"> {/* Added relative and z-10 */}
        <div className="flex-1 ">
          <div>
            <img src="../gif/contactlogo.gif" alt="" />
            <div>
              <h1 className="mb-3 text-[32px]">Get in touch</h1>
              <hr />
              <ul className="flex flex-col mt-5">
                <li className="relative">
                  <div className="flex w-full ">
                    <div className="w-10 h-10 border-2 border-fuchsia-500 rounded-full mb-3 flex items-center justify-center">
                      <span>
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="text-fuchsia-500 "
                        />
                      </span>
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="text-[20px] relative -top-[8px] left-5">
                        097-977-9797
                      </p>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <div className="flex w-full ">
                    <div className="w-10 h-10 border-2 border-fuchsia-500 rounded-full mb-3 flex items-center justify-center">
                      <span>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-fuchsia-500 "
                        />
                      </span>
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="text-[20px] relative -top-[8px] left-5">
                        Monkchaley@gmail.com
                      </p>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <div className="flex w-full ">
                    <div className="w-10 h-10 border-2 border-fuchsia-500 rounded-full mb-3 flex items-center justify-center">
                      <span>
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="text-fuchsia-500 "
                        />
                      </span>
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="text-[20px] relative -top-[8px] left-5">
                        971 Abia Martin Drive, Pa Pensylasia 15150
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-full h-[650px] shadow-lg rounded-2xl relative z-10">
            <div className="w-full h-full p-5 bg-white">
              <form onSubmit={handleSubmitContact}>
                <div className="relative mt-5 mb-5">
                  <label htmlFor="" className="absolute top-4 left-4">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-[24px] "
                    />
                  </label>
                  <input
                    type="text"
                    className="w-full h-[60px] px-12 border-2 bg-zinc-100"
                    placeholder="Firstname"
                    onChange={(event) => {
                        setFirstname(event.target.value);
                      }}
                  />
                </div>
                <div className="relative mb-5">
                  <label htmlFor="" className="absolute top-4 left-4">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-[24px]"
                    />
                  </label>
                  <input
                    type="text"
                    className="w-full h-[60px] px-12 border-2 bg-zinc-100"
                    placeholder="Lastname"
                    onChange={(event) => {
                        setLastname(event.target.value);
                      }}
                  />
                </div>
                <div className="relative mb-5">
                  <label htmlFor="" className="absolute top-4 left-4">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-[24px]"
                    />
                  </label>
                  <input
                    type="text"
                    className="w-full h-[60px] px-12 border-2 bg-zinc-100"
                    placeholder="Phone"
                    onChange={(event) => {
                        setPhone(event.target.value);
                      }}
                  />
                </div>
                <div className="relative mb-5">
                  <label htmlFor="" className="absolute top-4 left-4">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-[24px]"
                    />
                  </label>
                  <input
                    type="email"
                    className="w-full h-[60px] px-12 border-2 bg-zinc-100"
                    placeholder="Email"
                    onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                  />
                </div>

                <div className="relative">
                  <label htmlFor="" className="absolute top-4 left-4">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-[24px]"
                    />
                  </label>
                  <textarea
                    type="textarea"
                    className="w-full h-20 max-h-40 min-h-20 pt-4 px-12 border-2 bg-zinc-100"
                    placeholder="Message"
                    onChange={(event) => {
                        setMessage(event.target.value);
                      }}
                  />
                </div>
                <button
                  type="submit"
                  className="uppercase w-full h-[60px] bg-green-600 rounded-md px-5 mt-5 text-white font-bold cursor-pointer"
                >
                  send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;