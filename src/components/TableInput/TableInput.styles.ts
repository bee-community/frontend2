import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  border-bottom: solid 1px #ddd;
  font-size: ${props => props.theme.fontSize[15]};

  padding-bottom: 10px;
`;

export const TableHead = styled.div`
  width: 35%;
  font-weight: bold;
`;

export const TableBody = styled.input`
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: NotoSansCJKKR;
    font-weight: 300;
    color: #777;
  }
`;
