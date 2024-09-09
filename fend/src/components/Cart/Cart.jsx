import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import {
  add,
  remove,
  removeOne,
} from "../../redux/features/navbar/navbarSlice";
import { useNavigate } from "react-router-dom";
import Noitem from "../Noitem/Noitem";

function Cart() {
  const productsInShoppingCart = useSelector(
    (state) => state.navbarReducer.value
  ); // productsInShoppingCart is an array

  // Sepetteki ürünlerin fiyatlarının toplamını hesaplama
  function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < productsInShoppingCart.length; i++) {
      totalPrice +=
        productsInShoppingCart[i].price_product *
        productsInShoppingCart[i].quantity; // Her ürünü adedi ile çarparak toplam fiyatı hesaplama
    }
    return totalPrice;
  }

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const defaultStyle = {
    color: "#9d174d",
    cursor: "pointer",
  };

  const otherStyle = {
    color: "#dcd9d9",
    cursor: "default",
  };

  return (
    <>
      <div className="text-center mx-auto text-[35px]">
        <h1 className="">SHOPPING CART</h1>
      </div>
      <div className="w-full h-auto flex  justify-center mb-40">
        <div className="w-[850px] mt-10 mx-auto rounded-lg shadow-lg py-5 px-10 bg-white">
          {calculateTotalPrice() === 0 ? (
            <Noitem />
          ) : (
            <>
              <h1 className="text-2xl font-bold text-center mb-5">
                Shopping Cart
              </h1>
              {productsInShoppingCart.map((eachProduct, index) => (
                <div key={index} className="border-b border-gray-200 py-4 ">
                  <div className="flex items-center mb-3">
                    <img
                      src={`http://localhost:3307/images/${eachProduct.image_product}`}
                      alt={"product image"}
                      className="w-[200px] h-[300px] mr-4 rounded-lg shadow-md cursor-pointer"
                      onClick={() =>
                        navigate(`/details/${eachProduct.id_product}`)
                      }
                    />
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold">
                       ชื่อสินค้า: {eachProduct.name_product}
                      </h2>
                      <p className="text-gray-600 mt-5">
                       รายละเอียด: {eachProduct.description_product}
                      </p>
                      <p className="text-gray-600 mt-5">
                       Color: {eachProduct.color_product}
                      </p>
                      <span className="text-gray-500 mt-3">
                        Size: {eachProduct.size_product}
                      </span>
                    </div>
                  </div>


                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center ml-14">
                      <button
                        onClick={() =>
                          dispatch(removeOne(eachProduct.id_product))
                        }
                        className={`px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 ${
                          eachProduct.quantity < 2
                            ? "cursor-not-allowed"
                            : "cursor-pointer bg-red-400"
                        }`}
                        disabled={eachProduct.quantity < 2}
                      >
                        -
                      </button>
                      <span className="mx-2">{eachProduct.quantity}</span>
                      <button
                        onClick={() => dispatch(add(eachProduct))}
                        className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600 cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center">
                      <span className="font-bold">$</span>
                      <span className="font-bold">
                        {(
                          eachProduct.price_product * eachProduct.quantity
                        ).toFixed(2)}
                      </span>
                      <button
                        onClick={() => dispatch(remove(eachProduct.id_product))}
                        className="ml-4 text-red-500 hover:text-red-700 cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faTrashCan} className="text-[30px]"/>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-5 text-xl font-bold  flex justify-around">
<div>
  ยืนยัน
</div>

              <div>
              <span>Total Price: </span>
                <span>$</span>
                <span>{calculateTotalPrice().toFixed(2)}</span>
              </div>

                
              </div>
            </>
            
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
