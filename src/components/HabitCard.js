import styled from "styled-components";
import trashcan from "../assets/Grouptrashcan.png"
import WEEKDAYS from "../constants/weekdays";
import HabitDay from "./HabitDay";

export default function HabitCard(){
    return (
        <Card data-test="habit-container" >
            <NameAndDel>
                <p data-test="habit-name">Texto do hábito</p>
                <img src={trashcan} alt="deletar" data-test="habit-delete-btn"/>
            </NameAndDel>
            <Days>
                {WEEKDAYS.map((day, i) => <HabitDay key={i} day={day}>{day}</HabitDay>)}
            </Days>
        </Card>
    )
}

const Card = styled.div`
width: 340px;
height: 91px;
border-radius: 5px;
background-color: #FFFFFF;
margin-top: 10px;
`
const NameAndDel = styled.div`
width: 100%;
padding: 13px 10px 8px 15px;
display: flex;
justify-content: space-between;
color: #666666;
img{
    width: 13px;
    height: 15px;
}
p{
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
}
`
const Days = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding-left: 18px;
    padding-right: 18px;
`