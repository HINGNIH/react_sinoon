import { useDispatch, useSelector } from 'react-redux';
import { LogoutWrap } from './style';
import { useState } from 'react';
import { logout } from '../../store/modules/authSlice';

const Logout = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [isLoggedOut, setIsLoggedOut] = useState(false); // 로그아웃 상태 관리

    const handleLogout = () => {
        dispatch(logout());  // 로그아웃 액션 호출
        setIsLoggedOut(true); // 로그아웃 상태로 변경
    };

    return (
        <LogoutWrap>
            <div className='inner'>
                <>
                   
                     {/* 유저가 있을 때 이름을 출력
                <h2>{user ? `${user.username}님 방문해 주셔서 감사합니다.` : '방문해 주셔서 감사합니다.'}</h2>
                <p>
                <button>로그아웃하기</button>
                </p> */}
                {!isLoggedOut ? (
                    <>
                        <h2>{user ? `${user.username}님 방문해 주셔서 감사합니다.` : '방문해 주셔서 감사합니다.'}</h2>
                        <p>
                            <button onClick={handleLogout}>로그아웃하기</button>
                        </p>
                    </>
                ) : (
                    <h2>로그아웃되었습니다.</h2> // 로그아웃 후 메시지 표시
                )}
                </>
            </div>
        </LogoutWrap>
    );
};

export default Logout;
