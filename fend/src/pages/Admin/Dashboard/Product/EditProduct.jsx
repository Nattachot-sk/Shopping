import { React, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";

import NavbarAdmin from "../../ComponentAdmin/NavbarAdmin";
import Topbar from "../../ComponentAdmin/Topbar";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [idType, setIdType] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [imageProduct, setImageProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [sizeProduct, setSizeProduct] = useState("");
  const [colorProduct, setColorProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [amountProduct, setAmountProduct] = useState("");
  const [genderProduct, setGenderProduct] = useState("");

  const fetchDataProduct = async () => {
    try {
      const res = await axios.get("http://localhost:3307/product/" + id);
      const dataProduct = res.data[0];
      setIdType(dataProduct.id_type);
      setNameProduct(dataProduct.name_product);
      setImageProduct(dataProduct.image_product);
      setDescriptionProduct(dataProduct.description_product);
      setSizeProduct(dataProduct.size_product);
      setColorProduct(dataProduct.color_product);
      setPriceProduct(dataProduct.price_product);
      setAmountProduct(dataProduct.amount_product);
      setGenderProduct(dataProduct.gender_product);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchDataProduct();
    }
  }, [id]);

  const handleSubmitEditProduct = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.put("http://localhost:3307/editproduct/" + id, {
        idType,
        nameProduct,
        imageProduct,
        descriptionProduct,
        sizeProduct,
        colorProduct,
        priceProduct,
        amountProduct,
        genderProduct,
      });

      if (res.data.Status === "Update OK") {
        navigate("/product");
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
      console.error("Error updating product:", error);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถแก้ไขได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง",
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-500">
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
                  กำลังแก้ไข <p></p>
                </h1>
              </div>
              <form onSubmit={handleSubmitEditProduct}>
                <div className="block">
                  <div className="textbox">
                    <label
                      htmlFor="idType"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      idType
                    </label>
                    <input
                      type="text"
                      name="idType"
                      value={idType}
                      onChange={(e) => setIdType(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="textbox">
                    <label
                      htmlFor="nameProduct"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      nameProduct
                    </label>
                    <input
                      type="text"
                      name="nameProduct"
                      value={nameProduct}
                      onChange={(e) => setNameProduct(e.target.value)}
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="textbox">
                  <label
                    htmlFor="imageProduct"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    imageProduct
                  </label>
                  <input
                    type="text"
                    value={imageProduct}
                    name="imageProduct"
                    onChange={(e) => setImageProduct(e.target.value)}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <div className="mx-auto">
                    <img
                      src={`http://localhost:3307/images/` + imageProduct}
                      alt=""
                      className="w-[300px] h-[300px] mx-auto"
                    />
                  </div>
                </div>
                <div className="textbox">
                  <label
                    htmlFor="descriptionProduct"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    descriptionProduct
                  </label>
                  <input
                    type="text"
                    name="descriptionProduct"
                    value={descriptionProduct}
                    onChange={(e) => setDescriptionProduct(e.target.value)}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="textbox">
                  <label
                    htmlFor="sizeProduct"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    sizeProduct
                  </label>
                  <input
                    type="text"
                    name="sizeProduct"
                    value={sizeProduct}
                    onChange={(e) => setSizeProduct(e.target.value)}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="textbox">
                  <label
                    htmlFor="colorProduct"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    colorProduct
                  </label>
                  <input
                    type="text"
                    name="colorProduct"
                    value={colorProduct}
                    onChange={(e) => setColorProduct(e.target.value)}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="textbox">
                  <label
                    htmlFor="priceProduct"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    priceProduct
                  </label>
                  <input
                    type="text"
                    name="priceProduct"
                    value={priceProduct}
                    onChange={(e) => setPriceProduct(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="textbox">
                  <label
                    htmlFor="amountProduct"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    amountProduct
                  </label>
                  <input
                    type="text"
                    name="amountProduct"
                    value={amountProduct}
                    onChange={(e) => setAmountProduct(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="textbox">
                  <label
                    htmlFor="genderProduct"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    genderProduct
                  </label>
                  <input
                    type="text"
                    name="genderProduct"
                    value={genderProduct}
                    onChange={(e) => setGenderProduct(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="flex justify-between mt-5">
                  <button
                    className="bg-blue-500 hover:bg-blue-400 p-2 rounded-md"
                    type="submit"
                  >
                    ยืนยันการแก้ไข
                  </button>
                  <Link
                    className="bg-red-500 hover:bg-red-300 p-2 rounded-md"
                    to={"/product"}
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

export default EditProduct;
