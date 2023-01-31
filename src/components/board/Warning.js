import styled from "styled-components";

export default function Warning({ picture, name, time, text}) {
    return(
        <WarningContainer>
            <div>
                <img src={picture} alt='user picture' />
                <div>
                    <h3>{name}</h3>
                    <h4>{time}</h4>
                </div>
            </div>
            <h2>
                {text}...
            </h2>
        </WarningContainer>
    );
}

const WarningContainer = styled.div`
    margin-top: 20px;
    width: 100vw;
    height: 8vh;
    background-color: white;
    border: 1px solid #961D3A;
    border-radius: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h2 {
        font-size: 1.7em;
    }
    & > div {
        display: flex;
        justify-content: center;
        img {
            border-radius: 50%;
            width: 6.5vh;
            height: 6.5vh;        
        }
        h3 {
            font-size: 1.5em;
            font-weight: 600;
            margin-bottom: 7px;
        }
        h4 {
            font-size: 1.2em;
            font-weight: 400;
        }    
        & > div {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            margin-left: 10px; 
        }
    }
`