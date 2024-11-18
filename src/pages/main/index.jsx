import { MainWrap, VisualWrap } from './style';

import Content1 from '../../components/main/Content1';
import Content2 from '../../components/main/Content2';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Main = () => {
    const products = [
        { id: 1, image: './images/5-1.jpg', name: '제품명1', price: '₩10,000' },
        { id: 2, image: './images/5-3.jpg', name: '제품명2', price: '₩15,000' },
        { id: 3, image: './images/5-4.jpg', name: '제품명3', price: '₩20,000' },
        { id: 4, image: './images/5-5.jpg', name: '제품명4', price: '₩25,000' }
    ];
    return (
        <>
           <VisualWrap>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </VisualWrap>
            <MainWrap>
                <Content1 />
                <Content2 />
            </MainWrap>
            {/* <VisualWrap>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                >
                    <SwiperSlide>
                        <img src='./images/5-1.jpg' alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='./images/5-3.jpg' alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='./images/5-4.jpg' alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='./images/5-5.jpg' alt='' />
                    </SwiperSlide>
                </Swiper>
            </VisualWrap>
            <MainWrap>
                <Content1 />
                <Content2 />
            </MainWrap> */}
        </>
    );
};

export default Main;
