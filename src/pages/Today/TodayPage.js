import styled from "styled-components";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import TopContainerPage from "../../components/TopContainerPage"
import MenuContainerPage from "../../components/MenuContainerPage"
import TodayHabitCard from "./TodayHabitCard";

export default function TodayPage() {
    dayjs.locale('pt-br')
    const day = dayjs()
    const today = day.format('dddd').split("-")[0]
    const capitalToday = today.charAt(0).toUpperCase() + today.slice(1)
    return (
        <>
            <TopContainerPage />
            <TodayHabit>
                <TitleContainer>
                    <h2 data-test="today">
                        {capitalToday}, {day.format('DD/MM')}
                    </h2>
                    <p data-test="today-counter">
                        Nenhum hábito concluído ainda
                    </p>
                </TitleContainer>
                <TodayHabitCard></TodayHabitCard>
            </TodayHabit>
            <MenuContainerPage />
        </>
    )
}
const TodayHabit = styled.main`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #F2F2F2;
margin-top: 70px;
margin-bottom: 70px;
`
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
p{
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #BABABA;
}
`