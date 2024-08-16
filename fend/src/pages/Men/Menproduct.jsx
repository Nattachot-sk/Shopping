import axios from "axios";
import { React, useEffect, useState } from "react";
import { add } from "../../redux/features/navbar/navbarSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Menproduct({}) {

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

  const products = useSelector(state => state.productsReducer.value); // products is an array

  const navigate = useNavigate();

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
              .filter((item) => item.gender_product === "men")
              .map((item, index) => (
                <div key={index} className="text-center">
                  <img
                    src={`http://localhost:3307/images/` + item.image_product}
                    alt=""
                    className="w-[240px] h-[340px]"
                  />
                  <p><span className="font-bold">ชื่อสินค้า :</span> {item.name_product}</p>
                  <p><span className="font-bold">สี :</span>  {item.color_product}</p>
                  <p><span className="font-bold">Size :</span>  {item.size_product}</p>
                  <p><span className="font-bold">ราคา :</span>  {item.price_product} B</p>
                  <button className="w-full border-2 border-white px-5 py-2 font-bold hover:bg-slate-100" onClick={() => dispatch(add(item))}>
                  Add to cart <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menproduct;
