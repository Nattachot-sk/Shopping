import {React, useState} from 'react'
import NavbarAdmin from "../../ComponentAdmin/NavbarAdmin";
import Topbar from "../../ComponentAdmin/Topbar";
import Member from "../Member/Member";
import Showproduct from './Showproduct';

function Product() {

    return (
      <div className="w-full min-h-screen">
        <div className="flex">
          <div className="flex-[10%]">
              <NavbarAdmin />
          </div>
          <div className="flex-[85%] overflow-auto">
              <Topbar />
              <Showproduct/>
          </div>
        </div>
      </div>
    );
}

export default Product