import styled from '@emotion/styled';

export const StyledArticleTitleContainer = styled.section`
  margin-bottom: 34px;
  font-family: NotoSansCJKKR;

  h2 {
    margin: 34px 0 10px;
    font-size: ${props => props.theme.fontSize[30]};
    font-weight: bold;
  }
  .article-infomation {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .article-tags {
      font-size: ${props => props.theme.fontSize[20]};
      font-weight: bold;

      span {
        margin-right: 0.3rem;i
      }
    }
    .article-date {
      color: #aaa;
    }
  }
  .article-feedbacks {
    margin-top: 5px;
    font-size: ${props => props.theme.fontSize[15]};
    color: #aaa;

    span{
      margin-right: 0.3rem;i
    }
  }
`;
