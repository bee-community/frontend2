import Http from 'api';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {
  Header,
  Form,
  Label,
  Input,
  Button,
  Error,
  Success,
  LinkContainer,
  Line,
  TermOfService,
} from './styles';

const SignUp = () => {
  let navigate = useNavigate();

  const [mismatchError, setMismatchError] = useState(false);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [passwordCheck, setPasswordCheck] = useState(undefined);

  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value);
  }, []);
  const onChangePassword = useCallback(
    e => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck],
  );
  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!mismatchError && email && password) {
        console.log('서버로 회원가입하기');
        Http.post('/users', {
          username: email,
          password: password,
        })
          .then(response => {
            console.log(response);
            navigate('/login', { replace: true });
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {});
      }
    },
    [email, password, mismatchError, navigate],
  );

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
        <Label>
          <span>비밀번호 확인</span>
          <Input
            type="password"
            id="passwordCheck"
            name="passwordCheck"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />
        </Label>
        {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
        {!email && <Error>이메일을 입력해주세요!</Error>}
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 계정이 있으세요?
        <Link to="/login">로그인</Link>
      </LinkContainer>
      <Line />
      <TermOfService>
        회원가입 시 honeybees의
        <Link to="">서비스 약관</Link>및<Link to="">개인정보 처리방침</Link>을
        확인하였으며, 동의합니다.
      </TermOfService>
    </>
  );
};

export default SignUp;
