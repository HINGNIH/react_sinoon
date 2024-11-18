import styled from 'styled-components';

export const PaginationWrap = styled.div`
    div {
        margin-top: 30px;
        text-align: center;
        button {
            width: 30px;
            height: 30px;
            margin-right: 5px;
            background: #fff;
            &:first-child {
                border: none;
            }
            &:last-child {
                border: none;
            }
            &.on {
                border-color: #FAAB88;
                background: #FAAB88;
                border-radius: 30px;
                color: #fff;
            }
        }
    }
`;
