import Aside from 'components/Aside';
import Header from 'components/organisms/Header';
import { Outlet } from 'react-router';

import { TemplateWrap, MainWrap, Main } from './styles';

function Template() {
  return (
    <TemplateWrap>
      <Header />
      <MainWrap>
        <Main>
          <Outlet />
        </Main>
        <Aside />
      </MainWrap>
    </TemplateWrap>
  );
}

export default Template;
