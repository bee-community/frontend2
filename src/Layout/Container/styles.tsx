import styled from '@emotion/styled';

export const Layout = styled.div`
  background: ${(props) => props.theme.color.white};
  border-radius: 10px;
  margin: 2vh 1.5vw;
  height: 95vh;
  position: fixed;
  width: 97vw;
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${(props) => props.theme.mq.mobile}{
    margin: 2vh 3vw;
    width: 94vw;
  };
`;

export const SideWraper = styled.div`
  overflow: auto;
  width: 300px;
  height: 95vh;
  right: 1.5vw;
  position: fixed;
  background: ${(props) => props.theme.color.gray};
  z-index:1;

  ${(props) => props.theme.mq.mobile}{
  display: none;
}`;

export const Contents = styled.div`
  flex-grow: 1;
  margin-right: 300px;
  display: flex;
  flex-direction: column;
  /* background:pink; */
  padding: 2vw;

  ${(props) => props.theme.mq.mobile}{
  margin: 0;
  }
`;

export const Search = styled.div``;
export const MyButton = styled.button`
  background: ${(props) => props.theme.mainColor.yellow};
`;
