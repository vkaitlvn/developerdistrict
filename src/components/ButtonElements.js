import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
    border-radius: 90px;
    background: ${({primary}) => (primary ? '#008ddf' : '#14232b')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '25px' : '22px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    text-decoration: none;
    margin-bottom: 30px;
    margin-top: 30px;

    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #8b4fc8;
        color: #fff;
    }

    @media screen and (max-width: 280px){
        font-size: 16px;
    }

    @media screen and (max-width: 320px){
        font-size: 16px;
    }

    @media screen and (max-width: 360px){
        font-size: 16px;
    }

    @media screen and (max-width: 375px){
        font-size: 18px;
        margin-top: 15px;
    }
`;