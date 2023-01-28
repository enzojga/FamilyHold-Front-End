import styled from "styled-components";
import { FormContainer, GrayContainer } from "../generics/generics";
import Header from "../generics/Header";

export default function CreateBoard() {
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