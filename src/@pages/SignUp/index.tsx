import logo from 'assets/chatImages/logo.png';
import API from 'mainAPI';
import { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { TableTitle } from '@pages/EditPrivacy/styles';
import { Title } from '@pages/LogIn/styles';
import { Form } from '@pages/Question/styles';

import { Table } from '@components/Table';
import Button from '@components/atoms/Button';

import { SignUpWrap, WhiteBox, Error } from './styles';

function SignUp() {
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
        console.log(email, password);
        API.post('/users', {
          email,
          password,
          birthdate: '2022-10-29',
          phone_number: 'string',
        })
          .then(response => {
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
    <SignUpWrap>
      <Title onClick={() => navigate('/')}>
        <img style={{ marginTop: '20px', width: '300px' }} src={logo} alt="logo" />
      </Title>

      <WhiteBox>
        <div className="signupTitle">회원가입</div>

        <Form onSubmit={onSubmit}>
          <TableTitle>기본정보</TableTitle>
          <Table>
            <tr>
              <th scope="row" className="border-bottom">
                이메일
              </th>
              <td className="border-bottom">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  placeholder="영문+특수문자 조합 8글자 이상"
                />
              </td>
            </tr>
            <tr>
              <th scope="row" className="border-bottom">
                비밀번호
              </th>
              <td className="border-bottom">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  placeholder="영문+특수문자 조합 8글자 이상"
                />
              </td>
            </tr>
            <tr>
              <th scope="row" className="border-bottom">
                비밀번호 확인
              </th>
              <td className="border-bottom">
                <input
                  type="password"
                  id="passwordCheck"
                  name="passwordCheck"
                  value={passwordCheck}
                  onChange={onChangePasswordCheck}
                  placeholder="영문+특수문자 조합 8글자 이상"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">휴대폰 인증</th>
              <td>
                <button className="button-in-table">인증하기</button>
              </td>
            </tr>
          </Table>
          <TableTitle>선택</TableTitle>
          <Table>
            <tr>
              <th scope="row" className="border-bottom">
                학교
              </th>
              <td className="border-bottom">
                <input className="input-middle" type="text" placeholder="부산대학교" />
                <button className="button-in-table">인증하기</button>
              </td>
            </tr>
            <tr>
              <th scope="row">회사</th>
              <td>
                <input className="input-middle" type="text" placeholder="부산건설" />
                <button className="button-in-table">인증하기</button>
              </td>
            </tr>
          </Table>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!email && <Error>이메일을 입력해주세요!</Error>}
          <Button
            buttonType="contained"
            color="yellow"
            radius="round"
            customCss={{
              padding: '15px 68px',
            }}>
            완료
          </Button>
        </Form>
        <div className="linkToLogin">
          <Link to="/login">로그인하러가기</Link>
        </div>
      </WhiteBox>
    </SignUpWrap>
  );
}

export default SignUp;
