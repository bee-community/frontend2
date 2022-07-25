import styled from '@emotion/styled';

// NOTE: Main side contents-Aside
export const AsideWrap = styled.aside`
  height: calc(100vh - 140px);
  background-color: ${props => props.theme.background.gray};
  border-radius: 0 40px 40px 0;
  /* overflow-y: scroll; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${props => props.theme.screenSize.lg}) {
    display: none;
    height: auto;
    overflow-y: none;
  }
  @media (max-width: ${props => props.theme.screenSize.md}) {
    display: block;
    height: calc(var(--vh) * 100 - 60px);
    border-radius: 0;
    overflow: hidden;
    padding-bottom: 0px;
    -webkit-tap-highlight-color: transparent;
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
  & > img {
    width: 38px;
    height: 38px;
    margin-right: 6px;
  }
  & > a {
    display: flex;
    flex-direction: row;
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

  @media (max-width: ${props => props.theme.screenSize.xl}) {
    padding: 4px 17px 3px 17px;
    font-size: ${props => props.theme.fontSize[13]};
  }
`;

export const Box = styled.div`
  margin: 15px 0px 10px 0px;
  border-radius: 44px;
  // box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
  display: flex;
  // justify-content: center;
  // align-items: center;
  height: 40px;
  background-color: white;
  & > span:nth-child(1) {
    flex: 6;
    display: flex;
    justify-content: center;
    border-radius: 44px;
    height: 40px;
    cursor: pointer;
    align-items: center;
  }
  & > span:nth-child(2) {
    flex: 6;
    display: flex;
    justify-content: center;
    border-radius: 44px;
    height: 40px;
    cursor: pointer;
    align-items: center;
  }
  @media (max-width: ${props => props.theme.screenSize.md}) {
    width: calc(var(--vw) * 82);
    margin-left: calc(var(--vw) * 3.5);
  }
`;

export const ChatBox = styled.div`
  //margin : 15px 0px 10px 0px;
  border-radius: 10px;
  // box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
  display: flex;
  // justify-content: center;
  // align-items: center;
  cursor: pointer;
  height: 370px;
  background-color: white;
`;

export const Chats = styled.div`
  //margin : 15px 0px 10px 0px;
  border-radius: 10px;
  // box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
  display: flex;
  // justify-content: center;
  // align-items: center;
  cursor: pointer;
  height: 370px;
  background-color: white;
`;

export const Label = styled.label`
  margin-bottom: 16px;
  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
    color: white;
  }
`;

export const Label2 = styled.label`
  margin-bottom: 16px;
  position: relative;
  & > div {
    display: flex;
  }
  & > div > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
    color: white;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  color: rgwba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 44px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;
  &:focus {
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px #ffe576;
  }
`;

export const Button = styled.button`
  margin-bottom: 12px;
  margin-top: 42px;
  width: 100%;
  max-width: 100%;
  background-color: #ffe576;
  border: none;
  font-size: 18px;
  color: black;
  font-weight: 900;
  height: 44px;
  min-width: 96px;
  padding: 0 16px 3px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #ffd570;
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const ChatButton = styled.button<{
  backgroundColor: string;
  fontWeight: string;
}>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 44px;
  height: 40px;
  width: 150px;
  color: black;
  font-size: 14px;
  font-weight: ${(props: any) => props.fontWeight};
  background-color: ${(props: any) => props.backgroundColor};
`;
