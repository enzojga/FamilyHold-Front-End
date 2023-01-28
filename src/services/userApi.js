import api from './api';

export async function signInApi(username, password) {
  const data = {username, password}
  const response = await api.post('/signin', data);
  return response.data;
}
