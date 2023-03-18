import styled from "styled-components";
import logo from "../../assets/Group 8TrackIt.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BASE_URL from "../../constants/url"
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function SignUpPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [photoURL, setPhotoURL] = useState("")
    const [username, setUsername] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function signMeUp(e) {
        e.preventDefault()
        setLoading(true)
        const body = { email, name: username, image: photoURL, password }
        const promise = axios.post(`${BASE_URL}/auth/sign-up`, body)
        promise.then(res => {
            console.log(res.data)
            navigate("/")   
        })
        promise.catch(err => {
            alert(err.response.data.details)
            console.log(err.response.data)
            setLoading(false)
        }
        )
    }

    return (
        <PageContainer>
            <img src={logo} alt="Track It" />
            <FormContainer onSubmit={signMeUp}>

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
                <input
                    type={"text"}
                    placeholder="nome"
                    name={username}
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    data-test="user-name-input"
                    disabled={loading}
                    required
                />


                <input
                    type={"url"}
                    placeholder="foto"
                    name={photoURL}
                    value={photoURL}
                    onChange={e => setPhotoURL(e.target.value)}
                    data-test="user-image-input"
                    disabled={loading}
                    required

                />
                <button data-test="signup-btn" disabled={loading}>
                    {loading ? <ThreeDots type="ThreeDots" color={"#FFF"} height={50} width={50}/> : "Cadastrar"}
                </button>
            </FormContainer>
            <Link to={"/"}>
                <LinkHook data-test="login-link">Já tem uma conta? Faça login!</LinkHook>
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
    width: 100%;
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