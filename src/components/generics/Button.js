import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";

export function Button({ text, darkMode }) {
    return(
        <ButtonContainer darkMode={darkMode}>
            <span>
                {text}
            </span>
        </ButtonContainer>
    );
}

const ButtonContainer = styled.div`
    width: 90%;
    height: 60px;
    background-color: ${props => props.darkMode ? '#790F28' : 'white'};
    border-radius: 50px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
    display: grid;
    justify-content: center;
    align-items: center;
    justify-self: end;
    position: relative;
    span {
        color: ${props => props.darkMode ? 'white' : '#BE264C'};
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