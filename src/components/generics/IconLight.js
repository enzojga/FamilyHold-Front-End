import styled from "styled-components";
import logoLight from "../../assets/images/family-hold-light.png";
import logoDark from "../../assets/images/family-hold-dark.png";

export default function IconLight({ darkMode }) {
    return(
        <Container darkMode={darkMode}>
            <img src={darkMode ? logoDark : logoLight} alt="logo"/>
            <span>FamilyHold</span>
        </Container>
    );
}

const Container = styled.div`
    background-color: ${props => props.darkMode ? '#9B1839' : '#BE264C'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 80px;
    justify-self: start;
    span {
        font-size: 2em;
        color: white;
        position: absolute;
        bottom: 10px;
    }
`