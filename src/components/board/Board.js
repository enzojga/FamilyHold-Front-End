import Footer from "../generics/Footer";
import { GrayContainer } from "../generics/generics";
import Header from "../generics/Header";
import BoardWarnings from "./BoardWarnings";

export default function Board({ boardId }) {
    return(
        <GrayContainer style={{justifyContent: 'start'}}>
            <BoardWarnings/>
            <Footer/>
        </GrayContainer>
    );
}