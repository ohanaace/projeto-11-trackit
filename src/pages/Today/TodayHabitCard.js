import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import check from "../../assets/Vectorcheckmark.png"
import { UserContext } from "../../context/AuthContext";
import BASE_URL from "../../constants/url";

export default function TodayHabitCard({ id, name, done, currentSequence, highestSequence, control, setControl }) {
    const [completed, setCompleted] = useState(false)
    const { userData, setUserData } = useContext(UserContext)
    const {todayHabits} = useContext(UserContext).userData
    const {progress} = useContext(UserContext).userData
    const config = { headers: { Authorization: `Bearer ${userData.token}` } }

    function calcProgress(){
        const completedTasks = todayHabits.filter((com) => com.done === true)
        console.log(completedTasks.length)
        let myProgress = (completedTasks.length / todayHabits.length) * 100
        console.log(myProgress)
        setUserData({...userData, progress: myProgress})
        setControl(!control)
    }
    
  async  function checkHabit(id) {
       await axios.post(`${BASE_URL}habits/${id}/check`, {}, config)
            .then((res) => {
                done = true
                console.log(res)
                console.log(userData)
                console.log("marcou como feito")
                calcProgress()
               
                
            })
            .catch(err =>{
                alert(err)
            })
    }
    function uncheckHabit(id) {
        axios.post(`${BASE_URL}habits/${id}/uncheck`, {}, config)
            .then((res) => {
                done = false
                console.log(res)
                console.log(userData)
                console.log("desmarcou hábito")
                calcProgress()
                setControl(!control)
            })
            .catch(err => {
                alert(err.status.code)
            })
    }

    function postHabit(id) {
        const toggleCheck = !done
        console.log(toggleCheck)
        setCompleted(toggleCheck)
        if (toggleCheck) {
            checkHabit(id)
        }
        else {
            uncheckHabit(id)
        }
    }
    return (
        <TodayCard data-test="today-habit-container">
            <div>
                <h3 data-test="today-habit-name" >
                    {name}
                </h3>
                <p>
                    Sequência atual: <span  data-test="today-habit-sequence" completed={done} > {currentSequence} dias </span>
                </p>
                <p>
                    Seu recorde: <span data-test="today-habit-record"> {highestSequence} dias </span>
                </p>

            </div>
            <CompleteCheck data-test="today-habit-check-btn" completed={done} onClick={() => postHabit(id)}>
                <img src={check} alt="checkmark" />
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
span{
    font-size: 12px;
    color: ${(props) => props.completed ? "#8FC549" : "#666666"};;
}
`
const CompleteCheck = styled.div`
width: 69px;
height: 69px;
background-color: ${(props) => props.completed ? "#8FC549" : "#EBEBEB"};
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #E7E7E7;
`