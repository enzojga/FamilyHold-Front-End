import { IoIosWarning } from "react-icons/io"
import { BsFillChatFill, BsFillPeopleFill } from "react-icons/bs"
import { FaTasks } from "react-icons/fa"

import styled from "styled-components"
import { HeaderContainer } from "./generics"

export default function Footer() {
    return (
        <FooterContainer>
            <IoIosWarning/>
            <BsFillChatFill/>
            <FaTasks/>
            <BsFillPeopleFill/>
        </FooterContainer>
    )
}

const FooterContainer = styled(HeaderContainer)`
    bottom: 0;
    top: auto;
    justify-content: space-evenly;
    svg {
        color: white;
        width: 16vw;
        height: 16vw;
    }
`