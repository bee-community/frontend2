import styled from '@emotion/styled';

export const FilterZone = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  height: 10vh;
  margin-bottom: 30px;å

  ${(props) => props.theme.mq.mobile}{
    height: 7vh;
    margin-bottom: 10px;
  }
`;

export const FilterWrap = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  background: #ffffc3;
`;

export const Swiper = styled.div`
  width: 80px;
  height: 10vh;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${(props) => props.theme.mq.mobile}{
    height: 7vh;
  }
`;

export const SwiperButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
`;
