import styled from '@emotion/styled';

export const Title = styled.article`
  font-size: ${props => props.theme.fontSize[30]};
  font-weight: bold;
  margin: 30px;
  margin-bottom: 0;

  @media (max-width: ${props => props.theme.size.lg}) {
    margin: 5px;
    margin-bottom: 30px;
  }
`;

export const Form = styled.form`
  font-family: NotoSansCJKKR;
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  padding: 15px 68px;
  border-radius: 32px;
  border: none;
  background: ${props => props.theme.palette.yellow[100]};
  font-family: NotoSansCJKKR;
  font-size: ${props => props.theme.fontSize[18]};
  font-weight: bold;
`;
