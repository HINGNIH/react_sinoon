import styled from "styled-components";

// export const ContentStyle1 = styled.div`
//     background: #fff;
//     .inner { }
//     h2 {margin-bottom:0;}
//     #app {
//   height: 100%;
// }
// html,
// body {
//   position: relative;
//   height: 100%;
// }

// body {
//   background: #eee;
//   font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
//   font-size: 14px;
//   color: #000;
//   margin: 0;
//   padding: 0;
// }

// .swiper {
//   width: 100%;
//   height: 100%;
//   /* height:380px; */
// }

// .swiper-slide {
//   text-align: center;
//   font-size: 18px;
//   background: #fff;

//   /* Center slide text vertically */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .swiper-slide img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

// `

export const ContentStyle = styled.div`
    background: #fff;
    margin-top: 100px;
    margin-bottom: 150px;
    .inner {
        padding: 20px;
    }

    h2 {
        margin-bottom: 40px;
    }

    .swiper {
        width: 100%;
        height: 10%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: flex;
        flex-direction: column; /* 이미지와 제품 정보를 세로로 정렬 */
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        width: 100%;
        height: 100%; /* 원하는 높이로 조정 가능 */
        object-fit: cover;
        margin-bottom: 10px; /* 이미지와 제품 정보 간격 */
    }

    /* 제품명과 가격 스타일 */
    .product-info {
        text-align: center;
    }

    .product-info h3 {
        font-size: 16px;
        margin: 5px 0;
        color: #333;
    }

    .product-info p {
        font-size: 14px;
        color: #999;
    }
    .productList {
      margin-bottom: 50px;
    }
    .swiper-pagination-bullet-active {
      background-color : #FAAB88;
    }
`;
