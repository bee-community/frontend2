import Aside from 'components/Aside';
import Header from 'components/Header';
import { Outlet } from 'react-router';

import { LayoutWrap, Wrap } from './styles';

function Layout() {
  return (
    <LayoutWrap>
      <Header />
      <Wrap>
        <Outlet />
        <Aside />
      </Wrap>
    </LayoutWrap>
  );
}

export default Layout;
