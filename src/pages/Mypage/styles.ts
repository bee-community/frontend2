import styled from '@emotion/styled';

export const MyPageWrap = styled.div`
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    background-color: #f4f4f4;
  }
`;

export const NickName = styled.div`
  width: 100%;

  .upperWrapper {
    display: flex;

    justify-content: space-between;
  }
  .updatedNickName {
    font-family: NotoSansCJKKR;
    font-size: ${props => props.theme.fontSize[30]};
    font-weight: bold;
    margin-bottom: 10px;
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      font-size: ${props => props.theme.fontSize[22]};
      margin-bottom: 7px;
    }
  }
  .remainTimeWrap {
    padding: 12px 17px;
    border-radius: 44px;
    background-color: rgba(255, 229, 118, 0.27);
    display: flex;
    font-size: ${props => props.theme.fontSize[15]};

    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      font-size: ${props => props.theme.fontSize[12]};
    }

    @media (max-width: ${props => props.theme.screenSize.mobileS}) {
      font-size: ${props => props.theme.fontSize[7]};
    }
    > img {
      width: 20px;
      height: 20px;
      margin-right: 8px;

      @media (max-width: ${props => props.theme.screenSize.mobileL}) {
        width: 15px;
        height: 15px;
      }
    }
    .remainTime {
      font-weight: bold;
    }
  }
`;

export const Edit = styled.div`
  /* width: 120px; */
  display: flex;
  align-self: flex-start;
  justify-content: flex-end;
  cursor: pointer;
  margin-top: 5px;
  img {
    width: 17px;
    height: 17px;
    margin-right: 5px;

    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      width: 11px;
      height: 11px;
      margin-right: 0px;
    }
  }
`;

export const MyPageCategory = styled.section`
  margin: 0 30px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 22px;

  @media (max-width: ${props => props.theme.screenSize.xl}) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 22px;
  }

  @media (max-width: ${props => props.theme.screenSize.lg}) {
    margin: 0 5px;
    margin-bottom: 50px;
  }

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 22px;
  }
`;

export const Box = styled.div`
  padding: 10px 0;
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    box-shadow: none;
    background-color: white;
  }
  > img {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }

  .caption {
    font-size: ${props => props.theme.fontSize[12]};
  }

  .number {
    font-size: ${props => props.theme.fontSize[24]};
    font-weight: bold;
  }

  .title {
    font-size: ${props => props.theme.fontSize[15]};
    margin-top: 5px;
    font-weight: bold;
    text-align: center;

    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      font-size: ${props => props.theme.fontSize[12]};
    }
  }
`;

export const CustomerService = styled.section`
  margin: 0 30px;
  margin-bottom: 50px;

  @media (max-width: ${props => props.theme.screenSize.lg}) {
    margin: 0 5px;
  }

  .title {
    font-size: ${props => props.theme.fontSize[26]};
    font-weight: bold;
    margin-bottom: 30px;

    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      font-size: ${props => props.theme.fontSize[20]};
    }
  }
  .customerServiceList {
    font-size: ${props => props.theme.fontSize[18]};
    font-weight: 500;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;

    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      font-size: ${props => props.theme.fontSize[14]};
    }
  }
`;
