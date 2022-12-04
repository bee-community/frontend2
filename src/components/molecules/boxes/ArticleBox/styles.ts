import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledArticleBox = styled.div`
  font-family: NotoSansCJKKR;
  font-size: ${props => props.theme.fontSize[12]};

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
    margin-top: 6px;
    margin-bottom: 5px;
  }
`;

const loading = css`
  border-radius: 20px;
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #ededed 30px,
    #e0e0e0 60px
  );
  animation: refresh 2s infinite ease-out;

  @keyframes refresh {
    0% {
      background-position: calc(-100px);
    }
    40%,
    100% {
      background-position: 320px;
    }
  }
`;

export const StyledLoadingArticleBox = styled.div`
  font-family: NotoSansCJKKR;
  font-size: ${props => props.theme.fontSize[14]};

  .img {
    height: 10vw;
    width: 100%;
    margin-bottom: 12px;
    ${loading}
    @media (max-width: ${props => props.theme.screenSize.md}) {
      height: 20vw;
    }
  }

  .title {
    width: 100px;
    height: 16px;
    ${loading}
    margin-bottom: 5px;
  }
`;
