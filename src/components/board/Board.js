import Footer from "../generics/Footer";
import { GrayContainer } from "../generics/generics";
import BoardMessages from "../messages/BoardMessages";
import BoardParticipannts from "../participants/Boardparticipants";
import TaskBoard from "../tasks/TasksBoard";
import BoardWarnings from "../warnings/BoardWarnings"

export default function Board({ boardId }) {
    return(
        <GrayContainer style={{justifyContent: 'start'}}>
            <BoardParticipannts id={boardId}/>
            <Footer/>
        </GrayContainer>
    );
}