import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useAuth } from "../../../auth/AuthContext";

function Topbar() {
  const { auth, message, firstname, role, isAdmin } = useAuth();
  const handleLogout = () => {
    Swal.fire({
      title: "ยืนยันการออกจากระบบ",
      text: "คุณแน่ใจหรือไม่ที่คุณต้องการออกจากระบบ ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    })
      .then((res) => {
        if (res.isConfirmed) {
          axios.get("http://localhost:3307/logout");
          location.reload(true);
        } else if (!res.isConfirmed) {
          setTimeout(function () {
            location.reload(1);
          }, 1000);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-w-full h-10 bg-black md:h-20">
      <div className="flex justify-center items-center w-full h-full">
        <div className="mr-5">
          <Link to={"/"}>
            {" "}
            <h1 className="text-blue-500">GO TO HOME</h1>
          </Link>
        </div>

        <h1 className="text-white">my name {firstname}</h1>
        <h2 className="text-white pl-5">role: {role}</h2>
        <button onClick={handleLogout} className="text-white bg-red-500 ml-5 rounded-3xl px-2 hover:bg-red-200">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Topbar;
