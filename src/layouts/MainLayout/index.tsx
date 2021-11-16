// import { useState } from 'react';
import { Outlet } from 'react-router';

import { Header, Logo, Notice, MBTI, Footer } from './styles';

const MainLayout = () => {
  return (
    <>
      <Header>
        <Logo />
        <Notice />
        <MBTI />
      </Header>
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default MainLayout;
