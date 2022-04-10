import Aside from 'components/Aside';
import Header from 'components/Header';
import { Outlet } from 'react-router';

import { LayoutWrap, Wrap, PageWrap } from './styles';

function Layout() {
  return (
    <LayoutWrap>
      <Header />
      <Wrap>
        <PageWrap>
          <Outlet />
        </PageWrap>
        <Aside />
      </Wrap>
    </LayoutWrap>
  );
}

export default Layout;
