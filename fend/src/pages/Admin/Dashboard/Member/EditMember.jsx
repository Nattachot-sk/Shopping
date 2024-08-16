import { React, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";

import NavbarAdmin from "../../ComponentAdmin/NavbarAdmin";
import Topbar from "../../ComponentAdmin/Topbar";
import ShowMember from "./ShowMember";



function EditMember() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");

  const FetchDataMember_id = async () => {
    try {
      const res = await axios.get("http://localhost:3307/member/" + id);
      const Datamember = res.data[0];
      setEmail(Datamember.email);
      setPassword(Datamember.password);
      setFirstname(Datamember.firstname);
      setLastname(Datamember.lastname);
      setAge(Datamember.age);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (id) {
      FetchDataMember_id();
    }
  }, [id]);

  const handleSubmiteditmember = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.put("http://localhost:3307/editmember/" + id, {
        email,
        password,
        firstname,
        lastname,
        age,
      });

      if (res.data.Status === "Update OK") {
        navigate("/member");
        Swal.fire({
          icon: "success",
          title: "แก้ไขสำเร็จ",
        });
      } else if (res.data.Error === "Update fail") {
        Swal.fire({
          icon: "error",
          title: "แก้ไขไม่สำเร็จ",
        });
      }
    } catch (error) {
      console.error("Error updating member:", error);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถแก้ไขได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง",
      });
    }
  };

  return (
    <div className="w-full h-screen bg-slate-500">
      <div className="flex">
        <div className="flex-[10%]">
          <NavbarAdmin />
        </div>
        <div className="flex-[85%]">
          <Topbar />
          <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex">
                <h1>
                  กำลังแก้ไข <p>{firstname}</p>
                </h1>
              </div>
              <form onSubmit={handleSubmiteditmember}>
                <div className="block">
                  <div className="textbox">
                    <label
                      htmlFor="email"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      อีเมล
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={email}
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>

                  <div className="textbox">
                    <label
                      htmlFor="password"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      รหัสผ่าน
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={password}
                      readOnly
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="textbox">
                    <label
                      htmlFor="firstname"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      ชื่อจริง
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your firstname"
                      name="firstname"
                      required
                      value={firstname}
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(event) => {
                        setFirstname(event.target.value);
                      }}
                    />
                  </div>
                  <div className="textbox">
                    <label
                      htmlFor="lastname"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      นามสกุล
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your lastname"
                      name="lastname"
                      required
                      value={lastname}
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(event) => {
                        setLastname(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="textbox">
                  <label
                    htmlFor="department"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    อายุ
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your age"
                    name="age"
                    required
                    value={age}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(event) => {
                      setAge(event.target.value);
                    }}
                  />
                </div>

                <div className="flex justify-between mt-5">
                  <button
                    className=" bg-blue-500 hover:bg-blue-400  p-2 rounded-md"
                    type="submit"
                  >
                    ยืนยันการแก้ไข
                  </button>
                  <Link
                    className="bg-red-500  hover:bg-red-300  p-2 rounded-md"
                    to={"/member"}
                  >
                    ยกเลิก
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditMember;
