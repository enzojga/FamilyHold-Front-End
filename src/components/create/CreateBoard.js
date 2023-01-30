import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BoardIcons from "../generics/BoardIcons";
import { AlternativeButton, FormContainer, GrayContainer } from "../generics/generics";
import Header from "../generics/Header";

export default function CreateBoard() {
    const navigate = useNavigate();
    return(
        <GrayContainer style={{textAlign:'initial', justifyContent: 'start'}}>
            <Header/>
            <CustomForm>
                <label>Nome do quadro</label>
        	    <input
                    type="text"
                    name="text"
                    placeholder="Digite o nome do quadro"
                />
                <label>Código do convite</label>
        	    <input
                    type="text"
                    name="text"
                    placeholder="Insira o código do convite"
                />
                <label>Ícones</label>
            </CustomForm>
            <IconContainer>
                <BoardIcons icon={1}/>
                <BoardIcons icon={2}/>
                <BoardIcons icon={3}/>
                <BoardIcons icon={4}/>
            </IconContainer>
            <AlternativeButton onClick={() => navigate('/board/1')}>
                <span>Criar</span>
            </AlternativeButton>
        </GrayContainer>
    )
}

const CustomForm = styled(FormContainer)`
    margin-top: 30px;
    label {
        color: black;
        font-weight: 400;
    }
`

const IconContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
`
