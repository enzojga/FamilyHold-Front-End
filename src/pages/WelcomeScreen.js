import styled from "styled-components";
import { Button } from "../components/generics/Button";
import IconLight from "../components/generics/IconLight";

export default function WelcomeScreen() {
    return (
        <Container>
            <IconLight darkMode={true}/>
            <Button text={"Entrar"} darkMode={true}/>
        </Container>
    );
}

const Container = styled.div`
    background-color: #9B1839;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
`