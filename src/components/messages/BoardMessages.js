import { useQuery } from 'react-query';
import styled from 'styled-components'
import { getMessagessApi } from '../../services/messagesApi';
import TitleLine from '../generics/TitleLine'
import Message from './Message'

export default function BoardMessages({ id }) {
    const { data, isLoading, error } = useQuery(["warnings", id], () => getMessagessApi(id));
    return(
        <>
            <TitleLine text={'Conversa'}/>
            <MessagesContainer>
                {data?.data ? data.data.map(m => <Message info={m}/>) : ''}
            </MessagesContainer>
        </>
    )
};

const MessagesContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10vh;
`