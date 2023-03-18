import { useContext } from "react";
import styled from "styled-components";
import trashcan from "../../assets/Grouptrashcan.png"
import WEEKDAYS from "../../constants/weekdays";
import { UserContext } from "../../context/AuthContext";
import HabitDay from "./HabitDay";
import BASE_URL from "../../constants/url"
import axios from "axios";

export default function HabitCard({id, name, days}){
    const {userData, setUserData} = useContext(UserContext)
    const config = { headers: { Authorization: `Bearer ${userData.token}` } }
    function deleteHabit(id){
        const confirmDelete = window.confirm(`Tem certeza de que deseja excluir o hábito ${name}?`)
        if(confirmDelete){
            const promise = axios.delete(`${BASE_URL}habits/${id}`, config)
        promise.then(res => {
            console.log("Hábito excluído")
            const newHabits = userData.habits.filter((hab) => hab !== userData.habits.id)
            setUserData({...userData, habits: newHabits})
        })
        promise.catch(err => {
            alert("Houve um erro na exclusão do hábito")
            console.log(err.response.data)
        })
        }
        
    }

    return (
        <Card data-test="habit-container" >
            <NameAndDel>
                <p data-test="habit-name">{name}</p>
                <img src={trashcan} alt="deletar" onClick={() => deleteHabit(id)} data-test="habit-delete-btn"/>
            </NameAndDel>
            <Days>
                {WEEKDAYS.map((day, i) => <HabitDay days={days} key={i} index={i} day={day}>{day}</HabitDay>)}
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