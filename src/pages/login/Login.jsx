import { useNavigate } from 'react-router-dom';
import { LoginWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {login} from '../../store/modules/authSlice'
import { toast, ToastContainer } from 'react-toastify'; // toast 임포트
import 'react-toastify/dist/ReactToastify.css';  // 스타일 임포트

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({email:'', password:''})
    const {email, password} = user;

     // Redux에서 로그인된 사용자 정보 가져오기
     const loggedInUser = useSelector((state) => state.auth.user); // 로그인된 유저 정보

    const changeInput=(e)=>{
        const {value, name} = e.target;
        setUser({
            ...user, 
            [name]:value
        })
    }
    const onSubmit=(e)=>{
        // e.preventDefault();
        // if(!email || !password) return;
        // dispatch(login(user));
        // setUser({email:'', password:''})//초기화
        // navigate('/')

        e.preventDefault();
        if (!email || !password) return;

         // 로그인 시 사용자 정보 가져오기
         dispatch(login(user)); // 로그인 액션
         if (loggedInUser && loggedInUser.username) {
            toast(`${loggedInUser.username}님 반갑습니다!`, {
                position: 'top-right',
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        
 
         // 입력값 초기화 및 메인 페이지로 리다이렉트
         setUser({ email: '', password: '' });
         navigate('/');
    }
    // const test=()=>{
    //     toast('사용자정의내용', {
    //         position:'top-rigth',
    //         autoClose : 500, 
    //         hideProgressBar : false,
    //         closeOnClick:true, 
    //         pauseOnHover: true, 
    //         draggable:true, 
    //         progress : undefined,
    //     })
    //}
    return (
       
         <LoginWrap>
            <div className='inner'>
            <h2>Login </h2>
                <form onSubmit={onSubmit}>
                    <p>
                        <label>이메일 </label>
                        <input type='email' name='email' value={email} placeholder='로그인정보:abc@naver.com' onChange={changeInput}/>
                    </p>
                    <p>
                        <label>비밀번호 </label>
                        <input type='password' name='password' value={password} placeholder='로그인정보:a1234'  onChange={changeInput}/>
                    </p>
                    <p>
                        <span>테스트 이메일: abc@naver.com </span>
                        <span>테스트 비밀번호 : a1234</span>
                    </p>
                    <p className='btn'>
                        <button type='submit'>로그인</button>
                    </p>
                </form>
            </div>
            <ToastContainer />
        </LoginWrap>
        
       
    );
};

export default Login;
