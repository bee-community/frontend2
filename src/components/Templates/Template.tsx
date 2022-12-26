import Aside from 'components/Aside';
import Header from 'components/organisms/Header';
import useUserInfo from 'hooks/useUserInfo';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';

import { StyledTemplate, StyledMain, Main, StyledAside } from './styles';

function Template() {
  useUserInfo();
  const { articleOpen } = useSelector((store: any) => store.openState);

  return (
    <StyledTemplate articleOpen={articleOpen}>
      <Header />
      <StyledMain>
        <Main>
          <Outlet />
        </Main>
        <StyledAside>
          <Aside />
        </StyledAside>
      </StyledMain>
    </StyledTemplate>
  );
}

export default Template;
