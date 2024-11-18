import { useDispatch, useSelector } from "react-redux";
import {addCart, removeCart} from "../../store/modules/cartSlice"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({item}) => {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const {id, title, price, option, category, image, imageHover} = item;
    const {carts} = useSelector(state=>state.cart)

    const [isHovered, setIsHovered] = useState(false);

    const handleBuyNow = () => {
        if (!carts.find(x => x.id === id)) {
            dispatch(addCart(item));
        }
        navigate("/cart");
    };
    
    return (
        <article
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
         >
            <div>
                <img src={isHovered? imageHover : image} alt={title} />
            </div>
            <h3> {title} </h3>
            <h4> {option} </h4>
            <span> ₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span>
            <p>
                <button className='buy_it_now'onClick={handleBuyNow}> BUY IT NOW</button>
                {
                    carts.find((x)=>x.id===id)?(
                        <button className='off' onClick={()=>dispatch(removeCart(id))}>주문취소</button>)
                        : (<button onClick={()=>dispatch(addCart(item))}>ADD TO CART</button>)
                    }
               
                
            </p>
        </article>
    );
    
};

export default ProductItem;
