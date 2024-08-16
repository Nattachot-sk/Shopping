import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Noitem() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-42  mx-auto">
        <h1 className="text-[40px]">No item cart</h1>
        <div className="mx-auto flex justify-center mt-5">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="text-[40px] text-center text-red-600"
          />
        </div>
      </div>
    </div>
  );
}

export default Noitem;
