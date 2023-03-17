import { useState } from "react";
import styled from "styled-components";

export default function WeekButton({day, index}) {
        function selectDay(){
            setIsSelected(!isSelected)
        }
        const [isSelected, setIsSelected] = useState(false)
        return (
        <DayButton data-test="habit-day" onClick={selectDay}  isSelected={isSelected}>
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