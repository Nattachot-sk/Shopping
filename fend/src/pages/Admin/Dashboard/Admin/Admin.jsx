import React from "react";
import NavbarAdmin from "../../ComponentAdmin/NavbarAdmin";
import Topbar from "../../ComponentAdmin/Topbar";
import Member from "../Member/Member";


function Admin() {


  return (
    <div className="w-full min-h-screen ">
      <div className="flex">
        <div className="flex-[10%]">
          <NavbarAdmin />
        </div>
        <div className="flex-[85%]">
          <Topbar/>
        </div>
      </div>
    </div>
  );
}

export default Admin;
