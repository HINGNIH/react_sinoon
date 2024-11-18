import { ProductListWrap } from './ProductStyle';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';

const ProductList = () => {
    const{products} = useSelector((state)=>state.cart)
    return (
        <ProductListWrap className='cart-box'>
            {
                products.map((item)=> <ProductItem key={item.id} item={item}/>)
            }
           
        </ProductListWrap>
    );
};

export default ProductList;
