import React from 'react';
import { Link } from 'react-router-dom';

import {
  Header,
  Form,
  Label,
  Input,
  Button, // Error,
  // Success,
  LinkContainer,
  Line,
  TermOfService,
} from './styles';

const SignUp = () => {
  return (
    <>
      <Header>HONEYBEES</Header>
      <Form>
        <Label>
          <span>이메일 주소</span>
          <Input />
        </Label>
        <Label>
          <span>비밀번호</span>
          <Input />
        </Label>
        <Label>
          <span>비밀번호 확인</span>
          <Input />
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 계정이 있으세요?
        <Link to="">로그인</Link>
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
