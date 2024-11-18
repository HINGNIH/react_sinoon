import { CustomerLIstWrap } from './style';
import CustomerItem from './CustomerItem';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { addData } from '../../store/modules/pagenationSlice';

const CustomerLIst = () => {
    const {customerData} = useSelector((state)=>state.customer)
    const {currPage, postsPerPage, pageData} = useSelector(state=>state.pagenation)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const lastPost = currPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const currentsPosts = pageData.slice(firstPost, lastPost);
    
    useEffect(()=>{
        dispatch(addData(customerData))
    }, [customerData])
    return (
        <CustomerLIstWrap>
            <p>
                <button onClick={()=>navigate('./customeradd')}>문의하기</button>
            </p>
            <table className='customerTable'>
                <caption>고객문의게시판</caption>
                
                <colgroup>
                    <col className='num' />
                    <col className='title' />
                    <col className='name' />
                    <col className='date' />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                {currentsPosts.map((item)=><CustomerItem key={item.id} item={item} />)}
                </tbody>
            </table>
            
        </CustomerLIstWrap>
    );
};

export default CustomerLIst;
