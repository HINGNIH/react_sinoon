import { ContentStyle } from "./ContentStyle";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Content2 = () => {
  const newItems = [
    { id: 1, src: "../images/new01.jpg", name: "Puffer Jacket (Pale Yellow)", price: "₩ 278,000" },
    { id: 2, src: "../images/new02.jpg", name: "Puffer Jacket (Turkish Blue)", price: "₩ 278,000" },
    { id: 3, src: "../images/new03.jpg", name: "Puffer Jacket (Soft Pink)", price: "₩ 278,000" },
    { id: 4, src: "../images/new04.jpg", name: "Puffer Jacket (Rose)", price: "₩ 278,000" },
    { id: 5, src: "../images/new05.jpg", name: "Puffer Jacket (Black)", price: "₩ 278,000" },
    { id: 6, src: "../images/new10.jpg", name: "Puffer Jacket (Ivory)", price: "₩ 278,000" },
    { id: 7, src: "../images/new06.jpg", name: "Knit Balaclava (Sky Blue)", price: "₩ 48,000" },
    { id: 8, src: "../images/new07.jpg", name: "Knit Balaclava (Rose Pink)", price: "₩ 48,000" },
    { id: 9, src: "../images/new08.jpg", name: "Knit Balaclava (Black)", price: "₩ 48,000" },
    { id: 10, src: "../images/new09.jpg", name: "Knit Balaclava (Apricot)", price: "₩ 48,000" },
];
    return (
        <ContentStyle>
            <div className='inner'>
                <h2> NEW ITEM </h2>
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
          {newItems.map(item => (
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

export default Content2;
