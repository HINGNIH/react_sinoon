import { useNavigate } from 'react-router-dom';
import { CartEmptyWrap } from './CartStyle';

const CartEmpty = () => {
    const navigate=useNavigate();
    return (
        <CartEmptyWrap>
            <div>
                <h2> 장바구니가 비었습니다.</h2>
                <p>
                    <button onClick={()=>navigate('/product')}> 쇼핑하러가기 </button>
                </p>
            </div>
        </CartEmptyWrap>
    );
};

export default CartEmpty;
