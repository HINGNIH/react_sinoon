import CartList from '../../components/cart/CartList';
import { CartWrap } from './style';
import CartEmpty from '../../components/cart/CartEmpty';
import { useSelector } from 'react-redux';

const Cart = () => {
    const {carts} = useSelector((state)=>state.cart)
    if(carts.length==0) return <CartEmpty />
    if(carts.length>0) return  <CartList />
    
    return (
        <CartWrap className='cart-box'>
            <div className='inner'>
                {/* <CartList />
                <CartEmpty /> */}
            </div>
        </CartWrap>
    );
};

export default Cart;
