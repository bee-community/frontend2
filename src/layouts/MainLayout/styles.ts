import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const MainLayoutWrap = styled.div`
  margin: 34px 40px 44px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 78px);
`;

// NOTE: Header
export const Header = styled.header`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Logo = styled.img`
  height: 47px;
  width: 239px;
`;
export const NoticeWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  height: 100%;
`;
export const Notice = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  align-items: center;
  padding: 7px 20px;
`;
export const Mbti = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 370px;
  justify-content: flex-end;
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
`;
export const DropdownButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  margin-left: 10px;
  background-color: ${props => props.theme.palette.background.gray};
`;

// NOTE: Contents
export const Section = styled.div`
  display: flex;
  flex: 1;
`;

// NOTE: Footer
export const Footer = styled.footer``;
