import API from 'api';
import { useAuthDispatch, useUserDispatch } from 'context/Auth';

function useUserActions() {
  const authDispatch = useAuthDispatch();
  const userDispatch = useUserDispatch();

  function getUserInfo(accessToken: string) {
    const params = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: accessToken,
      },
    };

    API('get', '/auth/token', params)
      .then(response => {
        console.log(response);

        // userDispatch({
        //   type: 'GET_USER',
        //   payload: response.data,
        // });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
  }

  function login(props: { email: string; password: string }) {
    const { email, password } = props;
    let accessToken = '';
    let tokenType = '';

    const form = new FormData();
    form.append('username', email);
    form.append('password', password);

    const params = {
      form,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    API('post', '/auth/token', params)
      .then(response => {
        console.log(response);

        const jsonString = JSON.stringify(response.data, [
          'access_token',
          'token_type',
        ]);
        JSON.parse(jsonString, (key, value) => {
          if (key === 'access_token') {
            accessToken = value;
          }
          if (key === 'token_type') {
            tokenType = value;
          }
        });

        authDispatch({
          type: 'LOGIN',
          payload: {
            username: email,
            access_token: accessToken,
            token_type: tokenType,
          },
        });
        getUserInfo(accessToken);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
  }

  function logout() {}

  function signUp() {}

  return {
    login,
    logout,
    signUp,
    getUserInfo,
  };
}

export default useUserActions;
