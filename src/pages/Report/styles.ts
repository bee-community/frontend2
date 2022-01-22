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

export const InputFileLabel = styled.label`
  span {
    font-size: 1rem;
    font-weight: 300;
    color: #777;
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const CheckBoxLabel = styled.label`
  width: 100%;
  margin-bottom: 30px;
  font-family: NotoSansCJKKR;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: underline;
  display: flex;
  align-items: center;

  input {
    width: 24px;
    height: 24px;
    border-radius: 6px;
    border: solid 1px #111;
    margin: 0 15px 0 0;
    cursor: pointer;
  }

  /* input:checked {
    background: ${props => props.theme.palette.purple[100]};
  } */

  a {
    margin-top: 4px;
  }
`;
