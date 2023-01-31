import { useNavigate } from "react-router-dom";
import logoLight from "../../assets/images/family-hold-light.png";
import { HeaderContainer } from "./generics";

export default function Header() {
    const navigate = useNavigate();
    return(
        <HeaderContainer onClick={() => navigate("/home")}>
            <img src={logoLight} alt='logo'/>
            <h2>Olá, Usuário</h2>
        </HeaderContainer>
    )
}

