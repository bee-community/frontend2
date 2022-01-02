import styled from '@emotion/styled';

// NOTE: Header
export const HeaderWrap = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (max-width: ${props => props.theme.size.lg}) {
    height: 30px;
    font-size: ${props => props.theme.fontSize[13]};
  }
`;

export const Logo = styled.img`
  height: 47px;
  width: 239px;

  @media (max-width: ${props => props.theme.size.lg}) {
    display: none;
  }
`;
export const NoticeWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  height: 100%;

  @media (max-width: ${props => props.theme.size.lg}) {
    justify-content: flex-start;
  }
`;
export const Notice = styled.div`
  display: flex;
  width: 80%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  align-items: center;
  padding: 7px 20px;
  font-family: NotoSansCJKKR;

  & > span {
    font-weight: bold;
    margin-right: 10px;
  }

  @media (max-width: ${props => props.theme.size.lg}) {
    background-color: rgb(255, 242, 187);
    width: 100%;
    padding: 7px 15px;
  }
`;
export const Mbti = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 370px;
  justify-content: flex-end;

  @media (max-width: ${props => props.theme.size.lg}) {
    width: 180px;
  }

  @media (max-width: ${props => props.theme.size.md}) {
    width: 100px;
  }
`;
export const MyMbti = styled.div`
  padding: 8px 20px 8px;
  border-radius: 24px;
  background-color: ${props => props.theme.palette.black[100]};
  color: ${props => props.theme.palette.yellow[100]};
  font-size: 20px;
  font-weight: bold;
  font-family: NotoSansCJKKR;
  text-align: center;

  @media (max-width: ${props => props.theme.size.lg}) {
    padding: 6px 16px 7px;
    font-size: ${props => props.theme.fontSize[14]};
  }
`;
export const DropdownButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  margin-left: 10px;
  background-color: ${props => props.theme.palette.background.gray};

  @media (max-width: ${props => props.theme.size.lg}) {
    display: none;
  }
`;
