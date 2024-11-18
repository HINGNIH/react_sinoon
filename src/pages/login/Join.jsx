import { JoinWrap } from './style';
import Spinner from '../../components/Spinner';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../../store/modules/authSlice';
const Join = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSpinner, setIsSpinner]=useState(true)
    const [user, setUser] = useState({username:'', tel:'', email:'', password:''})
    const {username, tel, email, password} = user;

    const changeInput=(e)=>{
        const {value, name} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        if (!username || !email || !tel || !password) return;

        // 팝업 메시지로 확인
        const confirmNavigation = window.confirm("로그인 페이지로 이동합니다.");
        if (confirmNavigation) {
            dispatch(signup(user));
            setUser({ username: '', tel: '', email: '', password: '' }); // 초기화
            navigate('/login');
        }
        
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsSpinner(false);
        }, 600)
        return ()=>{
            clearTimeout(timer);
        }
    }, [])

    return (
        <>
            <Spinner />
            <JoinWrap>
                <div className='inner'>
                    <h2> Join </h2>
                    <form onSubmit={onSubmit}>
                        <p>
                            <label> 이름 </label>
                            <input type='text' placeholder='홍길동' name='username'  value={username} onChange={changeInput}  />
                        </p>
                        <p>
                            <label> 전화번호 </label>
                            <input type='tel' name='tel' placeholder='010-0000-0000' value={tel} onChange={changeInput}/>
                        </p>
                        <p>
                            <label>이메일 </label>
                            <input type='email' name='email' placeholder='abc@naver.com'  value={email} onChange={changeInput} />
                        </p>
                        <p>
                            <label>비밀번호 </label>
                            <input type='password' name='password' placeholder='a1234' value={password} onChange={changeInput} />
                        </p>
                        <p>
                            <button type='submit'>회원가입</button>
                            <button>취소</button>
                        </p>
                    </form>
                </div>
            </JoinWrap>
        </>
    );
};

export default Join;
