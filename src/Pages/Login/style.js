import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: inherit;
`

export const FormLogin = styled.form`
    width: 370px;
    height: 500px;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #F8F9FA;
    }
    span{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: #868E96;
    }
    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        color: #868E96;
        height: 87px;
        margin: -44px;
    }

    div{
        height: 120px;
    }

    h5{
        color:#868E96
    }
`

export const ButtonLogin = styled.button`
    width: 324px;
    height: 48px;
    background: #FF577F;
    border: 1.2182px solid #FF577F;
    border-radius: 4.06066px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
    cursor: pointer;
`
export const ButtonRegister = styled.button`
    width: 324px;
    height: 48px;
    background: #868E96;
    border: 1.2182px solid #868E96;
    border-radius: 4.06066px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
    cursor: pointer;
`