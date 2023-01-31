import styled from "styled-components"
import { FormContainer } from "../generics/generics"
import { CiPaperplane } from "react-icons/ci";
import Warning from "./Warning";

export default function BoardWarnings() {
    return (
        <>
            <CreateWarningContainer>
                <CustomForm>
                <input
                        type="text"
                        name="text"
                        placeholder="Escreva um aviso"
                    />
                </CustomForm>
                <Icon>
                    <CiPaperplane/>
                </Icon>
            </CreateWarningContainer>
            <VerticalLine/>
            <WarningsContainer>
                    <h1>
                        Recentes
                    </h1>
                    <Warning picture={'https://cdn.discordapp.com/attachments/872940057751871488/1066558193544745030/IMG-20221210-WA0023.jpg'} name={'Cana'} time={'Hoje 30/01'} text={'Comida'}/>
            </WarningsContainer>
        </>
    )
}

const VerticalLine = styled.div`
    width: 100vw;
    height: 5px;
    background-color: #961D3A;
`

const CustomForm = styled(FormContainer)`
    width: auto;
    input {
        text-align: center;
        width: 70vw;
        border-radius: 100px;
        border: 1px solid #961D3A;
        ::placeholder {
            font-size: 30px;
            padding-top: 10px;
            font-weight: 400;
        }
    }
`

const CreateWarningContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: space-evenly;
`

const Icon = styled.div`
    background-color: #BE264C;
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 80%;
        height: 80%;
        color: white;
    }
`

const WarningsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    h1 {
        font-weight: 800;
        font-size: 2em;
    }
`