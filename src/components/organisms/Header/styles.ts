import styled from '@emotion/styled';

// NOTE: Header
export const HeaderWrap = styled.header<{ articleOpen: boolean }>`
  display: grid;
  grid-template-columns: 239px 1fr 370px;
  align-items: center;
  justify-items: end;

  & > a:nth-of-type(1) {
    justify-self: start;
    display: flex;
    align-items: center;
  }

  @media (max-width: ${props => props.theme.screenSize.lg}) {
    padding: 15px 0;
    grid-template-columns: 0 1fr 200px;
  }

  @media (max-width: ${props => props.theme.screenSize.md}) {
    padding: 15px 0;
    grid-template-columns: 0 1fr 100px;
  }

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin: ${props => (props.articleOpen ? `15px 15px 0px 15px` : `0px`)};
  }
`;

export const Logo = styled.img`
  height: 40px;

  @media (max-width: ${props => props.theme.screenSize.lg}) {
    display: none;
  }
`;

export const Bio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${props => props.theme.fontSize[20]};
  font-family: NotoSansCJKKR;
  font-weight: bold;

  & > span {
    margin-top: 2px;
  }

  & > img {
    width: 22px;
    height: 22px;
    margin-left: 8px;
  }

  @media (max-width: ${props => props.theme.screenSize.lg}) {
    font-size: ${props => props.theme.fontSize[17]};
  }

  @media (max-width: ${props => props.theme.screenSize.md}) {
    font-size: ${props => props.theme.fontSize[12]};
  }
`;
