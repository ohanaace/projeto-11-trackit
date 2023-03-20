import { useState } from "react";
import styled from "styled-components";
import check from "../../assets/Vectorcheckmark.png"

export default function TodayHabitCard({id, name, done, currentSequence, highestSequence}) {
    const [completed, setCompleted] = useState(false)
    return (
        <TodayCard data-test="today-habit-container">
            <div>
                <h3 data-test="today-habit-name" >
                    {name}
                </h3>
                <p data-test="today-habit-sequence" >
                    Sequência atual: {currentSequence} dias
                </p>
                <p data-test="today-habit-record" >
                    Seu recorde: {highestSequence} dias
                </p>

            </div>
            <CompleteCheck data-test="today-habit-check-btn" completed={completed} onClick={() => setCompleted(!completed)}>
                <img src={check} alt="checkmark"/>
            </CompleteCheck>
        </TodayCard>
    )
}

const TodayCard = styled.div`
width: 340px;
height: 94px;
background-color: #FFFFFF;
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
border-radius: 5px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 13px;
margin-bottom: 10px;
h3{
    font-size: 20px;
    color: #666666;
}
p{
    font-size: 12px;
    color: #666666;
}
`
const CompleteCheck = styled.div`
width: 69px;
height: 69px;
background-color: ${(props) => props.completed? "#8FC549" : "#EBEBEB"};
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #E7E7E7;
`