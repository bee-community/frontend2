import styled from '@emotion/styled';

export const StyledIconWithLinkContainer = styled.div`
  > a {
    display: grid;
    grid-template-rows: repaet(2, 1fr);
    justify-items: center;
    gap: 10px;
    font-family: NotoSansCJKKR;

    img {
      width: 30px;
    }
  }
`;
