import styled from "styled-components";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import TopContainerPage from "../../components/TopContainerPage"
import MenuContainerPage from "../../components/MenuContainerPage"
import TodayHabitCard from "./TodayHabitCard";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/AuthContext";
import axios from "axios";
import BASE_URL from "../../constants/url"
export default function TodayPage() {
    const { userData, setUserData } = useContext(UserContext)
    const { todayHabits } = useContext(UserContext).userData;
    const config = { headers: { Authorization: `Bearer ${userData.token}` } }
    dayjs.locale('pt-br')
    const day = dayjs()
    const today = day.format('dddd').split("-")[0]
    const capitalToday = today.charAt(0).toUpperCase() + today.slice(1)
    const [control, setControl] = useState(false)
    useEffect(() => {
        async function fetchDayHabits() {
            const promise = await axios.get(`${BASE_URL}habits/today`, config)
            try {
                console.log(promise.data)
                const doneHabits = promise.data.filter((com) => com.done === true)
                let myProgress = (doneHabits.length / todayHabits.length) * 100;
                setUserData({ ...userData, todayHabits: promise.data, progress: myProgress })
            } catch (error) {
                console.log(error.response.data)
            }
        }
        fetchDayHabits()
    }, [control, userData.progress])
    return (
        <>
            <TopContainerPage />
            <TodayHabit>
                <TitleContainer>
                    <h2 data-test="today">
                        {capitalToday}, {day.format('DD/MM')}
                    </h2>
                    <p data-test="today-counter" color={userData.progress !== 0} >
                        {userData.progress !== 0 ? `${userData.progress}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}
                    </p>
                </TitleContainer>
                {todayHabits.map((habit) => <TodayHabitCard key={habit.id} control={control} setControl={setControl} id={habit.id} name={habit.name} done={habit.done} currentSequence={habit.currentSequence} highestSequence={habit.highestSequence} />)}
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
    color: ${(props) => props.color ? "#8FC549" : "#BABABA"};
}
`