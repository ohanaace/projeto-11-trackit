import { useState } from "react";
import styled from "styled-components";
import WEEKDAYS from "../../constants/weekdays";
import WeekButton from "./WeekButton";
import HabitCard from "./HabitCard"

export default function HabitForm({displayForm, setDisplayForm}) {
    function submitHabit(e){
        e.preventDefault()
    }
    return (
        <AddHabit data-test="habit-create-container" displayForm={displayForm} onSubmit={submitHabit}>

            <input type={"text"} placeholder={"nome do hábito"} />
            <div>
                {WEEKDAYS.map((day, i) => (
                    <WeekButton key={i} day={day} >{day}</WeekButton>))}
            </div>
            <HabitsActions>
                <CancelButton data-test="habit-create-cancel-btn" onClick={() => setDisplayForm(false)}>Cancelar</CancelButton>
                <SaveButton data-test="habit-create-save-btn" type={"submit"}>Salvar</SaveButton>
            </HabitsActions>
            {/* <HabitCard /> */}
        </AddHabit>
    )
}

const AddHabit = styled.form`
width: 340px;
height: 180px;
border-radius: 5px;
background-color: #FFFFFF;
margin-top: 20px;
display: ${(props) => props.displayForm? "flex" : "none"};
flex-direction: column;
align-items: center;
div{
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 18px;
    padding-right: 18px;

}
input {
    width: 303px;
    height: 45px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin: 6px;
    line-height: 25px;
    padding-left: 11px;
    margin-top: 18px;
    ::placeholder{
        color: #DBDBDB;
    }
}
`
const HabitsActions = styled.div`
width: 176px;
display: flex;
justify-content: flex-end;
margin-top: 28px;
button{
    width: 84px;
    height: 35px;
    border: none;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 10px;
}
`
const SaveButton = styled.button`
background-color: #52B6FF;
color: #FFFFFF;
`
const CancelButton = styled.button`
background-color: #FFFFFF;
color: #52B6FF;
`