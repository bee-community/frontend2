import React from 'react';
import Button from 'components/Button';
import Container from 'Layout/Container';
import ContentList from 'components/ContentList';
import FilterList from 'components/FilterList';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import { Header, HomeTitle, SiteName, SubTitle } from './styles';

const Home = () => (
  <Container

  // sideContents={
  //   <>
  //     <Chat />
  //     <Statistics />
  //   </>
  // }
  >
    <Header>
      <Icon path={mdiMenu} title="menu" size={2} />
      <HomeTitle>
        <SiteName>개미커뮤니티</SiteName>
        <SubTitle>
          앤트닷넷은 취미로 제작한 투표/커뮤니티 사이트입니다.
        </SubTitle>
      </HomeTitle>
      <Button style={{ marginTop: 5 }}>글쓰기</Button>
    </Header>
    <FilterList />
    <ContentList />
  </Container>
);

export default Home;
