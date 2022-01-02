import ArticleList from 'components/ArticleList';
import CategoryList from 'components/CategoryList';

import {
  MainWrap,
  TopBanner,
  SubTitle,
  Title,
  ButtonBlack,
  ButtonPurple,
  TitleWrap,
} from './styles';

function Main() {
  return (
    <MainWrap>
      <TopBanner>
        <span>다양한 사람들 속에서 닮은 꼴 찾기</span>
        <span>꿀벌커뮤니티</span>
        <ButtonBlack>회원가입하고 포인트 받기</ButtonBlack>
      </TopBanner>

      <TitleWrap>
        <Title>카테고리</Title>
        <ButtonPurple>전체보기</ButtonPurple>
      </TitleWrap>
      <CategoryList />

      <SubTitle>Today New!</SubTitle>
      <TitleWrap>
        <Title>오늘의 게시글</Title>
        <ButtonPurple>더보기</ButtonPurple>
      </TitleWrap>
      <ArticleList />

      <SubTitle>Weekly New!</SubTitle>
      <TitleWrap>
        <Title>이번주의 베스트 게시글</Title>
        <ButtonPurple>더보기</ButtonPurple>
      </TitleWrap>
      <ArticleList />
    </MainWrap>
  );
}

export default Main;
