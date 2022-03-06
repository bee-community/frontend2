import styled from '@emotion/styled';

export const NickName = styled.div`
  .updatedNickName {
    font-family: NotoSansCJKKR;
    font-size: ${props => props.theme.fontSize[30]};
    font-weight: bold;
    margin-bottom: 4px;
  }
  .remainTimeWrap {
    padding: 12px 17px;
    border-radius: 44px;
    background-color: rgba(255, 229, 118, 0.27);
    display: flex;

    > img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
    .remainTime {
      font-weight: bold;
    }
  }
`;

export const Edit = styled.div`
  /* width: 120px; */
  display: flex;
  align-self: center;
  justify-content: flex-end;
  cursor: pointer;

  img {
    width: 17px;
    height: 17px;
    margin-right: 5px;
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
  }
  .customerServiceList {
    font-size: ${props => props.theme.fontSize[18]};
    font-weight: 500;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
  }
`;
