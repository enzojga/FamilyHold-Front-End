import styled from "styled-components";
import logoLight from "../../assets/images/family-hold-light.png";

export default function Header() {
    return(
        <HeaderContainer>
            <img src={logoLight} alt='logo'/>
            <h2>Olá, Usuário</h2>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    width: 100vw;
    height: 10vh;
    background-color: #BE264C;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    h2 {
        font-size: 1.3em;
        color: white;
    }
    img {
        width: 8vh;
        height: 8vh;
    }
`