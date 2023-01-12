import styled from '@emotion/styled';

import { VerticalTicker } from '@components/Ticker/VerticalTicker';

export const NoticeBarWrap = styled.article`
  width: 75%;
  display: flex;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  align-items: center;
  padding: 7px 20px;
  font-family: NotoSansCJKKR;

  & > span {
    font-weight: bold;
    margin-right: 10px;
  }

  .notice-contents {
    flex: 1;
  }

  @media (max-width: ${props => props.theme.screenSize.lg}) {
    background-color: rgb(255, 242, 187);
    padding: 7px 20px;
    justify-self: start;

    .notice-contents {
      height: 19px;
    }
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;

  & > img {
    cursor: pointer;
    width: 10px;
  }
`;

export const Ticker = styled(VerticalTicker)`
  height: 20px;
  display: flex;
`;
