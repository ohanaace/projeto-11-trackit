import { useContext, useState } from "react";
import styled from "styled-components";
import WEEKDAYS from "../../constants/weekdays";
import WeekButton from "./WeekButton";
import HabitCard from "./HabitCard"
import axios from "axios";
import { UserContext } from "../../context/AuthContext";
import BASE_URL from "../../constants/url"
import { ThreeDots } from "react-loader-spinner";



export default function HabitForm({ displayForm, setDisplayForm }) {
    const {userData, setUserData} = useContext(UserContext)
    const [name, setName] = useState("")
    const [days, setDays] = useState([])
    const [loading, setLoading] = useState(false)
    function submitHabit(e) {
        e.preventDefault()
        setLoading(true)
        console.log(userData)
        const body = {name, days}
        const config = {headers: {Authorization: `Bearer ${userData.token}`}}
        const promise = axios.post(`${BASE_URL}habits`, body, config)
        promise.then(res => console.log(res.data))
        promise.catch(err => {
            console.log(err.response.data)
            alert(err.response.data.message)
            setName("")
            setLoading(false)
            setDays([])})
    }
    return (
        <AddHabit data-test="habit-create-container" displayForm={displayForm} onSubmit={submitHabit}>

            <input type={"text"}
                placeholder={"nome do hábito"}
                name={name}
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={loading}
                

            />
            <div>
                {WEEKDAYS.map((day, i) => (
                    <WeekButton disabled={loading} setDays={setDays} days={days} key={i} index={i} day={day} >{day}</WeekButton>))}
            </div>
            <HabitsActions>
                <CancelButton data-test="habit-create-cancel-btn" type={"button"} onClick={() => setDisplayForm(false)} disabled={loading}>Cancelar</CancelButton>
                <SaveButton data-test="habit-create-save-btn" type={"submit"}>
                {loading ? <ThreeDots type="ThreeDots" color={"#FFF"} height={50} width={50}/> : "Salvar"}
                    </SaveButton>
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
display: ${(props) => props.displayForm ? "flex" : "none"};
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
display: flex;
justify-content: center;
align-items: center;
`
const CancelButton = styled.button`
background-color: #FFFFFF;
color: #52B6FF;
`