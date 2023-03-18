import styled from "styled-components";

export default function NoHabit({createdHabits}) {
    return (
        <AlertHabit display={createdHabits.length === 0}>
            <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </p>
        </AlertHabit>)
}

const AlertHabit = styled.div`
    display: ${(props) => props.display ? "initial" : "none"};
    width: 338px;
    margin-top: 28px;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`