import Button from 'components/atoms/Button';
import useUserActions from 'hooks/useUserActions';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { LogInWrap, LoginForm, Title } from './styles';

function LogIn() {
  const userActions = useUserActions();

  const [email, setEmail] = useState(undefined);
  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value);
  }, []);

  const [password, setPassword] = useState(undefined);
  const onChangePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (email && password) {
        userActions.login({ email, password });
      }
    },
    [userActions],
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
