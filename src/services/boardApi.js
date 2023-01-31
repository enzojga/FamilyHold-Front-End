import api from './api';
import createHeaders from './headers';

const config = createHeaders();

export function createBoardApi({name, icon, invite}) {
  console.log(config);
  const response = api.post('/board', {name, icon, invite}, config);
  return response;
}
