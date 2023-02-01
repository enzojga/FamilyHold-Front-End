import api from './api';
import createHeaders from './headers';

const config = createHeaders();

export function createBoardApi({name, icon, invite}) {
  const response = api.post('/board', {name, icon, invite}, config);
  return response;
}

export function getBoardsApi() {
  const response = api.get('/board', config);
  return response;
}
