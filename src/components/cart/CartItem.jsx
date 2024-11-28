import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeCart, toggleSelectItem } from "../../store/modules/cartSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { HiMiniXMark } from "react-icons/hi2";
import { IoSquareOutline , IoCheckboxSharp} from "react-icons/io5";
const CartItem = ({item}) => {
    const {id, image, title, price, option, quantity, selected} = item;
    const dispatch=useDispatch();
    return (
        <article className="cartitemwrap">
            <div className="cartitem_left">
                <label className="selected-item">
                {/* <div className="check">{selected ? <RiCheckboxCircleFill /> :<RiCheckboxBlankCircleLine />}</div> */}
                <div className="check">{selected ? <IoCheckboxSharp /> :<IoSquareOutline />}</div>
                <input 
                type="checkbox" 
                name='select-item'
                onChange={()=>dispatch(toggleSelectItem(id))}
                checked={selected}/> 
                </label>
                
            <img src={image} alt={title} />
            <div className="product_info">
                <div className="titlewrap">
                <h3 className="product_title">{title}</h3>
                <h4>{option}</h4>
                </div>
            
                <div className="count">
                <p className="count_minus"onClick={() => dispatch(decreaseQuantity(id))}><AiOutlineMinus /></p>
                    <em>{quantity}</em>
                <p className="count_plus" onClick={() => dispatch(increaseQuantity(id))}><AiOutlinePlus /></p>
                </div>
                <span> ₩ {(price * quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
               
            </div>
            <button className="buy_now">바로구매</button>
            </div>
          
            <HiMiniXMark className='del' onClick={()=>dispatch(removeCart(id))}/>
        </article>
       
    );
};

export default CartItem;
