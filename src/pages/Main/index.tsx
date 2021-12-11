import categoryImg from 'assets/images/categoryImg1.png';
import { useState } from 'react';

import {
  MainWrap,
  Section,
  TopBanner,
  SubTitle,
  Title,
  ButtonBlack,
  ButtonPurple,
  Category,
  Circle,
  CategoryBox,
  TitleWrap,
  ArticleWrap,
  Article,
  ArticleImage,
  ArticleTitle,
  ArticleTags,
  ArticleReaction,
  ArticleDate,
  Aside,
  Chat,
  DailyList,
  WeeklyList,
} from './styles';

const Main = () => {
  // dummy category
  const [categories, setCategories] = useState([
    { name: '재잘재잘', imgPath: 'categoryImg1' },
    { name: '재잘재잘', imgPath: 'categoryImg1' },
    { name: '재잘재잘', imgPath: 'categoryImg1' },
    { name: '재잘재잘', imgPath: 'categoryImg1' },
    { name: '재잘재잘', imgPath: 'categoryImg1' },
    { name: '재잘재잘', imgPath: 'categoryImg1' },
    { name: '재잘재잘', imgPath: 'categoryImg1' },
    { name: '재잘재잘', imgPath: 'categoryImg1' },
    { name: '재잘재잘', imgPath: '' },
    { name: '재잘재잘', imgPath: '' },
    { name: '재잘재잘', imgPath: '' },
    { name: '재잘재잘', imgPath: '' },
    { name: '재잘재잘', imgPath: '' },
  ]);

  // dummy articles
  const [articles, setArticles] = useState([
    {
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
  ]);

  return (
    <MainWrap>
      <Section>
        <TopBanner>
          <span>다양한 사람들 속에서 닮은 꼴 찾기</span>
          <span>꿀벌커뮤니티</span>
          <ButtonBlack>회원가입하고 포인트 받기</ButtonBlack>
        </TopBanner>

        <Title>카테고리</Title>
        <CategoryBox>
          {categories.map((category, index) => {
            return (
              <Category key={index}>
                <Circle>
                  <img src={categoryImg} />
                </Circle>
                <span>{category.name}</span>
              </Category>
            );
          })}
        </CategoryBox>

        <SubTitle>Today New!</SubTitle>
        <TitleWrap>
          <Title>오늘의 게시글</Title>
          <ButtonPurple>더보기</ButtonPurple>
        </TitleWrap>
        <ArticleWrap>
          {articles.map((article, index) => {
            return (
              <Article key={index}>
                <ArticleImage />
                <ArticleTitle>지금 메가마트에서 메가 세일해</ArticleTitle>
                <ArticleTags>#꿀팁 #꿀팁 #꿀팁</ArticleTags>
                <ArticleReaction>하트 11 코멘트 23</ArticleReaction>
                <ArticleDate>2021.10.01 4:00</ArticleDate>
              </Article>
            );
          })}
        </ArticleWrap>

        <SubTitle>Weekly New!</SubTitle>
        <TitleWrap>
          <Title>이번주의 베스트 게시글</Title>
          <ButtonPurple>더보기</ButtonPurple>
        </TitleWrap>
        <ArticleWrap>
          {articles.map((article, index) => {
            return (
              <Article key={index}>
                <ArticleImage />
                <ArticleTitle>지금 메가마트에서 메가 세일해</ArticleTitle>
                <ArticleTags>#꿀팁 #꿀팁 #꿀팁</ArticleTags>
                <ArticleReaction>하트 11 코멘트 23</ArticleReaction>
                <ArticleDate>2021.10.01 4:00</ArticleDate>
              </Article>
            );
          })}
        </ArticleWrap>
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
