import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, FormContainer, UnderlineText } from "../generics/generics";
import IconLight from "../generics/IconLight";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { signInApi } from "../../services/userApi";
import { useMutation } from "react-query";

export default function SignIn() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const mutatation = useMutation({
        mutationFn: ({username, password}) => signInApi({username, password}),
        onSuccess: (data) => {
            toast.success("Parabens!");
            setTimeout(() => navigate('/home'), 1000);
        },
        onError: (data) => {
            if(data.response.status === 409) {
                toast.error("Usuário já cadastrado!");
            } else {
                toast.error("Algo de errado aconteceu.");
            }

        },
    },
    );

    function handleLogin (e) {
        e.preventDefault();
        if(username.length < 5 || password.length < 5) {
            toast.error("Os campos de usuário e senha precisam ter ao menos 5 carácteres!");
        }
        mutatation.mutate({username: username, password: password});
    }

    return(
        <Container>
            <ToastContainer/>
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
