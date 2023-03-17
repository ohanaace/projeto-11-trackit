import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Link } from "react-router-dom";

import styled from "styled-components";

export default function MenuContainerPage() {
    return (
        <MenuContainer data-test="menu">
            <Link to={"/habitos"}>
            <button data-test="habit-link" >Hábitos</button>
            </Link>
            <ProgressBarContainer>
                <CircularProgressbarWithChildren
                    value={50}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        rotation: 0.25,
                        strokeLinecap: "butt",
                        backgroundColor: "#52B6FF",
                        pathColor: "#FFFFFF",
                        trailColor: "#52B6FF"

                    }
                    )
                    }>
                    <Link to={"/hoje"}>
                        <button data-test="today-link" >Hoje</button>
                    </Link>
                </CircularProgressbarWithChildren>
            </ProgressBarContainer>
            <Link to={"/historico"}>
                <button data-test="history-link">Histórico</button>
            </Link>
        </MenuContainer>
    )

}

const MenuContainer = styled.footer`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    padding: 18px;
    button{
    border: none;
    background-color: #FFFFFF;
    color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
}
`
const ProgressBarContainer = styled.div`
width: 91px;
height: 91px;
position: absolute;
bottom: 10px;
left: 142px;
button{
    border: none;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
}
`
