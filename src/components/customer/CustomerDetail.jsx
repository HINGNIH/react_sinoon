import { useNavigate, useParams } from 'react-router-dom';
import { CustomerDetailWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { del, edit } from '../../store/modules/customerSlice';

const CustomerDetail = () => {
    const {customerID} = useParams();
    const {customerData} = useSelector((state)=>state.customer)
    const newItem = customerData.find(item=>item.id===Number(customerID))
    const {id, name, title, content, date} = newItem;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onEdit = () => {
        dispatch(edit(newItem))
        navigate(`/customer/customeredit`)
    };
    const onDel = () => {
        dispatch(del(id));
        navigate('/customer');
    };
    return (
        <CustomerDetailWrap>
            <div className='inner'>
                <h2> 문의 글 </h2>
                <div className='con'>
                    <h3>{id}번 {title}</h3>

                    <p className='name'> {name} </p>
                    <p className='txt'> {content} </p>
                    <p className='date'> {date} </p>
                </div>

                <p>
                    <button onClick={()=>navigate(-1)}>목록으로</button>
                    <button onClick={()=>dispatch(onEdit())}>수정하기</button>
                    <button onClick={()=>dispatch(onDel(id))}>삭제하기</button>
                </p>
            </div>
        </CustomerDetailWrap>
    );
};

export default CustomerDetail;
