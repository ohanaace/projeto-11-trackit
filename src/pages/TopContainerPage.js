import styled from "styled-components";

export default function TopContainerPage() {
    return (
        <TopContainer data-test="header">
            <h1>TrackIt</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2JeUFpuJjd-fSjMoKe8jyhw6CeNsfSlHkw&usqp=CAU" alt="foto-de-perfil"/>
        </TopContainer>
    )
}

const TopContainer = styled.header`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .15);
    position: fixed;
    top: 0;
   left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
    h1{
        font-family: 'Playball', sans-serif;
        font-weight: 400;
        font-size: 39px;
        line-height: 49px;
        color: #FFFFFF;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 99px;
    }
`