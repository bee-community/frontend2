import styled from '@emotion/styled';

export const SignUpWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.background.yellow};

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    height: calc(100vh + 350px);
  }

  .signupTitle {
    font-size: ${props => props.theme.fontSize[22]};
    font-weight: 600;
    margin-bottom: 30px;
  }
  .linkToLogin {
    font-size: 1rem;
    border-bottom: 1px solid #777;
    padding-bottom: 3px;
    width: 100px;
    text-align: center;
    display: flex;
    align-self: flex-end;
    font-family: NotoSansCJKKR;
    font-weight: 300;
    color: #777;
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      margin-top: 15px;
    }
  }
`;

export const WhiteBox = styled.article`
  background: white;
  padding: 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin: 0px 20px;
  }
`;

export const Error = styled.div`
  font-size: 1rem;
  color: red;
  margin-bottom: 5px;
`;
