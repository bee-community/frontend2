import { ShadowBox } from 'components/ShadowBox';
import { Table } from 'components/Table';
import { Button, Form } from 'pages/Question/styles';
import * as React from 'react';

import { Title, TableTitle } from './styles';

function EditPrivacy() {
  return (
    <>
      <Title>개인 정보 수정</Title>
      <ShadowBox>
        <Form>
          <TableTitle>기본정보</TableTitle>
          <Table>
            <tr>
              <th scope="row" className="border-bottom">
                비밀번호
              </th>
              <td className="border-bottom">
                <input
                  className="input-middle"
                  type="text"
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
                  className="input-middle"
                  type="text"
                  placeholder="영문+특수문자 조합 8글자 이상"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">휴대폰 인증</th>
              <td>
                <input
                  className="input-middle"
                  type="text"
                  placeholder="010-0000-0000"
                />
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
                <input
                  className="input-middle"
                  type="text"
                  placeholder="xxx@honeyuniv.ac.kr"
                />
                <button className="button-in-table">인증하기</button>
              </td>
            </tr>
            <tr>
              <th scope="row">회사</th>
              <td>
                <input
                  className="input-middle"
                  type="text"
                  placeholder="xxx@honeycorp.kr"
                />
                <button className="button-in-table">인증하기</button>
              </td>
            </tr>
          </Table>
          <Button>저장</Button>
        </Form>
      </ShadowBox>
    </>
  );
}

export default EditPrivacy;
