import styled from '@emotion/styled';

export const Header = styled.header`
  height: 70px;
  display: inline-flex;
  margin-bottom: 30px;

  ${(props) => props.theme.mq.mobile}{
    margin-bottom: 10px;
    height: 40px;
  }
`;

export const HomeTitle = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 10;
  margin-left: 20px;
  padding-top: 5px;
`;

export const SiteName = styled.div`
  font-size: 1.6rem;
  line-height: 120%;
  margin-bottom: 5px;
`;

export const SubTitle = styled.div`
  font-size: 1.2rem;
  color: gray;
`;
