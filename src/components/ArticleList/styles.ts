import styled from '@emotion/styled';

export const ArticleWrap = styled.div`
  display: grid;
  column-gap: 18px;
  row-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(20%, auto));
  margin-bottom: 40px;

  @media (max-width: ${props => props.theme.screenSize.md}) {
    grid-template-columns: repeat(2, minmax(20%, auto));
  }
`;
export const Article = styled.div``;
export const ArticleImage = styled.div`
  height: 10vw;
  background: gray;
  margin-bottom: 12px;
  border-radius: 20px;
  @media (max-width: ${props => props.theme.screenSize.md}) {
    height: 20vw;
  }
`;
export const ArticleTitle = styled.div`
  font-family: NotoSansCJKKR;
  font-size: ${props => props.theme.fontSize[18]};
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 5px;
`;
export const ArticleTags = styled.div`
  font-size: ${props => props.theme.fontSize[14]};
  font-weight: bold;
  margin-bottom: 5px;
`;
export const ArticleReaction = styled.div`
  font-size: ${props => props.theme.fontSize[14]};
  color: #777;
  margin-bottom: 5px;
`;
export const ArticleDate = styled.div`
  font-size: ${props => props.theme.fontSize[14]};
  color: #aaa;
  margin-bottom: 5px;
`;
