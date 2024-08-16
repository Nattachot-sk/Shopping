import React from "react";
import { useSpring, animated } from "@react-spring/web";

function Shopnew() {
  const slideIn = useSpring({
    from: { transform: "scale(0)" },
    to: { transform: "scale(1)" },
    config: { duration: 1000 },
  });

  return (
    <div className="w-full h-auto">
      <div className="w-full h-16">
        <p className="text-[35px] font-bold uppercase text-center">new product</p>
      </div>
      <div className="w-full h-auto flex justify-center gap-5 p-5">
        <animated.div style={slideIn}>
          <img src="../img/shop-new/1.png" alt="" />
        </animated.div>
        <animated.div style={slideIn}>
          <img src="../img/shop-new/2.png" alt="" />
        </animated.div>
        <animated.div style={slideIn}>
          <img src="../img/shop-new/3.png" alt="" />
        </animated.div>
      </div>
    </div>
  );
}

export default Shopnew;
