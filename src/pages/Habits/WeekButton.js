import { useState } from "react";
import styled from "styled-components";


export default function WeekButton({day, index, setDays, days, disabled}) {
    const [isSelected, setIsSelected] = useState(false)
        function selectDay(){
            const selectedDay = !isSelected
            setIsSelected(selectedDay)
            if(selectedDay){
                const newHabitDays = [...days, index]
                setDays(newHabitDays)
            }else{
                const copyDayList = [...days]
                const updatedDayList = copyDayList.filter((id => id !== index))
                setDays(updatedDayList)
            }
        }
        return (
        <DayButton type={"button"} data-test="habit-day" onClick={selectDay}  isSelected={days.includes(index)} disabled={disabled} >
            {day}
        </DayButton>
    )
}

const DayButton = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    background-color: ${(props) =>props.isSelected ? "#D4D4D4" : "#FFFFFF"};
    color: ${(props) =>props.isSelected ? "#FFFFFF" : "#D4D4D4"};
    padding: 8px;
    margin: 4px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    display: flex;
    align-items: center;
`