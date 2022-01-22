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

export const QuestionTable = styled.table`
  width: 100%;
  border-top: solid 1px #aaa;
  border-bottom: solid 1px #aaa;
  text-align: left;
  border-spacing: unset;
  margin-bottom: 30px;
  font-size: 1rem;

  .title {
    border-bottom: solid 1px #ddd;
  }

  th {
    width: 20%;
    min-width: 60px;
    padding: 20px;
    background: #f4f4f4;
    vertical-align: top;
  }

  td {
    padding: 15px;

    input {
      font-size: 1rem;
      width: 100%;
      padding: 7px 5px;
      border-radius: 5px;
      border: solid 1px #ddd;
    }
    input:focus,
    textarea:focus {
      outline: none;
    }
    input::placeholder,
    textarea::placeholder {
      font-weight: 300;
      color: #777;
    }

    textarea {
      font-family: NotoSansCJKKR;
      font-size: 1rem;
      width: 100%;
      min-height: 30vh;
      padding: 7px 5px;
      border-radius: 5px;
      border: solid 1px #ddd;
      resize: none;
    }
  }
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
