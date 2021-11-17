import React from 'react';

import {
  MainWrap,
  Section,
  Title,
  Category,
  TodayNew,
  WeeklyNew,
  Aside,
  Chat,
  DailyList,
  WeeklyList,
} from './styles';

const Main = () => {
  return (
    <MainWrap>
      <Section>
        <Title />
        <Category />
        <TodayNew />
        <WeeklyNew />
      </Section>
      <Aside>
        <Chat />
        <DailyList />
        <WeeklyList />
      </Aside>
    </MainWrap>
  );
};

export default Main;
