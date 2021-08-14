import Chat from 'components/Chat';
import Statistics from 'components/Statistics';
import React from 'react';
import { Layout, SideWraper, Contents, Search, MyButton } from './styles';

interface ContainerProps {
  children: React.ReactNode;
  // sideContents: React.ReactNode;
}

const Side: React.FC = ({ children }: any) => (
  <SideWraper>
    <MyButton />
    <Search />
    {children}
  </SideWraper>
);

// const Container = ({ children, sideContents }: ContainerProps) => (
const Container = ({ children }: ContainerProps) => (
  <Layout>
    <Contents>{children}</Contents>
    <Side>
      <Chat />
      <Statistics />
    </Side>
  </Layout>
);

export default Container;
