import styled from '@emotion/styled';

export const StyledArticleFeedbackContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 2px;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  & > button {
    margin-right: 12px;
    margin-bottom: 10px;
  }
`;
