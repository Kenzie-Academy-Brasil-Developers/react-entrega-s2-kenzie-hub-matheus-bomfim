import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 650px;
    margin: 10px;
    @media(max-width:400px) {
        gap: 90px;
        justify-content: flex-start;
        width: 600px;
    }
`

export const ButtonBackDash = styled.button`
    width: 67.49px;
    height: 40.11px;
    background: #212529;
    border-radius: 4px;
   text-align: center;
    color: #F8F9FA;
    cursor: pointer;
`

export const Article = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px;
    background: #121214;
    width: inherit;
    height: 118px;
    gap: 500px;

    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: #F8F9FA;
    }
    @media (max-width:400px){
        gap: 5px;
        width: inherit;
        margin: 0px;
        flex-direction: column;
        align-items: center;
        h2{
            font-size: 25px;
        }
    }
`

export const Para = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868E96;
    @media (max-width:320px) {
        font-size: 17px;
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width:400px){
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`
export const DivInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 650px;

    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
        color: #F8F9FA;
    }

    button{
        background: #212529;
        border-radius: 4px;
        width: 32.49px;
        height: 32px;
        color: #FFFFFF;
        font-size: 20px;
        cursor: pointer;
    }
    @media(max-width:400px) {
        gap: 180px;
        width: 300px;
        align-items: center;
        margin: 5px;
    }
`

export const UlItems = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 800px;
    height: 450px;
    background: #212529;
    border-radius: 4px;
    max-width: 800px;
    overflow: auto;

    @media (max-width:400px){
        align-items: center;
        width: 350px;
        margin-right: 30px;
    }
    h2{
        color: white;
    }
`

export const Items = styled.li`
    width: 732px;
    height: 54px;
    background: #121214;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px;
    gap: 300px;
    cursor: pointer;
    
    h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14.21px;
        line-height: 22px;
        color: #FFFFFF;
    }

    span{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12.182px;
        line-height: 22px;
        color: #868E96;
        margin: 30px;
    }
    .trash{
        cursor: pointer;
    }
    div{
    }
    @media (max-width:400px) {
        width: 300px;
        gap: 0px;
        margin-right: 45px;
    }
    .edit{
        display: none;
    }
    :hover{
        .edit{
            display: inline;
        }
    }
`

export const ContainerAddOrEdit = styled.div`
    display: ${ props => props.dis === false ? "none" : "flex"};
    flex-direction: column;
    position: fixed;
    margin-bottom: 280px;
    align-items: center;
    width: 369px;
    height: 342px;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`

export const HeaderAddOrEdit = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 369px;
    height: 50px;
    background: #343B41;
    border-radius: 4px 4px 0px 0px;
    gap: 160px;
    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        color: #F8F9FA;
    }
    button{
        width: 11px;
        background: none;
        border: none;
        height: 26px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        color: #868E96;
        cursor: pointer;
    }

`
export const FormAdd = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    div{
        height: 70px;
        margin: 12px;
    }
    select{
        width: 329.93px;
        height: 48px;
        background: #343B41;
        border: 1.2182px solid #F8F9FA;
        border-radius: 4px;
        color: #F8F9FA;
    }
    .buttons{
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    button{
        width: 324px;
        height: 48px;
        background: #FF577F;
        border: 1.2182px solid #FF577F;
        border-radius: 4.06066px;
        color: #F8F9FA;
        margin:5px;
        cursor: pointer;
    }

    .saveSubmit{
        width: 204px;
        height: 48px;
        background: #59323F;
        border: 1.2182px solid #59323F;
        border-radius: 4px;
        color: #FFFFFF;
    }
    .trash{
        width: 51px;
        height: 27px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #FFFFFF;
        width: 78px;
        height: 47px;
        background: #868E96;
        border: 1.2182px solid #868E96 ;
    }
    span{
        color: #F8F9FA;
    }

    h3{
        color: #F8F9FA;
    }
`