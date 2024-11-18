import styled from 'styled-components';

export const ProductSearchWrap = styled.div`

    margin-bottom: 30px;
    position: relative;
    form {
        display: flex;
        justify-content: space-between;
        p {
            input[type='text'] {
                width: 250px;
                box-sizing: border-box;
                height: 45px;
                padding: 10px;
                border-bottom :  1px solid #999;
            }
            button {
                width: 100px;
                height: 45px;
                vertical-align: top;
                background: black;
                color:white;
                margin-left: 10px;
            }
            select {
                width: 200px;
                height: 45px;
                box-sizing: border-box;
                padding: 10px;
                border: 1px solid #999;
            }
            span {
                margin-left: 15px;
                cursor: pointer;
            }
        }
        .searchWrap {
            
            display: flex;
            align-items: center;
            svg {
               margin-right: 10px;
               color:#999;
            }
            input {
                border:0;
                outline:none;

            }
        }
    }
`;

export const ProductListWrap = styled.article`
    &.cart-box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        article {
            width: 23%;
            box-sizing: border-box;
            margin-bottom: 30px;
            text-align: center;
            div {
                margin-bottom: 10px;
            }
            img {
                width: 100%;
            }
            h3 {
                font-size: 20px;
                margin-bottom: 0px;
            }
            h4 {
                font-size: 18px;
                line-height: 1.0;
                font-weight: 300;
                margin-bottom: 20px;
            }
            p {
                width: 90%;
                margin: auto;
                /* display: flex; */
                justify-content: space-between;
                align-items: center;
                margin-top: 10px;
            };
            p {
                width: 100%;
                display: flex; 
                justify-content: space-between;
                margin : 10px 0 30px 0;
                .buy_it_now {
                    width: 156px;
                    background: black;
                    padding: 15px 20px;
                    margin : 0;
                    vertical-align: middle;
                    color: #fff;
                    border : 1px solid black;
                    transition: background-color 0.3s, color 0.3s;
                    &:hover {
                        background-color : white;
                        color : black;
                        border : 1px solid black;
                    }
                }
              
                button { //add to cart / 주문취소
                   width: 156px;
                    background: white;
                    padding: 15px 20px;
                    margin : 0;
                    vertical-align: middle;
                    color: black;
                    border : 1px solid black;
                    transition: background-color 0.3s, color 0.3s;
                
                    &.off {
                        background: #FAAB88;
                        border : 1px solid #FAAB88 ;
                        color:white;
                        height: 47px;
                        vertical-align: middle;
                        
                    }
                    &:hover {
                        background: #FAAB88;
                        border : 1px solid #FAAB88 ;
                        color:white;
                    }
                    span {
                        font-size: 18px;
                    }
                }
            }
        }
    }
`;
