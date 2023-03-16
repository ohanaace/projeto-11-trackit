import styled from "styled-components";

export default function NoHabit() {
    return (
        <AlertHabit>
            <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </p>
        </AlertHabit>)
}

const AlertHabit = styled.div`
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