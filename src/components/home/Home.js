import styled from "styled-components";
import { AlternativeButton, GrayContainer, OpacityContainer } from "../generics/generics";
import Header from "../generics/Header";
import { TfiFaceSad } from 'react-icons/tfi';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    return(
        <GrayContainer>
            <Header/>
            <BoardList>
                <h1>
                    Parece que você ainda não esta participando de nenhum quadro.
                </h1>
                <TfiFaceSad/>
            </BoardList>
            <ButtonsContainer show={show}>
                <AlternativeButton>
                    <span>Entrar com convite</span>
                </AlternativeButton>
                <AlternativeButton onClick={() => {navigate("/board/create")}}>
                    <span>Criar Quadro</span>
                </AlternativeButton>
                <AiFillPlusCircle onClick={ () => { setShow(!show) } }/>
            </ButtonsContainer>
            <OpacityContainer show={show}/>
        </GrayContainer>
    );  
}

const ButtonsContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 3;
    align-items: center;
    display: flex;
    justify-content: end;
    flex-direction: column;
    padding-bottom: 80px;
    & > div {
        display: ${props => props.show ? 'flex' : 'none'}
    }
    & > svg {
        color: #BE264C;
        width: 20vw;
        height: 20vw;
        position: fixed;
        bottom: 0;
        right: 0;
    }    
`

const BoardList = styled.div`
    h1 {
        font-size: 2em;
        font-weight: 600;
    }
    svg {
        margin-top: 2em;
        width: 33vw;
        height: 33vw;
    }   
`