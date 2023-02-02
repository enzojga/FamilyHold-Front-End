import styled from 'styled-components'
import TitleLine from '../generics/TitleLine'
import Message from './Message'

export default function BoardMessages() {
    return(
        <>
            <TitleLine text={'Conversa'}/>
            <MessagesContainer>
                <Message self={false}/>
                <Message self={true}/>
                <Message self={false}/>
                <Message self={true}/>
            </MessagesContainer>
        </>
    )
};

const MessagesContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
`