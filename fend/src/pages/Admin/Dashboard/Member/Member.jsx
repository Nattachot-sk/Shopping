import { useEffect, useState } from "react";
import axios from "axios";

import NavbarAdmin from "../../ComponentAdmin/NavbarAdmin";
import Topbar from "../../ComponentAdmin/Topbar";
import ShowMember from "./ShowMember";

import { useAuth } from "../../../../auth/AuthContext";

function Member() {
  const [dataMember, setDataMember] = useState([]);

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

  return (
    <div className="w-full h-screen">
      <div className="flex">
        <div className="flex-[10%]">
          <NavbarAdmin />
        </div>
        <div className="flex-[50%] sm:flex-[85%]">
          <Topbar />
          <ShowMember />
        </div>
      </div>
    </div>
  );
}

export default Member;
