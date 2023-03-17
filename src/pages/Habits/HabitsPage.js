import styled from "styled-components";
import TopContainerPage from "../../components/TopContainerPage"
import MenuContainerPage from "../../components/MenuContainerPage";
import NoHabit from "./NoHabit";
import { useState } from "react";
import HabitForm from "./HabitForm";

export default function HabitsPage() {
    const [displayForm, setDisplayForm] = useState(false)
    return (
        <>
            <TopContainerPage />
            <HabitContainerPage>
                <TitleContainer>
                    <h2>Meus hábitos</h2>
                    <ButtonOptions data-test="habit-create-btn" onClick={() => setDisplayForm(true)}>+</ButtonOptions>
                </TitleContainer>
                <HabitForm displayForm={displayForm} setDisplayForm={setDisplayForm} />
                <NoHabit />
            </HabitContainerPage>
            <MenuContainerPage />
        </>
    )
}

const HabitContainerPage = styled.main`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #F2F2F2;
margin-top: 70px;
margin-bottom: 70px;
    h2{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 22px;
        color: #126BA5;
    }
`
const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 18px;
    padding-right: 18px;
    margin-top: 28px;
    margin-bottom: 10px;
`
const ButtonOptions = styled.button`
width: 40px;
height: 35px;
border: none;
border-radius: 5px;
background-color: #52B6FF;
text-align: center;
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 27px;
color: #FFFFFF;
`