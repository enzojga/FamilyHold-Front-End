import api from './api';
import createHeaders from './headers';

const config = createHeaders();

export function postTaskApi({message, id}) {
  const response = api.post(`/board/task/${id}`, {message}, config);
  return response;
}

export function getTasksApi(id) {
  const response = api.get(`/board/task/${id}`, config);
  return response;
}

export function joinTasksApi(id) {
  const response = api.post(`/board/task/join/${id}`, {}, config);
  return response;
}
