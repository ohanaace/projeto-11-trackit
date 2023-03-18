import styled from "styled-components";

export default function HabitDay({day, index, days}) {
//
        return (
        <DayButton data-test="habit-day" display={days.includes(index)}>
            {day}
        </DayButton>
    )
}

const DayButton = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    background-color:${(props) => props.display? "#CFCFCF" : "#FFFFFF"};
    color: ${(props) => props.display? "#FFFFFF" : "#CFCFCF"};
    padding: 8px;
    margin: 4px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    display: flex;
    align-items: center;
`