import categoryImg from 'assets/images/categoryImg1.png';
import mypageButton from 'assets/images/mypage_button.png';
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
  Bio, // Chat,
  Order,
  ListTitle,
  SideListWrap,
  SideList,
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

  // dummy popular Article
  const [popularArticle, setPopularArticle] = useState([
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
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

        <TitleWrap>
          <Title>카테고리</Title>
          <ButtonPurple>전체보기</ButtonPurple>
        </TitleWrap>
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
        <Bio>
          <span>닉네임</span>
          <a href="/mypage">
            <img src={mypageButton} />
            <div>마이페이지</div>
          </a>
        </Bio>
        <SideListWrap>
          <div>
            <span>인기게시글</span>
            <ButtonPurple>+</ButtonPurple>
          </div>
          <SideList>
            {popularArticle.map((article, index) => {
              return (
                <li key={index}>
                  <a href={`article/${index}`}>
                    <Order>{index + 1}</Order>
                    <ListTitle>
                      <div>
                        <b>#연애</b> 오늘 있었던 일 얘기할게요
                      </div>
                      <div>1일 23시간 24분 후 종료</div>
                    </ListTitle>
                  </a>
                </li>
              );
            })}
          </SideList>
        </SideListWrap>
      </Aside>
    </MainWrap>
  );
};

export default Main;
