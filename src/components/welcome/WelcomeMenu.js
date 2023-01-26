import styled from "styled-components";
import { Button } from "../generics/Button";
import { ButtonContainer, Container } from "../generics/generics";
import IconLight from "../generics/IconLight";

export default function WelcomeMenu() {
    return (
        <Container>
            <IconLight/>
            <BottomContainer>
            <h2>
                Primeira vez?
            </h2>
            <h3>
                Crie sua conta.
            </h3>
            </BottomContainer>
            <CustomButtom>
                <span>
                    Entrar
                </span>
            </CustomButtom>
        </Container>
    );
}

const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    h2 {
        font-size: 2em;
        font-weight: 700;
    }
    h3 {
        font-size: 1.7em;
        font-weight: 400;
        text-decoration: underline white;
        margin-top: 20px
    }
`

const CustomButtom = styled(ButtonContainer)`
    span {
        font-weight: 800;
        svg {
            display: none
        }
    }
`