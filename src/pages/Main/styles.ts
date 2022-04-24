import styled from '@emotion/styled';
import bannerMobile from 'assets/images/banners/main-banner-mobile.png';
import banner from 'assets/images/banners/main-banner.png';

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
