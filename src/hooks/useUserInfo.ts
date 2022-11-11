import { useAuthState } from 'context/Auth';
import API from 'mainAPI';
import { useDispatch } from 'react-redux';
import { setUserInfo } from 'slice/userInfo';

const useUserInfo = () => {
  const auth = useAuthState();
  const dispatch = useDispatch();
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
          console.log(response);
          console.log(response.data);
          dispatch(setUserInfo({ value: response.data }));
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
