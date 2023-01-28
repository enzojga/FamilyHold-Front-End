import styled from "styled-components";
import { Container } from "../generics/generics";
import Header from "../generics/Header";
import { TfiFaceSad } from 'react-icons/tfi';
import { AiFillPlusCircle } from 'react-icons/ai';

export default function Home() {
    return(
        <GrayContainer>
            <Header/>
            <div>
                <h1>
                    Parece que você ainda não esta participando de nenhum quadro.
                </h1>
                <TfiFaceSad/>
            </div>
            <AiFillPlusCircle/>
        </GrayContainer>
    );  
}

const GrayContainer = styled(Container)`
    background-color: #DFDFDF;
    text-align: center;
    div {
        & > h1 {
            font-size: 2em;
            font-weight: 600;
        }
        & > svg {
            margin-top: 2em;
            width: 33vw;
            height: 33vw;
        }    
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