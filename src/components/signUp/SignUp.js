import { useNavigate } from "react-router-dom";
import { Container, FormContainer, UnderlineText } from "../generics/generics";
import IconLight from "../generics/IconLight";

export default function SignUp() {
    const navigate = useNavigate();
    return(
        <Container>
            <IconLight noText={true}/>
            <FormContainer>
                <label>Usuário</label>
        	    <input
                    type="text"
                    name="text"
                    placeholder="Digite seu usuário"
                />
                <label>Senha</label>
        	    <input
                    type="password"
                    name="text"
                    placeholder="Digite sua senha"
                />
                <label>Confirmar senha</label>
        	    <input
                    type="password"
                    name="text"
                    placeholder="Confirmar senha"
                />
                <button>
                    <span>Criar conta</span>
                </button>
                <UnderlineText onClick={() => navigate("/sign-in")}>
                    Entrar
                </UnderlineText>
            </FormContainer>
        </Container>
    )
}
