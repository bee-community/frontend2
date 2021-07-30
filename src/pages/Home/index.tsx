import React from 'react';
import Button from 'components/Button';
import Chat from 'components/Chat';
import Feed from 'components/Feed';
import Statistics from 'components/Statistics';

import { Header, MenuBar, Title } from './styles';

const Home = () => {
  return (
    <>
      <section>
        <Header>
          <MenuBar />
          <Title />
          <Button />
        </Header>
        <Feed />
      </section>
      <section>
        <Header>
          <Button />
        </Header>
        <Chat />
        <Statistics />
      </section>
    </>
  );
};

export default Home;
