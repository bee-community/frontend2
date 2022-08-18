import API from 'api';
import Button from 'components/atoms/Button';
import { useAuthDispatch } from 'context/Auth';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { LogInWrap, LoginForm, Title } from './styles';

function LogIn() {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const authDispatch = useAuthDispatch();

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
                setAccessToken(value);
              }
              if (key === 'token_type') {
                setTokenType(value);
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

            const params2 = {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            };

            API('get', '/auth/token', params2).then(response2 => {
              console.log(response2);
            });
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {});
      }
    },
    [email, password, accessToken, authDispatch, tokenType],
  );

  return (
    <LogInWrap>
      <Title>
        <img src="" alt="logo" />
        <span id="honey">HONEY</span>
        <span id="bee">BEE</span>
      </Title>
      <LoginForm onSubmit={onSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="아이디"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
        <Button
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
