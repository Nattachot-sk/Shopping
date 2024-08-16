import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import ModalAddMember from "./ModalAddMember";

function ShowMember() {
  const [showModal, setShowModal] = useState(false);
  const [dataMember, setDataMember] = useState([]);
  const [limit, setLimit] = useState(5); // กำหนดจำนวนรายการเริ่มต้นที่จะแสดง
  const [page, setPage] = useState(1); // กำหนดหน้าเริ่มต้น

  const FetchDataMember = async () => {
    try {
      const res = await axios.get("http://localhost:3307/member");
      setDataMember(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    FetchDataMember();
  }, []);

  const handleDelete = (id_member) => {
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
        axios.delete("http://localhost:3307/deletemember/" + id_member).then(() => {
          Swal.fire({
            icon: "success",
            title: "ลบเสร็จสิ้น",
            timer: 2500,
          });
          FetchDataMember();
        }).catch(error => {
          console.error("Error deleting data:", error);
        });
      }
    });
  };
  
  const handleChangeLimit = (event) => {
    setLimit(Number(event.target.value));
  };

  // คำนวณรายการที่จะแสดงตามหน้าและจำนวนรายการที่กำหนด
  const startIndex = (page - 1) * limit;
  const displayedMember = dataMember.slice(
    startIndex,
    startIndex + limit
  );

  return (
    <div className="w-full min-h-screen bg-slate-500 p-10 ">
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <button
            className="px-4 py-2 text-white bg-indigo-600 rounded-md"
            type="button"
            onClick={() => setShowModal(true)}
          >
            เพิ่มข้อมูล
          </button>
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
        

        {showModal && <ModalAddMember setOpenModal={setShowModal} />}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg table-auto">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Firstname</th>
                <th className="px-6 py-3">Lastname</th>
                <th className="px-6 py-3">Age</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayedMember.map((member, index) => (
                <tr key={index} className="bg-gray-100 border-b border-gray-200">
                  <td className="px-6 py-4">{member.email}</td>
                  <td className="px-6 py-4">{member.firstname}</td>
                  <td className="px-6 py-4">{member.lastname}</td>
                  <td className="px-6 py-4">{member.age}</td>
                  <td className="px-6 py-4 flex justify-center space-x-2">
                    <Link
                      to={`/editmember/${member.id_member}`}
                      className="px-4 py-2 bg-yellow-300 text-black rounded-lg hover:bg-yellow-400"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(member.id_member)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
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
              disabled={startIndex + limit >= dataMember.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowMember;
