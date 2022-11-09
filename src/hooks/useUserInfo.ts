import { useAuthState } from 'context/Auth';
import API from 'mainAPI';

const useUserInfo = () => {
  const auth = useAuthState();
  if (auth.isNewEnter && !localStorage.getItem('access_token')) {
  } else {
    if (localStorage.getItem('access_token')) {
      const accessToken = localStorage.getItem('access_token');
      API.get('/users/self', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {});
    } else {
      API.get('/users/self', {
        headers: {
          Authorization: `${auth.tokenType} ${auth.accessToken}`,
        },
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {});
    }
  }
};

export default useUserInfo;
