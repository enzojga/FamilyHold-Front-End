import styled from "styled-components";
import { ImExit } from 'react-icons/im';
import { BsFillPencilFill } from 'react-icons/bs';
import personIcon from "../../assets/images/personIcon.jpg"

export default function Participant({ info }) {
    return(
        <ParticipantContainer>
            <div>
                <div>
                    <img src={info?.picture || personIcon}/>
                    <h1>{info?.nickname || info.Users.username}</h1>
                </div>
                <div>
                    <IconContaier>
                        <BsFillPencilFill/>
                    </IconContaier>
                    <IconContaier>
                        <ImExit/>
                    </IconContaier>
                </div>
            </div>
            <span>
                {info?.status || 'Estou disponivel!'}
            </span>
        </ParticipantContainer>
    )   
}

const ParticipantContainer = styled.div`
    width: 99vw;
    min-height: 11vh;
    border: 1.4px solid #BE264C;
    background-color: white;
    border-radius: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: start;
    span {
        font-size: 1.5em;
        align-self: start;
        margin: 0 0 5px 69px;
    }
    & > div {
        margin: 10px 0 0 10px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        img {
            width: 13vw;
            height: 13vw;
            border-radius: 50%;
        }
        div {
            display: flex;
            align-items: center;
            h2 {
                font-size: 1.2em;
                font-weight: 600;
            }
        }
        h1 {
            font-size: 1.5em;
            margin-left: 10px;
        }
    }
`

const IconContaier = styled.div`
    width: 8vw;
    height: 8vw;
    background-color: #BE264C;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
    svg {
        color: white;
    }
`
