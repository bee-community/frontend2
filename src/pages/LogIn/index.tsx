import { client } from 'apis';
import logo from 'assets/chatImages/logo.png';
import Button from 'components/atoms/Button';
import { useAuthDispatch, useAuthState } from 'context/Auth';
import { login } from 'context/Auth/actions';
import API from 'mainAPI';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setJWTToken } from 'slice/tokenSilice';

import { LogInWrap, LoginForm, Title } from './styles';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(undefined);
  const dispatch = useDispatch();
  const authDispatch = useAuthDispatch();
  // const auth = useAuthState();

  let navigate = useNavigate();

  const [accessToken, setAccessToken] = useState('');
  const [tokenType, setTokenType] = useState('');
  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value);
  }, []);
  const onChangePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (email && password) {
        console.log('서버로 로그인하기');

        const params = new URLSearchParams();
        params.append('username', email);
        params.append('password', password);

        API.post('/auth/token', params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
          .then(response => {
            const jsonString = JSON.stringify(response.data, ['access_token', 'token_type']);
            JSON.parse(jsonString, (key, value) => {
              if (key === 'access_token') {
                setAccessToken(value);
                localStorage.setItem('access_token', value);
                dispatch(setJWTToken({ value }));
                if (client.defaults.headers != null) {
                  client.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
                }
              }
              if (key === 'token_type') {
                setTokenType(value);
              }
            });
            navigate('/');
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {});
      }
    },
    [email, password, accessToken, authDispatch, tokenType],
  );

  useEffect(() => {
    authDispatch(
      login({
        isNewEnter: false,
        userEmail: email,
        accessToken: accessToken,
        tokenType: tokenType,
      }),
    );
    return () => {};
  }, [email, accessToken, tokenType]);

  return (
    <LogInWrap>
      <Title>
        <img style={{ marginTop: '40px', width: '300px' }} src={logo} alt="logo" />
      </Title>
      <LoginForm onSubmit={onSubmit}>
        <input type="email" id="email" name="email" placeholder="아이디" value={email} onChange={onChangeEmail} />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
        <Button
          onClick={onSubmit}
          buttonType="contained"
          color="black"
          radius="square"
          css={{
            width: '100%',
            padding: '16px 10px 15px',
            marginBottom: '15px',
            color: '#fff',
            borderRadius: '5px',
          }}>
          로그인
        </Button>
      </LoginForm>
      <div className="search">
        <Link to="">
          <span>아이디 찾기</span>
        </Link>
        <span>•</span>
        <Link to="">
          <span>비밀번호 찾기</span>
        </Link>
      </div>
      <div className="signup">
        <Link to="/signup">회원가입하기</Link>
      </div>
    </LogInWrap>
  );
}

export default LogIn;
