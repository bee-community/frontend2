import { ShadowBox } from 'components/ShadowBox';
import { Table } from 'components/Table';
import Button from 'components/atoms/Button';
import { Form } from 'pages/Question/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { Title, InputFileLabel, CheckBoxLabel } from './styles';

function Report() {
  return (
    <>
      <Title>권리침해 신고/소명</Title>
      <ShadowBox>
        <Form>
          <Table>
            <tr>
              <th scope="row" className="border-bottom">
                이메일 주소
              </th>
              <td className="border-bottom">
                <input className="input-middle" type="email" />
              </td>
            </tr>
            <tr>
              <th scope="row" className="border-bottom">
                휴대폰번호
              </th>
              <td className="border-bottom">
                <input
                  className="input-middle"
                  type="text"
                  placeholder="010-0000-0000"
                />
                <button className="button-in-table">인증하기</button>
              </td>
            </tr>
            <tr>
              <th scope="row" className="border-bottom">
                문의 분류
              </th>
              <td className="border-bottom">
                <select name="category" required>
                  <option value="" disabled selected>
                    카테고리선택
                  </option>
                  <option value="카테고리1">카테고리1</option>
                  <option value="카테고리2">카테고리2</option>
                  <option value="카테고리3">카테고리3</option>
                </select>
                <select name="category-sub" required>
                  <option value="" disabled selected>
                    카테고리선택
                  </option>
                  <option value="카테고리1">카테고리1</option>
                  <option value="카테고리2">카테고리2</option>
                  <option value="카테고리3">카테고리3</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row" className="border-bottom">
                문의 제목
              </th>
              <td className="border-bottom">
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th scope="row" className="border-bottom">
                문의 내용
              </th>
              <td className="border-bottom">
                <textarea placeholder="문의할 내용을 입력해주세요." />
              </td>
            </tr>
            <tr>
              <th scope="row">파일첨부</th>
              <td>
                <InputFileLabel
                  className="input-file-button"
                  htmlFor="input-file">
                  <span>첨부파일 추가</span>
                  <button className="button-in-table">파일찾기</button>
                </InputFileLabel>
                <input
                  type="file"
                  id="input-file"
                  style={{ display: 'none' }}
                />
              </td>
            </tr>
          </Table>
          <CheckBoxLabel>
            <input type="checkbox" name="agree" value="true" />
            <Link to="">개인정보 수집·이용에 대한 안내</Link>
          </CheckBoxLabel>
          <Button
            buttonType="contained"
            color="yellow"
            radius="round"
            css={{
              padding: '15px 68px',
            }}>
            문의하기
          </Button>
        </Form>
      </ShadowBox>
    </>
  );
}

export default Report;
