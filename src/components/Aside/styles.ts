import styled from '@emotion/styled';

// NOTE: Main side contents-Aside
export const AsideWrap = styled.aside`
  height: calc(100vh - 200px);
  background-color: ${props => props.theme.palette.background.gray};
  border-radius: 0 40px 40px 0;
  overflow-y: scroll;
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: ${props => props.theme.size.lg}) {
    display: none;
    height: auto;
  }
`;
export const Bio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > span {
    font-size: ${props => props.theme.fontSize[24]};
    font-weight: bold;
  }
  & > a {
    display: flex;
    flex-direction: row;
    color: inherit;
    text-decoration: none;
    font-weight: bold;

    & > img {
      width: 22px;
      height: 22px;
      margin-right: 6px;
    }
    & > div {
      margin-top: 4px;
    }
  }
`;
export const SideListWrap = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;

    & > span {
      font-size: ${props => props.theme.fontSize[20]};
      font-weight: bold;
    }
  }
`;

export const SideList = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
    list-style-type: none;
    display: flex;
    flex-direction: row;
  }
`;

export const Order = styled.div`
  width: 26px;
  height: 21px;
  border-radius: 50%;
  background-color: white;
  text-align: center;
  font-size: ${props => props.theme.fontSize[12]};
  font-weight: bold;
  vertical-align: center;
  padding-top: 5px;
  margin-right: 8px;
`;

export const ListTitle = styled.div`
  margin-top: 3px;

  & > div:nth-child(2) {
    font-size: ${props => props.theme.fontSize[14]};
    color: #777;
  }
`;

export const ButtonPurple = styled.button`
  background-color: ${props => props.theme.palette.purple[100]};
  border: none;
  font-weight: bold;
  color: #fff;
  padding: 7px 20px 7px 22px;
  border-radius: 19px;

  @media (max-width: ${props => props.theme.size.xl}) {
    padding: 4px 17px 3px 17px;
    font-size: ${props => props.theme.fontSize[13]};
  }
`;
