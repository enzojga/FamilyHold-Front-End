import { useParams } from "react-router-dom";

export default function BoardScreen() {
    const { boardId } = useParams();
    console.log(boardId);
    return(
        ''
    );
}