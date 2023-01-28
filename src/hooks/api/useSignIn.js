import useAsync from '../useAsync';

import signInApi from '../../services/userApi.js'

export default function useSignIn() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn
  } = useAsync(signInApi, false);

  return {
    signInLoading,
    signInError,
    signIn
  };
}
