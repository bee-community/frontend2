import { ShadowBox } from 'components/ShadowBox';
import * as React from 'react';

import { Title, QuestionTable, Form, Button } from './styles';

function Question() {
  return (
    <>
      <Title>일반문의</Title>
      <ShadowBox>
        <Form>
          <QuestionTable>
            <tr>
              <th scope="row" className="title">
                제목
              </th>
              <td className="title">
                <input type="text" placeholder="제목을 입력해주세요." />
              </td>
            </tr>
            <tr>
              <th scope="row">내용</th>
              <td>
                <textarea placeholder="문의할 내용을 입력해주세요." />
              </td>
            </tr>
          </QuestionTable>
          <Button>문의하기</Button>
        </Form>
      </ShadowBox>
    </>
  );
}

export default Question;
