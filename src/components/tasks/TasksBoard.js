import { useMutation, useQuery } from 'react-query';
import { getTasksApi, joinTasksApi } from '../../services/taskApi';
import TitleLine from '../generics/TitleLine';
import Task from './Task';
import { toast, ToastContainer } from 'react-toastify';

export default function TaskBoard({ id }) {
    const { data, isLoading, error } = useQuery(["tasks", id], () => getTasksApi(id));
    const mutation = useMutation({
        mutationFn: (id) => joinTasksApi(id),
        onSuccess: (data) => {
            console.log(data);
            toast.success("Se inscreveu!");
        },
        onError: (data) => {
            if(data.response.status === 409) {
                toast.error("Você já está cadastrado nesta atividade!");
                return;
            } else {
                toast.error("Algo de errado aconteceu.");
                return;
            }
        },
    });
    return(
        <>
            <ToastContainer/>
            <TitleLine text={'Tarefas'}/>
            {data?.data ? data.data.map(t => <Task task={t} mutation={mutation} />) : ''}
        </>
    );
}