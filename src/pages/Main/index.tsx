import React from 'react';

import {
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
    <>
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
    </>
  );
};

export default Main;
