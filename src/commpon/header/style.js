import styled from 'styled-components';

export const HeaderWrap = styled.header`
    .inner {
        height: 80px;
        width: 100%;
        position: fixed;
        border-bottom: 1px solid #dcdcdc;
        background-color: white;
        z-index:100;
    }
    h1 {
        position: absolute;
        left: 48%;
        top: 50%;
        transform: translateY(-50%);
        a {
            img {
                width: 90px;
            }
        }
    }
    .login {
        position: absolute;
        right: 150px;
        top: 10px;
        color: blue;
    }
`;

export const NavWrap = styled.nav`
    &.nav {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        ul {
            display: flex;
            li {
                margin-left: 50px;
                position: relative;
                a {
                    font-size: 18px;
                    font-weight: 500;
                    transition: 0.3s;
                    &:hover {
                        color: tomato;
                    }
                }
                &:last-child span {
                    font-size: 16px;
                    border-radius: 50%;
                    display: block;
                    position: absolute;
                    right: -20px;
                    top: -5px;
                    width: 20px;
                    height: 20px;
                    background-color: #000;
                    color: #fff;
                    text-align: center;
                    line-height: 20px;
                }
            }
        }
    }
`;

export const TopMenu = styled.ul`

    &.top-menu {
        position: absolute;
        right:0;
        top: 30px;
        display: flex;
        li {
            margin-left: 25px;
            a {
                    font-size: 16px;
                    font-weight: 500;
                    transition: 0.3s;
                    &:hover {
                        color: tomato;
                    }
                }
                &:last-child span {
                    font-size: 16px;
                    border-radius: 50%;
                    display: block;
                    position: absolute;
                    right: -20px;
                    top: -7px;
                    width: 20px;
                    height: 20px;
                    background-color: #000;
                    color: #fff;
                    text-align: center;
                    line-height: 18px;
                }
        }
        margin-right: 50px;
    }
`;
