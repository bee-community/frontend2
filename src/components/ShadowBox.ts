import styled from '@emotion/styled';

export const ShadowBox = styled.article`
  margin: 30px;
  margin-bottom: 35px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.screenSize.lg}) {
    margin: 5px;
    margin-bottom: 35px;
  }

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    box-shadow: none;
    background-color: white;
    margin-bottom: 20px;
    padding: 20px;
  }
`;
