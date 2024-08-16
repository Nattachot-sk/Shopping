import React from "react";
import Map from "./Map";
import SocailLocation from "./SocailLocation";

function DataLocation() {
  return (
    <div className="w-full h-full  p-20 ">
        <div className="w-full h-20 mx-auto">
            <h1 className="text-center mt-5 text-[55px]">Location</h1>
        </div>

      <div className="block border-2 border-black rounded-md p-5 md:flex  md:min-w-[200px] min-h-[450px] mx-auto mt-5 ">
        <div className="flex-1">
          <div>
            <h1>THE MAP</h1>
            <h1>
              170 Phahonyothin Rd, Thale Chup Son, Mueang Lop Buri District,
              Lopburi 15000
            </h1>
            <h1>Phonenumber</h1>
            <p>098888888</p>
          </div>
          <div>
            <SocailLocation />
          </div>
        </div>
        <div className="flex-1 mb-10">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default DataLocation;
