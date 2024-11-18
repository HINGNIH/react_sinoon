import { useDispatch } from 'react-redux';
import { ProductSearchWrap } from './ProductStyle';
import { useEffect, useRef, useState } from 'react';
import { resetCart, searchCart, sortCart } from '../../store/modules/cartSlice';

const ProductSearch = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('')
    const textRef = useRef();

    const onSubmit=(e)=>{
        e.preventDefault();
        dispatch(searchCart(text));
        textRef.current.focus();
    }
    const onSort = (e)=>{
        e.preventDefault();
        dispatch(sortCart(e.target.value))
    }

    useEffect(()=>{
        dispatch(resetCart());
        dispatch(searchCart(''));                                                                       
    }, [dispatch])
    return (
        <ProductSearchWrap>
            <form onSubmit={onSubmit}>
                <p>
                    <select onChange={onSort}>
                        <option value=''> 상품 정렬 </option>
                        <option value='title'>제품명</option>
                        <option value='price'>가격 낮은 순</option>
                        <option value='category'>카테고리</option>
                    </select>

                    <span onClick={()=>dispatch(resetCart())}>초기화</span>
                </p>

                <p className='searchWrap'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} type='submit'>
                <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <input type='text' name='제품명검색' id='' value={text} placeholder='제품명 검색' 
                onChange={(e)=>setText(e.target.value)} ref={textRef} //검색후 포커스 유지
                />
                    
                </p>
            </form>
        </ProductSearchWrap>
    );
};

export default ProductSearch;
