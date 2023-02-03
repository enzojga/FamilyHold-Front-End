import TitleLine from '../generics/TitleLine';
import Task from './Task';

export default function TaskBoard({ id }) {
    return(
        <>
            <TitleLine text={'Tarefas'}/>
            <Task/>
        </>
    );
}