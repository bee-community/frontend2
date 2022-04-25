import styled from '@emotion/styled';
import bannerMobile from 'assets/images/banners/main-banner-mobile.png';
import banner from 'assets/images/banners/main-banner.png';

export const StyledBannerBox = styled.article`
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
  font-family: GmarketSansTTF;

  & > span:nth-of-type(1) {
    font-size: ${props => props.theme.fontSize[20]};
    font-weight: 300;
    margin-top: 25px;
    margin-bottom: 13px;
  }

  & > span:nth-of-type(2) {
    font-size: ${props => props.theme.fontSize[40]};
    font-weight: bold;
    margin-bottom: 20px;
  }

  & > button {
    width: 264px;
  }
