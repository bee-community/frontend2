import Http from 'api';
import { useAuthDispatch } from 'context/Auth';
import { login } from 'context/Auth/actions';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { LogInWrap, LoginForm, Title } from './styles';

function LogIn() {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const authDispatch = useAuthDispatch();
  // const auth = useAuthState();

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
        Http.post('/auth/token', form, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
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

            authDispatch(
              login({
                username: email,
                access_token: accessToken,
                token_type: tokenType,
              }),
            );
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
        <img />
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
        <button type="submit">로그인</button>
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
