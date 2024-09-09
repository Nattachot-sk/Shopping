import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import ModalAddProduct from "./ModalAddProduct";

function ShowProduct() {
  const [showModal, setShowModal] = useState(false);
  const [dataProduction, setDataProduction] = useState([]);
  const [limit, setLimit] = useState(5); 
  const [page, setPage] = useState(1); 
  const [selectedGender, setSelectedGender] = useState(""); 
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [search, setSearch] = useState("");
  const [noDataMessage, setNoDataMessage] = useState(
    "ไม่พบข้อมูลที่ตรงกับเงื่อนไข"
  );

  const FetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3307/product");
      setDataProduction(res.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  const handleDeleteProduct = (id_product) => {
    Swal.fire({
      title: "ยืนยันการลบ",
      text: "คุณแน่ใจหรือไม่ที่ต้องการลบข้อมูลนี้?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((res) => {
      if (res.isConfirmed) {
        axios
          .delete("http://localhost:3307/deleteproduct/" + id_product)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "ลบเสร็จสิ้น",
              timer: 2500,
            });
            FetchData(); // รีเฟรชข้อมูลหลังจากลบ
          })
          .catch((error) => {
            console.error("Error deleting data:", error);
          });
      }
    });
  };

  const handleChangeLimit = (event) => {
    setLimit(Number(event.target.value));
  };
  const handleChangeGender = (event) => {
    setSelectedGender(event.target.value);
  };
  const handleChangeSize = (event) => {
    setSelectedSize(event.target.value);
  };
  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleChangeColor = (event) => {
    setSelectedColor(event.target.value);
  };

  // ฟังก์ชันกรองข้อมูลตามเพศที่เลือก
  const filteredProducts = dataProduction.filter((product) => {
    const matchesGender =
      !selectedGender ||
      product.gender_product.toLowerCase() === selectedGender.toLowerCase();
    const matchesSize =
      !selectedSize ||
      product.size_product.toLowerCase() === selectedSize.toLowerCase();
    const matchesColor =
      !selectedColor ||
      product.color_product.toLowerCase() === selectedColor.toLowerCase();
    const matchesSearch =
      product.name_product.toLowerCase().includes(search.toLowerCase()) ||
      product.size_product.toLowerCase().includes(search.toLowerCase()) ||
      product.gender_product.toLowerCase().includes(search.toLowerCase()) ||
      product.price_product.toLowerCase().includes(search.toLowerCase()) ||
      product.amount_product.toLowerCase().includes(search.toLowerCase()) ||
      product.color_product.toLowerCase().includes(search.toLowerCase());

    return matchesGender && matchesSize && matchesColor && matchesSearch;
  });

  // คำนวณรายการที่จะแสดงตามหน้าและจำนวนรายการที่กำหนด
  const startIndex = (page - 1) * limit;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + limit
  );

  return (
    <div className="w-full min-h-screen bg-slate-500 p-10">
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <button
            className="px-4 py-2 text-white bg-indigo-600 rounded-md"
            type="button"
            onClick={() => setShowModal(true)}
          >
            เพิ่มข้อมูล
          </button>
          <div className="flex justify-center items-center gap-2">
            <label htmlFor="gender" className="mr-2 text-white">
              เลือกเพศ:
            </label>
            <select
              id="gender"
              onChange={handleChangeGender}
              className="px-2 py-1 rounded-md"
            >
              <option value="">ทั้งหมด</option>
              <option value="men">ชาย</option>
              <option value="women">หญิง</option>
            </select>
            <label htmlFor="size" className="mr-2 text-white">
              เลือกไซส์:
            </label>
            <select
              id="size"
              onChange={handleChangeSize}
              className="px-2 py-1 rounded-md"
            >
              <option value="">ทั้งหมด</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <label htmlFor="color" className="mr-2 text-white">
              เลือกสี:
            </label>
            <select
              id="color"
              onChange={handleChangeColor}
              className="px-2 py-1 rounded-md"
            >
              <option value="">ทั้งหมด</option>
              <option value="ดำ">ดำ</option>
              <option value="ขาว">ขาว</option>
              <option value="แดง">แดง</option>
              <option value="เขียว">เขียว</option>
            </select>
          </div>
          <div className="flex justify-center items-center gap-2">
            <label htmlFor="limit" className="mr-2 text-white">
              ค้นหา:
            </label>
            <input type="text" onChange={handleChangeSearch} />
            <div>
              <label htmlFor="limit" className="mr-2 text-white">
                จำนวนรายการต่อหน้า:
              </label>
              <select
                id="limit"
                value={limit}
                onChange={handleChangeLimit}
                className="px-2 py-1 rounded-md"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
        </div>

        {showModal && <ModalAddProduct setOpenModal={setShowModal} />}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Type ID</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3">Size</th>
                <th className="px-6 py-3">Color</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Gender</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayedProducts.length > 0 ? (
                displayedProducts.map((product, index) => (
                  <tr
                    key={index}
                    className="bg-gray-100 border-b border-gray-200"
                  >
                    <td className="px-6 py-4">{product.id_product}</td>
                    <td className="px-6 py-4">{product.id_type}</td>
                    <td className="px-6 py-4">{product.name_product}</td>
                    <td className="px-6 py-4">
                      <img
                        src={`http://localhost:3307/images/${product.image_product}`}
                        alt=""
                        className="size-40 object-cover"
                      />
                    </td>
                    <td className="px-6 py-4">{product.description_product}</td>
                    <td className="px-6 py-4">{product.size_product}</td>
                    <td className="px-6 py-4">{product.color_product}</td>
                    <td className="px-6 py-4">{product.price_product}</td>
                    <td className="px-6 py-4">{product.amount_product}</td>
                    <td className="px-6 py-4">{product.gender_product}</td>
                    <td className="px-6 py-4 flex justify-center space-x-2">
                      <Link
                        to={`/editproduct/${product.id_product}`}
                        className="px-4 py-2 bg-yellow-300 text-black rounded-lg hover:bg-yellow-400"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDeleteProduct(product.id_product)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="11" className="px-6 py-4 text-center">
                    {noDataMessage}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="flex justify-center mt-4">
            <button
              className={`px-4 py-2 rounded-md ${
                page > 1 ? "bg-red-400" : "bg-gray-300"
              }`}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            >
              Previous
            </button>
            <span className="px-4 py-2 text-white">{page}</span>
            <button
              className={`px-4 py-2 rounded-md ${
                page < 1 ? "bg-gray-300" : "bg-blue-500"
              }`}
              onClick={() => setPage((prev) => prev + 1)}
              disabled={startIndex + limit >= filteredProducts.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
