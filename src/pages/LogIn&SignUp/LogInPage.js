import styled from "styled-components";
import logo from "../../assets/Group 8TrackIt.png"
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import BASE_URL from "../../constants/url";
import { TokenContext, UserContext} from "../../context/AuthContext";
import { ThreeDots } from "react-loader-spinner";

export default function LogInPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const { setSavedToken } = useContext(TokenContext)
    const navigate = useNavigate()
    const {userData, setUserData} = useContext(UserContext)

    function logMeIn(e) {
        e.preventDefault()
        setLoading(true)

        const body = { email, password }
        const promise = axios.post(`${BASE_URL}auth/login`, body)
            promise.then(res => {
                console.log(res.data)
                const {name, image, email, password, token} = res.data
                setUserData({...userData, name, image, token})
                setSavedToken(true)
                navigate("/hoje")
                console.log(userData)
            })
            promise.catch(err => {
                alert(err.response.data.message)
                console.log(err.response.data)
                setLoading(false)
            }
            )
    }

    return (
        <PageContainer>
            <img src={logo} alt="Track It" />
            <FormContainer onSubmit={logMeIn}>

                <input
                    type={"email"}
                    placeholder="email"
                    name={email}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    data-test="email-input"
                    disabled={loading}
                    required
                />


                <input
                    type={"password"}
                    placeholder="senha"
                    name={password}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    data-test="password-input"
                    disabled={loading}
                    required

                />
                    <button type={"submit"} data-test="login-btn" disabled={loading}>
                        {loading? <ThreeDots type="ThreeDots" color={"#FFF"} height={50} width={50}/> : "Entrar"}
                    </button>
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
    display: flex;
    justify-content: center;
    align-items: center;
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

