import axios from "axios";
import { React, useEffect, useState } from "react";
import { add } from "../../redux/features/navbar/navbarSlice";

import { useSelector, useDispatch } from "react-redux";

function Womenproduct() {
  const [dataProduct, setDataProduct] = useState([]);
  const FetchDataMen = async () => {
    try {
      const res = await axios.get("http://localhost:3307/product");
      setDataProduct(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    FetchDataMen();
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="w-full h-full mb-20">
      <div>location web</div>
      <div className="w-full h-full flex flex-row sm:px-40 sm:mt-20">
        <div className=" flex-0 w-[25%]  bg-blue-200">
          <div className="w-full h-full bg-black">dwdw</div>
        </div>
        <div className="flex-1 w-[75%] bg-orange-300">
          <div className="w-full h-20 bg-gray-500"></div>
          <div className="grid grid-cols-4  gap-2 mt-5 justify-center justify-items-center p-5">
            {dataProduct
              .filter((item) => item.gender_product === "women")
              .map((item, index) => (
                <div key={index} className="text-center">
                  <img
                    src={`http://localhost:3307/images/` + item.image_product}
                    alt=""
                    className="w-60 h-80"
                  />
                  <p>{item.name_product}</p>
                  <p>ราคา {item.price_product} B</p>
                  <p>สี {item.color_product}</p>
                  <p>size {item.size_product}</p>
                  <button className="w-full border-2 px-5 py-2" onClick={() => dispatch(add(item))}>
                  add to cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Womenproduct;
