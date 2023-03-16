import styled from "styled-components";
import logo from "../assets/Group 8TrackIt.png"
import { Link } from "react-router-dom";

export default function LogInPage() {
    //adicionar o atributo required dos inputs quando fizer a lógica

    return (
        <PageContainer>
            <img src={logo} alt="Track It" />
            <FormContainer>

                <input
                    type={"email"}
                    placeholder="email"
                    data-test="email-input"
                />


                <input
                    type={"password"}
                    placeholder="senha"
                    data-test="password-input"

                />
                <Link to={"/hoje"}>
                    <button data-test="login-btn"> Entrar</button>
                </Link>
            </FormContainer>
            <Link to={"/cadastro"}>
                <LinkHook data-test="signup-link">Não tem uma conta? Cadastre-se!</LinkHook>
            </Link>
        </PageContainer>
    )
}

const PageContainer = styled.div`
width: 100%;
height: 667px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFF;
img{
    width: 180px;
    height: 179px;
    margin-top: 68px;
    margin-bottom: 32px;
}
`
const FormContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
input{
    width: 100%;
    height: 45px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin: 6px;
    line-height: 25px;
    padding-left: 11px;
    ::placeholder{
        color: #DBDBDB;
    }
}
button{
    width: 300px;
    height: 45px;
    border: none;
    border-radius: 5px;
    background-color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
}
`
const LinkHook = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    text-decoration: underline;
    margin-top: 25px;
    color: #52B6FF;
`

