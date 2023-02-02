import Footer from "../generics/Footer";
import { GrayContainer } from "../generics/generics";
import BoardMessages from "../messages/BoardMessages";

export default function Board({ boardId }) {
    return(
        <GrayContainer style={{justifyContent: 'start'}}>
            <BoardMessages id={boardId}/>
            <Footer/>
        </GrayContainer>
    );
}