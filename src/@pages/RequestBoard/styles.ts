import styled from '@emotion/styled';

export const Title = styled.article`
  font-size: ${props => props.theme.fontSize[30]};
  font-weight: bold;
  margin: 30px;
  margin-bottom: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screenSize.lg}) {
    margin: 5px;
    margin-bottom: 30px;
  }
`;

export const RequestBoxsWrap = styled.section`
  width: 100%;
`;
