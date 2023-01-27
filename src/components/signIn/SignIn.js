import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, FormContainer, UnderlineText } from "../generics/generics";
import IconLight from "../generics/IconLight";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    function handleLogin (e) {
        e.preventDefault();
        console.log('ola');
        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_CENTER
        });

        if(username.length < 5 || password.length < 5) {

        }

    }

    return(
        <Container>
            <IconLight noText={true}/>
            <FormContainer onSubmit={handleLogin}>
                <label>Usuário</label>
        	    <input
                    type="text"
                    name="text"
                    placeholder="Digite seu usuário"
                    onChange={e => setUsername(e.target.value)}
                />
                <label>Senha</label>
        	    <input
                    type="password"
                    name="text"
                    placeholder="Digite sua senha"
                    onChange={e => setPassword(e.target.value)}
                />
                <button>
                    <span>Entrar</span>
                </button>
                <UnderlineText onClick={() => navigate("/sign-up")}>
                    Criar conta.
                </UnderlineText>
            </FormContainer>
        </Container>
    )
}
