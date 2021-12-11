import styled from '@emotion/styled';
import banner from 'assets/images/main_banner.png';
import bannerMobile from 'assets/images/main_banner_mobile.png';

export const MainWrap = styled.div`
  background-color: ${props => props.theme.palette.background.white};
  border-radius: 40px;
  display: grid;
  grid-template-columns: 1fr 370px;

  @media (max-width: ${props => props.theme.size.lg}) {
    grid-template-columns: 1fr;
  }
`;

// NOTE: Main contents-Section
export const Section = styled.section`
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  margin: 30px;
  overflow-y: scroll;

  @media (max-width: ${props => props.theme.size.lg}) {
    margin: 0;
    height: auto;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

// NOTE: main-title
export const TopBanner = styled.div`
  width: cal(100% - 40px);
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  padding-bottom: 26px;
  margin-bottom: 46px;
  border-radius: 33px;

  & > span:first-child {
    font-family: GmarketSansTTF;
    font-size: ${props => props.theme.fontSize[20]};
    font-weight: 300;
    margin-top: 25px;
    margin-bottom: 13px;
  }

  & > span {
    font-family: GmarketSansTTF;
    font-size: ${props => props.theme.fontSize[40]};
    font-weight: bold;
    margin-bottom: 20px;
  }
  & > button {
    width: 264px;
  }

  @media (max-width: ${props => props.theme.size.xl}) {
    background-color: #f7f3e9;
    background-image: url(${bannerMobile});
    background-size: contain;
    background-position: center;
    height: 18vw;
    padding: 0;
    margin-bottom: 20px;

    & > span {
      display: none;
    }
    & > button {
      font-size: ${props => props.theme.fontSize[13]};
      align-self: center;
      margin-top: 13.5vw;
      padding: 0.8vw 1vw;
      width: 220px;
    }
  }

  @media (max-width: ${props => props.theme.size.md}) {
    & > button {
      width: 160px;
      font-size: ${props => props.theme.fontSize[10]};
    }
  }
`;
export const SubTitle = styled.div`
  font-family: NotoSansCJKKR;
  font-weight: bold;
  color: ${props => props.theme.secondary};
  margin-bottom: 10px;
`;
export const Title = styled.div`
  font-family: NotoSansCJKKR;
  font-weight: bold;
  font-size: ${props => props.theme.fontSize[26]};

  @media (max-width: ${props => props.theme.size.xxl}) {
    font-size: ${props => props.theme.fontSize[19]};
  }
`;

export const ButtonBlack = styled.button`
  background-color: ${props => props.theme.palette.background.black};
  border: none;
  border-radius: 33px;
  color: ${props => props.theme.primary};
  font-weight: 500;
  padding: 12px 43px;
`;
export const ButtonPurple = styled.button`
  background-color: ${props => props.theme.palette.purple[100]};
  border: none;
  font-weight: bold;
  color: #fff;
  padding: 7px 20px 7px 22px;
  border-radius: 19px;

  @media (max-width: ${props => props.theme.size.xxl}) {
    padding: 4px 17px 3px 17px;
    font-size: ${props => props.theme.fontSize[13]};
  }
`;

// NOTE: main-category
export const CategoryBox = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  margin-top: 20px;
  margin-bottom: 35px;

  @media (max-width: ${props => props.theme.size.xxl}) {
    grid-template-columns: repeat(10, 1fr);
    margin-top: 12px;

    & > div:nth-child(n + 11) {
      display: none;
    }
  }
  @media (max-width: ${props => props.theme.size.xl}) {
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 27px;

    & > div:nth-child(n + 8) {
      display: none;
    }
  }
  @media (max-width: ${props => props.theme.size.md}) {
    grid-template-columns: repeat(5, 1fr);

    & > div:nth-child(n + 6) {
      display: none;
    }
  }
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    color: #111;
    white-space: nowrap;
  }
`;

export const Circle = styled.div`
  background-color: ${props => props.theme.primary};
  padding: 30%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.11);

  & > img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${props => props.theme.size.md}) {
    max-width: 35px;
    max-height: 35px;
    padding: 23%;
  }
`;

// NOTE: main-articles
export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: ${props => props.theme.size.xl}) {
    margin-bottom: 10px;
  }
`;

export const ArticleWrap = styled.div`
  display: grid;
  column-gap: 18px;
  row-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(20%, auto));
  margin-bottom: 40px;

  @media (max-width: ${props => props.theme.size.md}) {
    grid-template-columns: repeat(2, minmax(20%, auto));
  }
`;
export const Article = styled.div``;
export const ArticleImage = styled.div`
  height: 10vw;
  background: gray;
  margin-bottom: 12px;
  border-radius: 20px;
  @media (max-width: ${props => props.theme.size.md}) {
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

// NOTE: Main side contents-Aside
export const Aside = styled.aside`
  height: calc(100vh - 200px);
  background-color: ${props => props.theme.palette.background.gray};
  border-radius: 0 40px 40px 0;
  overflow-y: scroll;
  padding: 35px;

  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: ${props => props.theme.size.lg}) {
    display: none;
    height: auto;
  }
`;
export const Chat = styled.div``;
export const DailyList = styled.div`
  height: 300px;
  background: #ddd;
  margin-bottom: 70px;
`;
export const WeeklyList = styled.div`
  height: 300px;
  background: #ddd;
`;
