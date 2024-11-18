import styled from 'styled-components';

export const CartListWrap = styled.div`

.inner {
    /* background-color:peachpuff; */
    overflow: hidden;
    padding : 180px 0;
     h2 {
        font-weight: 700;
         margin-bottom: 50px;
    }
    /////////////////////////////////////////////////
    .selected-all { //전체선택 checkbox
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-size:18px;
         
        .check {
            display: flex;
            align-items: center;
        }
            svg {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            
        }
        input {
            display:none;
        }
        
    } 
    
    
     .cart-list-container {
        display:flex;
        justify-content: space-between;
    } 
}
    .cart-list {
        width: 75%;
        margin-right: 16px; /* payment 영역과의 간격 */
        
}      //장바구니 li  
     .cartitemwrap {
            display: flex;
            justify-content: space-between;
             border: 1px solid #000;
             align-items: center;
             margin-bottom: 15px;
             padding: 20px;
             font-size: 20px;
             width: auto;
             position:relative;
             .cartitem_left {
                display: flex;
                width: 100%;
                //////////////////////////////////////////////
                .selected-item {
                    display: flex;
                    align-items: flex-start;
                    
                    .check {
                        display: flex;
                    align-items: flex-start;
                    }
                    svg {
                        width: 20px;
                        height: 20px;
                        margin-right: 10px;
                    }
                }
                input { 
                    display: none;
                }
                .buy_now {
                margin: 0;
                position: absolute;;
                bottom: 20px;
                right : 20px;
               }
                img {
                    width: 120px;
                    margin-right: 40px;
                    }
             }
            
         .product_info{
                display: flex;
                justify-content: space-between;
                 flex-direction: column;
                 width: 60%;
                .product_title {
                    margin-right: 30px;
                }
                 h4 {
                     font-weight: 300;
                     font-size: 18px;
                }
                .count {
                     display: flex;
                     flex-direction: row;
                     align-items: center;
                     p {
                         width: 30px;
                         height: 30px;
                         margin-right: 5px;
                         text-align: center;
                         font-size: 20px;
                         cursor: pointer;
                         vertical-align: middle;
                         box-sizing: border-box;
                         
                    }
                    em {
                        /* border: 1px solid #dedede; */
                            width: 30px;
                            height: 30px;
                            text-align: center;
                            margin-right: 5px;
                         }

                 }
                 span {
                 font-weight: 600;
               }
              
               
            }
            .del{
                     /* border:1px solid #000; */
                     border-radius: 30px;
                     /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
                     width:30px;
                     height: 30px;
                     font-size: 30px;
                     position: absolute;
                     top:20px;
                     right: 20px;
                     cursor: pointer;
                }
             button {
                 position: absolute;
                 right: 0;
                //
                 width: 100px;
                 border: 1px solid #000;
                 height: 40px;
                transition: 0.3s;
                 margin-top: 0;
                 &:hover {
                 background: #fff;
                 color: #000;
                }
             }
    }


     .cart-bottom {
         margin-top: 50px;
         display: flex;
         font-size: 18px;
         strong {
             margin-right: 20px;
         }
     }
     button {
         margin-top: 50px;
         width: 150px;
         height: 50px;
         background: #000;
        color: #fff;
         margin-right: 15px;
         margin-bottom: 50px;
     }
   
     .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    .modal-content {
        background-color: #fff;
        padding: 30px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        animation: fadeIn 0.3s ease;

        h3 {
            font-weight: 600;
            margin-bottom: 15px;
            font-size: 18px;
        }

        button {
            padding: 10px 20px;
            background-color: black;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            margin-bottom: 0;
        }

        button:hover {
            background-color: #FAAB88;
        }
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`;
export const PaymentWrap = styled.div`
         width:350px;
         /* flex: 0 0 200px; */
         
        .payment_box {
            padding: 30px;
             border : 1px solid #000;
             font-weight: 700;
                h3 {
                    font-size: 26px; 
                    margin-bottom: 20px;
                 }
                p { display: flex;
                    justify-content: space-between;
                    align-items: center; // p 내부의 em을 수직 가운데 정렬
                    width: 100%;
                    margin-bottom: 10px;
                    em { 
                        font-weight: 500;
                    }
                }
               
                hr {
                    margin-top: 30px;
                }
                h4 {display: flex;
                    justify-content: space-between;
                    align-items: center; // p 내부의 em을 수직 가운데 정렬
                    width: 100%;
                    margin-top: 20px;
                    font-size: 20px;    
                }
                strong {
                    font-weight: 800;
                    font-size: 24px; 
                    }
                    .dc_amount {
                        font-weight: 700;
                    }
             }
             
        button {
            width: 100%;
            margin: 0;
            margin-top: 20px;
            font-size: 16px;
        }
        
  
`
export const CartEmptyWrap = styled.div`
     .inner {
     }
     h2 {
    }
     div {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         height: 500px;
    }
   p {
         text-align: center;
         button {
             margin-top: 30px;
             width: 300px;
             height: 50px;
            background: #000;
             color: #fff;
         }
     }
`;
