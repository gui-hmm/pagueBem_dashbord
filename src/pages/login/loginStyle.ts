import styled from "styled-components";
import { NavLink } from "react-router";

export const Container = styled.div`
    background-color: white;
    border-radius: 25px;
    width: 85%;
    height: 75%;
    display: flex;
    flex-direction: row;
    text-align: center;
`;

export const LogoContainer = styled.div`
    width: 35%;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ECF5EC;
`;

export const LoginLogo = styled.img`
     width: 75%;
     margin-bottom: 20px;
`;

export const Text1 = styled.div`
    color: #578F47;
    font-size: 32px;
    font-weight: 600;
    margin: 30px 0 50px 0;
`;

export const Text2 = styled.div`
    color: #578F47;
    font-size: 18px;
    font-weight: 200;
    width: 80%;
`;

export const LoginContainer = styled.div`
    width: 65%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TitleLogin = styled.h2`
    margin-bottom: 20px;
    font-size: 34px;
    color: #7f7f7f;
    font-weight: 200;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const InputGroup = styled.div`
    width: 75%;
`;

export const Inputs = styled.input`
    width: 90%;
    height: 40px;
    margin: 20px;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #efefef;

    &:focus {
        outline: none;
        border-color: #578F47;
    }

    &::placeholder{
        padding-left: 15px;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    margin-bottom: 10px;
`;

export const ButtonLogin = styled.button`
    width: 200px;
    height: 60px;
    padding: 10px;
    font-size: 16px;
    color: white;
    font-size: 24px;
    font-weight: bolder;
    background-color: #578F47;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover{
        background-color: #4b6942;
    }
`;

export const Text4 = styled.div`
    margin: 20px 0 20px 0;
    font-size: 18px;
    font-weight: lighter;
    color: #578F47;
    cursor: pointer;
    
    &:hover{
        color: #4b6942;
    }
`;

export const ContainerText5 = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
    font-weight: lighter;
    font-size: 19px;
`;

export const Text5 = styled.div`
    font-weight: lighter;
    margin-right: 6px;
`;

export const Text6 = styled(NavLink)`
    color: #578F47;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: #4b6942;
    }
`;