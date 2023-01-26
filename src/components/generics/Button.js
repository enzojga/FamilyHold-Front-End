import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";
import { ButtonContainer } from "./generics";

export function Button({ text, darkMode }) {
    return(
        <ButtonContainer darkMode={darkMode}>
            <span>
                {text}
                <AiOutlineRight/>
            </span>
        </ButtonContainer>
    );
}
