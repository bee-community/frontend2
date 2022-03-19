import arrowDown from 'assets/images/icon/arrow_down.png';
import arrowUp from 'assets/images/icon/arrow_up.png';
import { ShadowBox } from 'components/ShadowBox';
import * as React from 'react';

import { Title, FAQBoxWrap, FAQBox, Question, Answer } from './styles';

function FAQ() {
  const [isDetailsOpen, setIsDetailsOpen] = React.useState(false);

  return (
    <>
      <Title>FAQ</Title>
      <ShadowBox>
        <FAQBoxWrap>
          <FAQBox
            isDetailsOpen={isDetailsOpen}
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}>
            <Question>
              <span>자주묻는질문 01입니다.</span>
              <span className="arrow-down-button">
                {isDetailsOpen ? (
                  <img src={arrowUp} />
                ) : (
                  <img src={arrowDown} />
                )}
              </span>
            </Question>
            <Answer>
              자주묻는질문 01의 답변입니다. 자주묻는질문 01의 답변입니다.
              자주묻는질문 01의 답변입니다. 자주묻는질문 01의 답변입니다.
              자주묻는질문 01의 답변입니다.
            </Answer>
          </FAQBox>
        </FAQBoxWrap>
      </ShadowBox>
    </>
  );
}

export default FAQ;
