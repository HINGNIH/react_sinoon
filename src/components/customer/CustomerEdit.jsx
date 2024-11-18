import { useState } from 'react';
import { update } from '../../store/modules/customerSlice';
import { CustomerAddWrap } from './style';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CustomerEdit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {current} = useSelector((state)=>state.customer);
    const [user, setUser]=useState(current);
    const {name, title, content, date} = user;
    const [now, setNow] = useState(new Date());

    const changeInput=(e)=>{
        const {value, name} = e.target;
        setUser({
            ...user,
            [name]:value
        })
        
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        if(!title ||!name ||!content) return;
        // 날짜를 'YYYY-MM-DD' 형식으로 저장
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 월 두 자릿수로
        const day = now.getDate().toString().padStart(2, '0'); // 일 두 자릿수로
        user.date = `${year}-${month}-${day}`;

        // Redux에 수정된 데이터 저장
        dispatch(update(user));
        // 고객 문의 목록으로 이동
        navigate('/customer');
      

    }
    const onCancel=(e)=>{
        e.preventDefault();
        navigate('/customer');
    }
    return (
        <CustomerAddWrap>
            <div className='inner'>
                <h2> 고객문의수정 </h2>
                <form className='customer-add' onSubmit={onSubmit}>
                    <p>
                        <input type='text' placeholder='제목' name='title' value={title} onChange={changeInput} />
                    </p>
                    <p>
                        <input type='text' placeholder='작성자' name='name' value={name} onChange={changeInput} />
                    </p>
                    <p>
                        <textarea
                            cols='100'
                            rows='10'
                            placeholder='문의하기'
                            name='content'
                            value={content} onChange={changeInput}
                        ></textarea>
                    </p>
                    <p>
                        <button onClick={()=>navigate('/customer')}>목록으로</button>
                        <button type='submit'>저장하기</button>
                        <button onClick={onCancel}>취소하기</button>
                    </p>
                </form>
            </div>
        </CustomerAddWrap>
    );
};

export default CustomerEdit;
