import { ContentStyle } from "./ContentStyle";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Content1 = () => {
  const bestItems = [
    { id: 1, src: "../images/best01.jpg", name: "Rabbit Tie Sleeve Tutleneck Knit (Light Blue) ", price: "₩ 138,000" },
    { id: 2, src: "../images/best02.jpg", name: "Grape Button Bustier (Melange Grey)", price: "₩ 88,000" },
    { id: 3, src: "../images/best03.jpg", name: "Rose Flower Cardigan (Lilac Pink)", price: "₩ 158,000" },
    { id: 4, src: "../images/best04.jpg", name: "Lace Layered Skirt Pants (Black)", price: "₩ 143,000" },
    { id: 5, src: "../images/best05.jpg", name: "Rose Frill Hoodie Zipup (Rose) ", price: "₩ 128,000" },
    { id: 6, src: "../images/best06.jpg", name: "Silky Lace Slip Dress (Mint)", price: "₩ 168,000" },
    { id: 7, src: "../images/best07.jpg", name: "Sinoon Logo Cardigan (Light Pink)", price: "₩ 118,000" },
    { id: 8, src: "../images/best08.jpg", name: "Tutu Skirt (Greyish Green)", price: "₩ 168,000" },
];

    return (
        <ContentStyle>
             <div className="inner">
                    <h2> BEST ITEM </h2>
                    <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
         {bestItems.map(item => (
                        <SwiperSlide key={item.id}>
                          <div className="productList">
                          <img src={item.src} alt={item.name} />
                            <div className="product-info">
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                            </div>
                          </div>
                          
                        </SwiperSlide>
                    ))}
        </Swiper>
      </>
            </div>

           
        </ContentStyle>
        
        
    );
};

export default Content1;