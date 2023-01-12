import Aside from 'components/chat/Aside';
import Header from 'components/organisms/Header';
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { useLocation } from 'react-router-dom';

import { useGetUserSelf } from '@hooks/queries/requests';
import useUserInfo from '@hooks/useUserInfo';

import { StyledTemplate, StyledMain, Main, StyledAside } from './styles';

function Template() {
  const mainRef = useRef<HTMLElement>(null);
  useUserInfo();
  useGetUserSelf();
  const { articleOpen } = useSelector((store: any) => store.openState);
  const { pathname } = useLocation();

  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <StyledTemplate articleOpen={articleOpen}>
      <Header />
      <StyledMain>
        <Main ref={mainRef}>
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
