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
    const {userData, setUserData} = useContext(UserContext)
    const { todayHabits } = useContext(UserContext).userData;
    const config = { headers: { Authorization: `Bearer ${userData.token}` } }
    dayjs.locale('pt-br')
    const day = dayjs()
    const today = day.format('dddd').split("-")[0]
    const capitalToday = today.charAt(0).toUpperCase() + today.slice(1)
    useEffect(()=> {
        async function fetchDayHabits() {
            const promise = await axios.get(`${BASE_URL}habits/today`, config)
            try {
                console.log(promise.data)
                setUserData({...userData, todayHabits: promise.data})
            } catch (error) {
                console.log(error.response.data)
            }
        }
        fetchDayHabits()
    }, [])
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
                {todayHabits.map((habit) => <TodayHabitCard key={habit.id} id={habit.id} name={habit.name} done={habit.done} currentSequence={habit.currentSequence} highestSequence={habit.highestSequence}/>) }
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