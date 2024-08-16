import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faUser,
  faLock,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

export default function ModalAddProduct({ setOpenModal }) {
  const [showModal, setShowModal] = useState(false);

  const [idType, setIdType] = useState();
  const [nameProduct, setNameProdcuct] = useState();
  const [imageProduct, setImageProdcuct] = useState();
  const [descriptionProduct, setDescriptionProdcuct] = useState();
  const [sizeProduct, setSizeProdcuct] = useState();
  const [colorProduct, setColorProdcuct] = useState();
  const [priceProduct, setPriceProdcuct] = useState();
  const [amountProduct, setAmountProdcuct] = useState();
  const [genderProduct, setGenderProdcuct] = useState();

  const [file, setFile] = useState("");

  const FetchDataType = async () => {
    try {
      const res = await axios.get("http://localhost:3307/member");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmitAddproduct = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("idType", idType);
      formData.append("nameProduct", nameProduct);
      formData.append("images", file);
      formData.append("descriptionProduct", descriptionProduct);
      formData.append("sizeProduct", sizeProduct);
      formData.append("colorProduct", colorProduct);
      formData.append("priceProduct", priceProduct);
      formData.append("amountProduct", amountProduct);
      formData.append("genderProduct", genderProduct);

      const res = await axios.post(
        "http://localhost:3307/addproduct",
        formData
      );
      if (res.data.Status === "Add product OK") {
        Swal.fire({
          icon: "success",
          title: "You are add product Successfully!!!",
        });
        setOpenModal(false);
        setTimeout(function () {
          location.reload(1);
        }, 1000);
      } else if (res.data.Error === "Insert Fail") {
        Swal.fire({
          icon: "error",
          title: "Insert Fail",
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
                    <h1 className="text-2xl font-bold">เพิ่มข้อมูลสินค้า</h1>
                  </div>
                  <div className="w-full h-auto p-4">
                    <form
                      className="mx-auto w-full h-full"
                      onSubmit={handleSubmitAddproduct}
                    >
                      <div className="w-full flex flex-col items-center">
                        <div className="relative mt-5 flex items-center">
                          <label
                            htmlFor="nameproduct"
                            className="text-black text-md bg-white px-1 rounded-lg"
                          >
                            <FontAwesomeIcon icon={faUser} className="p-2" />
                          </label>
                          <div className="w-64 lg:w-80">
                            <input
                              id="idtype"
                              type="text"
                              placeholder="idproduct"
                              onChange={(event) => {
                                setIdType(event.target.value);
                              }}
                              className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="relative mt-5 flex items-center">
                          <label
                            htmlFor="nameproduct"
                            className="text-black text-md bg-white px-1 rounded-lg"
                          >
                            <FontAwesomeIcon icon={faUser} className="p-2" />
                          </label>
                          <div className="w-64 lg:w-80">
                            <input
                              id="nameproduct"
                              type="text"
                              placeholder="nameproduct"
                              onChange={(event) => {
                                setNameProdcuct(event.target.value);
                              }}
                              className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="relative mt-5 flex items-center">
                          <label
                            htmlFor="imageproduct"
                            className="text-black text-md bg-white px-1 rounded-lg"
                          >
                            <FontAwesomeIcon icon={faLock} className="p-2" />
                          </label>
                          <div className="w-64 lg:w-80">
                            <input
                              id="file"
                              type="file"
                              placeholder="imageproduct"
                              onChange={(event) => {
                                setFile(event.target.files[0]);
                              }}
                              className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="relative mt-5 flex items-center">
                          <label
                            htmlFor="discriptionproduct"
                            className="text-black text-md bg-white px-1 rounded-lg"
                          >
                            <FontAwesomeIcon icon={faLock} className="p-2" />
                          </label>
                          <div className="w-64 lg:w-80">
                            <input
                              id="confirm-discriptionproduct"
                              type="text"
                              placeholder="discriptionproduct"
                              onChange={(event) => {
                                setDescriptionProdcuct(event.target.value);
                              }}
                              className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="relative mt-5 flex items-center">
                          <label
                            htmlFor="sizeproduct"
                            className="text-black text-md bg-white px-1 rounded-lg"
                          >
                            <FontAwesomeIcon icon={faLock} className="p-2" />
                          </label>
                          <div className="w-64 lg:w-80">
                            <input
                              id="sizeproduct"
                              type="text"
                              placeholder="sizeproduct"
                              onChange={(event) => {
                                setSizeProdcuct(event.target.value);
                              }}
                              className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="relative mt-5 flex items-center">
                          <label
                            htmlFor="colorproduct"
                            className="text-black text-md bg-white px-1 rounded-lg"
                          >
                            <FontAwesomeIcon icon={faLock} className="p-2" />
                          </label>
                          <div className="w-64 lg:w-80">
                            <input
                              id="colorproduct"
                              type="text"
                              placeholder="colorproduct"
                              onChange={(event) => {
                                setColorProdcuct(event.target.value);
                              }}
                              className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="relative mt-5 flex items-center">
                          <label
                            htmlFor="priceproduct"
                            className="text-black text-md bg-white px-1 rounded-lg"
                          >
                            <FontAwesomeIcon icon={faLock} className="p-2" />
                          </label>
                          <div className="w-64 lg:w-80">
                            <input
                              id="priceproduct"
                              type="text"
                              placeholder="priceproduct"
                              onChange={(event) => {
                                setPriceProdcuct(event.target.value);
                              }}
                              className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="relative mt-5 flex items-center">
                          <label
                            htmlFor="amountproduct"
                            className="text-black text-md bg-white px-1 rounded-lg"
                          >
                            <FontAwesomeIcon icon={faLock} className="p-2" />
                          </label>
                          <div className="w-64 lg:w-80">
                            <input
                              id="amountproduct"
                              type="text"
                              placeholder="amountproduct"
                              onChange={(event) => {
                                setAmountProdcuct(event.target.value);
                              }}
                              className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="relative mt-5 flex items-center">
                          <label
                            htmlFor="genderproduct"
                            className="text-black text-md bg-white px-1 rounded-lg"
                          >
                            <FontAwesomeIcon icon={faLock} className="p-2" />
                          </label>
                          <div className="w-64 lg:w-80">
                            <input
                              id="genderproduct"
                              type="text"
                              placeholder="genderproduct"
                              onChange={(event) => {
                                setGenderProdcuct(event.target.value);
                              }}
                              className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
