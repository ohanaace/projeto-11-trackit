import styled from "styled-components";
import TopContainerPage from "../../components/TopContainerPage"
import MenuContainerPage from "../../components/MenuContainerPage"

export default function HistoryPage() {
    return (
        <>
            <TopContainerPage />
            <HistoryContainer>
                <TitleContainer>
                    <h2>Histórico</h2>
                </TitleContainer>
                <HistoryWarning>
                    <p> Em breve, você poderá ver seu histórico aqui!</p>
                </HistoryWarning>
            </HistoryContainer>
            <MenuContainerPage />
        </>
    )
}

const HistoryContainer = styled.main`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #F2F2F2;
margin-top: 70px;
margin-bottom: 70px;`

const TitleContainer = styled.div`
width: 100%;
padding-left: 18px;
padding-right: 18px;
padding-bottom: 3px;
margin-top: 28px;
margin-bottom: 10px;
h2{
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 22px;
    color: #126BA5;
    }
`
const HistoryWarning = styled.div`
    width: 338px;
    margin-top: 28px;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`