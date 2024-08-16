import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
      id: 1,
      name: 'Wade Cooper',
      avatar:
        'https://images.unsplash.com/photo-1615064779799-df1bfcc66ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRpZGFzfGVufDB8fDB8fHww',
    },
    {
      id: 2,
      name: 'Arlene Mccoy',
      avatar:
        'https://images.unsplash.com/photo-1588110679566-158c6dea107c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 3,
      name: 'Devon Webb',
      avatar:
        'https://images.unsplash.com/photo-1598403031688-e7cfd2c222c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 4,
      name: 'Tom Cook',
      avatar:
        'https://images.unsplash.com/photo-1621665422246-fde75fb7e7f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 5,
      name: 'Tanya Fox',
      avatar:
        'https://images.unsplash.com/photo-1589178698744-b0c65639636e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 6,
      name: 'Hellen Schmidt',
      avatar:
        'https://images.unsplash.com/photo-1599839352521-8f25bc02b3b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 7,
      name: 'Caroline Schultz',
      avatar:
        'https://images.unsplash.com/photo-1511746279269-b3d5f30e6a0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 8,
      name: 'Mason Heaney',
      avatar:
        'https://images.unsplash.com/photo-1592882544304-1a3320823a79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D',
    },

  ];

function Slidehero() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 500,
    cssEase: "linear",
    arrows: false,
  };
  
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="slide-item">
            <img src={item.avatar} alt={item.name} className="w-full h-[650px] object-cover" />

          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slidehero;
