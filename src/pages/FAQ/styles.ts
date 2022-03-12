import styled from '@emotion/styled';

export const Title = styled.article`
  font-size: ${props => props.theme.fontSize[30]};
  font-weight: bold;
  margin: 30px;
  margin-bottom: 0;

  @media (max-width: ${props => props.theme.screenSize.lg}) {
    margin: 5px;
    margin-bottom: 30px;
  }
`;
export const FAQBoxWrap = styled.article`
  width: 100%;
  border-top: solid 1px #aaa;
  border-bottom: solid 1px #aaa;
`;

export const FAQBox = styled.details<{ isDetailsOpen: boolean }>`
  width: 100%;
  ${props => props.isDetailsOpen && 'background-color: #f9f9f9;'}
`;

export const Question = styled.summary`
  list-style: none;
  border-bottom: solid 1px #ddd;
  border-top: solid 1px #ddd;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: NotoSansCJKKR;
  font-weight: bold;
  color: #111;
  cursor: pointer;

  .arrow-down-button > img {
    width: 19px;
  }
`;

export const Answer = styled.div`
  padding: 20px;
  font-family: NotoSansCJKKR;
  font-weight: 300;
  color: #333;
`;
