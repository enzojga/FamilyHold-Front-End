import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const ButtonContainer = styled.div`
    width: 90%;
    height: 60px;
    background-color: white;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
    display: grid;
    justify-content: center;
    align-items: center;
    justify-self: end;
    position: relative;
    span {
        color: ${props => props.darkMode ? '#9B1839' : '#BE264C'};
        font-size: 1.7em;
        font-weight: ${props => props.darkMode ? '800' : '400'};
        svg {
            position absolute;
            top: 19px;
            right: 30px;
            display: ${props => props.darkMode ? 'none' : 'initial'}
        }
    }
`