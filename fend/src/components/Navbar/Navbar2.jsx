import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

function Navbar2() {

  const [auth, setAuth] = useState(false);
  const [role, setRole] = useState();
  const navigate = useNavigate();
  const products = useSelector((state) => state.navbarReducer.value); // products is an array

  // Sepetteki toplam ürün sayısını hesaplama (navbarda göstermek için)
  function numberOfProducts() {
    let number = 0;
    for (let i = 0; i < products.length; i++) {
      number += products[i].quantity;
    }
    return number;
  }

  function handleClickHandBag() {
    navigate("/shoppingcart");
    window.scroll({ top: 0, behavior: "smooth" });
  }



  const fetchAuthAdmin = async () =>{
      try {
        const res = await axios.get("http://localhost:3307/admin");
        setRole(res.data.role);

      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
  }
  useEffect(() =>{
    fetchAuthAdmin();
  },[role])


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
    <div className="w-full h-auto bg-amber-400 sticky -top-2 left-0 z-50">
      <div className="flex justify-around items-center p-4">
        <div className="flex items-center">
          <Link to={"/"} className="hover:text-white ">
            <img src="../img/logo/logo2.png" alt="Logo" className="w-16 h-16" />
            <h1 className="ml-2 text-lg font-bold hover:underline">
              Monk Chaley
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <ul className="flex space-x-5 text-black font-bold">
            <li>
              <NavLink
                to={"/menpage"}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/womenpage"}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Woman
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/locationpage"}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Location
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contactpage"}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-5">
          <p className="w-10 h-10 text-[20px] rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faHeart} />
          </p>
          <div className="text-[20px] w-10 h-10  rounded-full flex justify-center items-center">
            <button onClick={handleClickHandBag}>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <div className="w-[30px] h-[20px] rounded-full bg-red-400 relative -top-3 -left-2">
              <span className="text-white text-[14px] absolute -top-[1px] left-[5px]">
                {numberOfProducts()}
              </span>
            </div>
          </div>

          <div className="w-10 h-10 text-[20px] rounded-full flex justify-center items-center">
            <Link to={"/login"}>
              <p className="text-black">
                <FontAwesomeIcon icon={faUser} />
              </p>
            </Link>
          </div>
          <div className="w-full flex items-center">
            {role === "admin" && (
              <>
                <Link to="/admin" className="hover:text-blue-500 ml-2">
                  กลับสู่หน้าแอดมิน
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-500 ml-5 rounded-3xl px-2 hover:bg-red-200"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faTimes : faBars}
            className="text-[20px]"
          />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-amber-400">
          <ul className="flex flex-col items-center space-y-5 p-5">
            <li>
              <NavLink
                to={"/menpage"}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/womenpage"}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Woman
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/locationpage"}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Location
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contactpage"}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {/* ... rest of the mobile menu code ... */}
        </div>
      )}
    </div>
  );
}

export default Navbar2;
