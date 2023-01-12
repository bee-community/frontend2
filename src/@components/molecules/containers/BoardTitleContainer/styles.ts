import styled from '@emotion/styled';

export const StyledBoardTitleContainer = styled.article`
  display: grid;
  position: relative;
  grid-template-columns: 74px 1fr 215px;
  align-items: center;
  grid-gap: 12px;

  @media (max-width: ${props => props.theme.screenSize.xl}) {
    grid-template-columns: 74px 1fr 200px;
  }

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 74px 1fr 145px;
  }

  @media (max-width: ${props => props.theme.screenSize.mobileM}) {
    grid-template-columns: 70px 1fr 140px;
  }

  @media (max-width: ${props => props.theme.screenSize.mobileS}) {
    grid-template-columns: 70px 1fr 150px;
  }
  .board-icon {
    width: 30px;
    height: 30px;
  }

  .board-name {
    font-family: NotoSansCJKKR;
    font-size: ${props => props.theme.fontSize[30]};
    font-weight: bold;

    @media (max-width: ${props => props.theme.screenSize.mobileS}) {
      font-size: ${props => props.theme.fontSize[22]};
    }
  }

  .button-with-icon-image {
    width: 11px;
    height: 11px;
  }
`;

export const DropDownMenu = styled.ul<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 58px;
  margin: 0;
  padding: 0;
  z-index: 10;
  width: 120px;

  li {
    list-style-type: none;
    margin-bottom: 10px;

    @media (max-width: ${props => props.theme.screenSize.xl}) {
      margin-bottom: 5px;
    }
    button {
      width: 100%;
      font-size: ${props => props.theme.fontSize[15]};

      @media (max-width: ${props => props.theme.screenSize.mobileL}) {
        font-size: ${props => props.theme.fontSize[10]};
      }

      @media (max-width: ${props => props.theme.screenSize.mobileM}) {
        font-size: ${props => props.theme.fontSize[10]};
      }

      @media (max-width: ${props => props.theme.screenSize.mobileS}) {
        font-size: ${props => props.theme.fontSize[8]};
      }
    }
  }
`;
