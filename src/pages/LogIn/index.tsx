import Http from 'api';
import { useAuthDispatch, useAuthState } from 'context/Auth';
import { login } from 'context/Auth/actions';
import {
  Header,
  Form,
  Label,
  Input,
  Button,
  Error,
  TermOfService,
} from 'pages/SignUp/styles';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const authDispatch = useAuthDispatch();
  const auth = useAuthState();

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

  console.log('auth', auth); // test code

  return (
    <>
      <Header>HONEYBEES</Header>
      <Form onSubmit={onSubmit}>
        <Label>
          <span>이메일 주소</span>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
          />
        </Label>
        <Label>
          <span>비밀번호</span>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
        </Label>
        {!email && <Error>이메일을 입력해주세요!</Error>}
        <Button type="submit">로그인</Button>
      </Form>
      <TermOfService>
        <Link to="">비밀번호 재설정</Link>
        <Link to="/signup">회원가입</Link>
      </TermOfService>
    </>
  );
};

export default LogIn;
