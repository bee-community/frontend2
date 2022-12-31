import { useAuthState } from 'context/Auth';
import API from 'mainAPI';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setUserInfo } from 'slice/userInfo';

const useUserInfo = () => {
  const auth = useAuthState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
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
            dispatch(setUserInfo({ value: response.data }));
          })
          .catch(error => {
            navigate('/login');
          })
          .finally(() => {});
      } else {
        API.get('/users/self', {
          headers: {
            Authorization: `${auth.tokenType} ${auth.accessToken}`,
          },
        })
          .then(response => {})
          .catch(error => {
            console.log(error);
          })
          .finally(() => {});
      }
    }
  }, []);
};

export default useUserInfo;
