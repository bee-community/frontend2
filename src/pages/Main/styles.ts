import styled from '@emotion/styled';
import banner from 'assets/images/banner/main_banner.png';
import bannerMobile from 'assets/images/banner/main_banner_mobile.png';

export const MainWrap = styled.section`
  margin: 30px;

  @media (max-width: ${props => props.theme.screenSize.lg}) {
    margin: 0;
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

  & > span:first-of-type {
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

  @media (max-width: ${props => props.theme.screenSize.xl}) {
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

  @media (max-width: ${props => props.theme.screenSize.md}) {
    & > button {
      width: 160px;
      font-size: ${props => props.theme.fontSize[10]};
    }
  }
`;
export const SubTitle = styled.div`
  font-family: NotoSansCJKKR;
  font-weight: bold;
  color: ${props => props.theme.palette.purple[100]};
  margin-bottom: 10px;
`;
export const Title = styled.div`
  font-family: NotoSansCJKKR;
  font-weight: bold;
  font-size: ${props => props.theme.fontSize[26]};

  @media (max-width: ${props => props.theme.screenSize.xl}) {
    font-size: ${props => props.theme.fontSize[19]};
  }
`;

export const ButtonBlack = styled.button`
  background-color: ${props => props.theme.background.black};
  border: none;
  border-radius: 33px;
  color: ${props => props.theme.palette.yellow[100]};
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

  @media (max-width: ${props => props.theme.screenSize.xl}) {
    padding: 4px 17px 3px 17px;
    font-size: ${props => props.theme.fontSize[13]};
  }
`;

// NOTE: main-articles
export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: ${props => props.theme.screenSize.xl}) {
    margin-bottom: 10px;
  }
`;
