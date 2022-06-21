import styled from "styled-components";

export const ButtonBack = styled.button`
    width: 67.49px;
    height: 40.11px;
    background: #212529;
    border-radius: 4px;
   text-align: center;
    color: #F8F9FA;
    cursor: pointer;
`
export const ContainerStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: inherit;

div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 130px;
    height: 70px;
    margin: 5px;
    
}
`
export const Form = styled.form`
    width: 370px;
    height: 899.19px;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
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

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin: 10px;
    }

    select{
        width: 329.93px;
        height: 40px;
        background: #343B41;
        border: 1.2182px solid #343B41;
        border-radius: 4px;
        color: #868E96;
    }
    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        color: #868E96;
        margin: -10px;
    }
`

export const ButtonSubmit = styled.button`
width: 326px;
height: 48px;
background: #59323F;
border: 1.2182px solid #59323F;
border-radius: 4px;
cursor: pointer;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
color: #FFFFFF;
`