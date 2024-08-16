import React from "react";

function Bestseller() {
  const data = [
    {
      id: 1,
      name: "Wade Cooper",
      price: "3500",
      avatar:
        "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Arlene Mccoy",
      price: "3500",
      avatar:
        "https://images.unsplash.com/photo-1626379530580-6a58c5cf1d5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Devon Webb",
      price: "3500",
      avatar:
        "https://images.unsplash.com/photo-1598403031688-e7cfd2c222c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Tom Cook",
      price: "3500",
      avatar:
        "https://images.unsplash.com/photo-1621665422246-fde75fb7e7f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      name: "Tanya Fox",
      price: "3500",
      avatar:
        "https://images.unsplash.com/photo-1589178698744-b0c65639636e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      name: "Hellen Schmidt",
      price: "3500",
      avatar:
        "https://images.unsplash.com/photo-1599839352521-8f25bc02b3b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 7,
      name: "Caroline Schultz",
      price: "3500",
      avatar:
        "https://images.unsplash.com/photo-1511746279269-b3d5f30e6a0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 8,
      name: "Mason Heaney",
      price: "3500",
      avatar:
        "https://images.unsplash.com/photo-1592882544304-1a3320823a79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="w-full h-full  pb-5">
      <div className="w-full h-10 mt-5">
        <p className="text-[35px] text-black font-[35px] uppercase text-center">
          Best Seller!
        </p>
      </div>
      <div className="w-auto h-auto grid grid-cols-auto gap-5 pt-5 relative sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  sm:gap-5">
        {data.map((item) => (
          <div key={item.id} className="w-[250px] h-full p-3 relative mx-auto  rounded-lg hover:ring-1 hover:ring-black hover:shadow-lg">
            <img
              src={item.avatar}
              alt={item.name}
              className="h-[150px] mx-auto object-cover hover:skew-y-3 hover:animate-pulse hover:rounded-md"
            />
            <h1 className="text-black relative left-10">{item.name}</h1>
            <h1 className="text-black relative left-10">{item.price} ฿</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bestseller;
