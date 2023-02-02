import styled from "styled-components";

export default function Message({ self }) {
    return (
        <MessageContainer self={self}>
            <div>
                <span>Enzolol</span>
                <h3>Hoje, 15:30</h3>
            </div>
            <span>Indo papar</span>
        </MessageContainer>
    )
}

const MessageContainer = styled.div`
    margin-bottom: 10px;
    width: 90vw;
    max-width: 90vw;
    min-height: 8vh;
    background-color: ${props => props.self ? '#BE264C' : 'white'};
    border: 1.4px solid black;
    border-radius: 20px;
    text-align: start;
    align-self: ${props => props.self ? 'end' : 'start'};
    & > div {
        margin-top: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        span {
            margin-left: 10px;
            color: #BE264C;
            font-size: 1.4em;
            font-weight: 500;
        }
        h3 {
            margin-right: 10px;
            color: ${props => props.self ? 'white' : 'black'};
        }
    }
    & > span {
        width: 100%;
        margin-left: 10px;
        font-size: 1.4em;
        color: ${props => props.self ? 'white' : 'black'};
        margin-bottom: 10px;
    }
`