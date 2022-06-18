import styled from '@emotion/styled';

export const StyledArticleBox = styled.div`
  font-family: NotoSansCJKKR;
  font-size: ${props => props.theme.fontSize[14]};

  & > a > img {
    height: 10vw;
    width: 100%;
    object-fit: cover;
    margin-bottom: 12px;
    border-radius: 20px;

    @media (max-width: ${props => props.theme.screenSize.md}) {
      height: 20vw;
    }
  }

  .title {
    font-size: ${props => props.theme.fontSize[18]};
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 5px;
  }
  .tags {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .reaction {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #777;
    margin-bottom: 5px;

    > img {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
    > span {
      margin-right: 5px;
    }
  }
  .date {
    color: #aaa;
    margin-bottom: 5px;
  }
`;
