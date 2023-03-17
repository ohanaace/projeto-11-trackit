import styled from "styled-components";

export default function HabitDay({day, index}) {

        return (
        <DayButton data-test="habit-day">
            {day}
        </DayButton>
    )
}

const DayButton = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    background-color: #FFFFFF;
    color: #D4D4D4;
    padding: 8px;
    margin: 4px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    display: flex;
    align-items: center;
`