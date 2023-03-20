import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import WEEKDAYS from "../../constants/weekdays";
import WeekButton from "./WeekButton";
import axios from "axios";
import { UserContext } from "../../context/AuthContext";
import BASE_URL from "../../constants/url"
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";



export default function HabitForm({ displayForm, setDisplayForm, setCreatedHabits }) {
    const { userData, setUserData } = useContext(UserContext)
    const { habits } = useContext(UserContext).userData;
    const config = { headers: { Authorization: `Bearer ${userData.token}` } }
    const [name, setName] = useState("")
    const [days, setDays] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {

        async function fetchHabits(){
            const promise = await axios.get(`${BASE_URL}habits`, config)
            try {
                setCreatedHabits(promise.data)
                console.log(promise.data)
            } catch (error) {
                alert(error.response.data)
                navigate("/")
            }
        }
        fetchHabits()
    }, [userData.habits])

    function submitHabit(e) {
        e.preventDefault()
        setLoading(true)
        console.log(userData)
        const body = { name, days }
        const promise = axios.post(`${BASE_URL}habits`, body, config)
        promise.then(res => {
            console.log(res.data)
            const {id, name, days}  = res.data
            setLoading(false)
            setName("")
            setDays([])
            setUserData({ ...userData, habits: [...habits, {id, name, days}] })
            setDisplayForm(false)
            console.log(userData)
        }
        )

        promise.catch(err => {
            console.log(err.response.data)
            alert(err.response.data.message)
            setName("")
            setLoading(false)
            setDays([])
        })
        console.log(userData.habits)
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
                <SaveButton data-test="habit-create-save-btn" type={"submit"} disabled={loading}>
                    {loading ? <ThreeDots type="ThreeDots" color={"#FFF"} height={50} width={50} /> : "Salvar"}
                </SaveButton>
            </HabitsActions>
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