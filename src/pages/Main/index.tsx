import ArticleList from 'components/ArticleList';
import CategoryList from 'components/CategoryList';
import Button from 'components/atoms/Button';

import { TopBanner, SubTitle, Title, TitleWrap } from './styles';

function Main() {
  return (
    <>
      <TopBanner>
        <span>다양한 사람들 속에서 닮은 꼴 찾기</span>
        <span>꿀벌커뮤니티</span>
        <Button
          buttonType="contained"
          color="black"
          radius="round"
          css={{
            fontWeight: '500',
          }}>
          회원가입하고 포인트 받기
        </Button>
      </TopBanner>

      <TitleWrap>
        <Title>카테고리</Title>
        <Button buttonType="contained" color="black" radius="round">
          전체보기
        </Button>
      </TitleWrap>
      <CategoryList />

      <SubTitle>Today New!</SubTitle>
      <TitleWrap>
        <Title>오늘의 게시글</Title>
        <Button buttonType="contained" color="purple" radius="round">
          더보기
        </Button>
      </TitleWrap>
      <ArticleList />

      <SubTitle>Weekly New!</SubTitle>
      <TitleWrap>
        <Title>이번주의 베스트 게시글</Title>
        <Button buttonType="contained" color="purple" radius="round">
          더보기
        </Button>
      </TitleWrap>
      <ArticleList />
    </>
  );
}

export default Main;
