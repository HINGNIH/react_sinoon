import { Link } from 'react-router-dom';
import { NavWrap, TopMenu } from './style';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const {carts, cartTotal} = useSelector(state=>state.cart)
    const authed = useSelector(state => state.auth.authed); // 로그인 상태 가져오기

    return (
        <>
            <NavWrap className='nav'>
                <ul>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/product'}>Product</Link>
                    </li>
                    <li>
                        <Link to={'/notice'}>Notice</Link>
                    </li>
                    <li>
                        <Link to={'/customer'}>Customer</Link>
                    </li>

                    
                </ul>
            </NavWrap>

            <TopMenu className='top-menu'>
               
                <li>
                    <Link to={'/join'}>Join</Link>
                </li>

                {authed ? (
                    <li>
                        <Link to={'/logout'}>Logout</Link>
                    </li>
                ) : (
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                )}

                <li>
                    <Link to='/cart'>
                    Cart <span> {carts.length} </span>
                    </Link>
                </li>
            </TopMenu>
        </>
    );
};

export default NavBar;
