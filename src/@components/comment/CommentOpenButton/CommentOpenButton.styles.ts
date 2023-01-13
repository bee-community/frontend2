import styled from '@emotion/styled';

export const CommentsOpenButton = styled.div`
  list-style: none;
  font-family: NotoSansCJKKR;
  font-weight: 500;
  color: #777;
  margin-bottom: 10px;
  height: 25px;
  display: flex;

  img {
    align-self: center;
    width: 11px;
    margin-bottom: 5px;
    margin-left: 10px;

    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      margin-bottom: 10px;
    }
  }

  & > span:nth-child(1) {
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      margin-left: 15px;
    }
  }
`;
