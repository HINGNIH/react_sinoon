import styled from 'styled-components';

export const LoginWrap = styled.div`
        /* margin: 0px; */
    .inner {
        padding: 180px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height:auto;
        margin-bottom: 100px;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }
    p {
        align-items:center;
        margin-bottom: 20px;
        display: flex;
        label {
            display: block;
            width: 80px;
        }
        input[type='email'],
        input[type='password'] {
            margin-top: 5px;
            width: 250px;
            box-sizing: border-box;
            height: 45px;
            padding: 0 10px;
            outline:none;
            border : none;
            border-bottom: 1px solid #999;
        }
       
            span {
            /* display: flex;
            flex-direction: column; */
            font-size: 14px;
            color:#999;
            margin-bottom: 5px;
            margin-right: 20px;
        }
        }
        

        &:last-child {
            /* margin-top: 50px; */
            button {
                width: 250px;
                height: 60px;
                background: #000;
                color: #fff;
                border: none;
                cursor: pointer;
                 justify-content: center;
        }
            }
        
        .btn {justify-content: center; }
           
    
`;

export const LogoutWrap = styled.div`
    .inner {
        padding: 180px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin: 50px 0;
    }
    h3 {
        margin-bottom: 30px;
        font-size: 25px;
        font-weight: 700;
        span {
            color: tomato;
        }
    }
    p {
        margin-top: 50px;
        text-align: center;
        button {
            width: 250px;
            height: 60px;
            background: #000;
            color: #fff;
            border: none;
            cursor: pointer;
        }
    }
`;

export const JoinWrap = styled.div`
    .inner {
        padding: 180px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px ;
    }
    p {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        label {
            display: block;
            width: 80px;
        }
        input[type='email'],
        input[type='password'],
        input[type='tel'],
        input[type='text'] {
            margin-top: 5px;
            width: 350px;
            box-sizing: border-box;
            height: 45px;
            padding: 0 10px;
            outline:none;
            border : none;
            border-bottom: 1px solid #999;
            &:focus {
            background-color: #f4f4f4;  
        }
        }
        
        &:last-child {
            display: flex;
            justify-content:space-between;
            margin-top: 50px;
            text-align: center;
            button {
                width: 200px;
                height: 60px;
                background: #000;
                color: #fff;
                border: none;
                cursor: pointer;
                /* margin-left: 10px; */
            }
        }
    }
`;
