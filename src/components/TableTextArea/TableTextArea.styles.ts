import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: solid 1px #ddd;
  font-size: ${props => props.theme.fontSize[15]};

  padding-bottom: 15px;
`;

export const TableHead = styled.div`
  width: 35%;
  font-weight: bold;
`;

export const TableBody = styled.textarea`
  border: none;
  width: 100%;
  margin-top: 10px;
  height: 20vh;
  padding: 0;
  &:focus {
    outline: none;
  }
  resize: none;
  &::placeholder {
    font-family: NotoSansCJKKR;
    font-weight: 300;
    color: #777;
  }
`;
