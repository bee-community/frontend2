import React from 'react';
import testImg from 'assets/images/test_img.jpg';
import Icon from '@mdi/react';
import {
  mdiBookmarkOutline,
  mdiBookmark,
  mdiHeartOutline,
  mdiHeart,
  mdiMessageOutline,
  mdiAccountOutline,
} from '@mdi/js';
import {
  ContentWraper,
  PostMainImage,
  PostImg,
  DescribeWraper,
  Describe,
  Title,
  AboutWrap,
  Likes,
  Comments,
  NickName,
} from './styles';

const Content = () => (
  <ContentWraper>
    <PostMainImage>
      <PostImg src={testImg} alt="test img" />
    </PostMainImage>

    <DescribeWraper>
      <Describe>
        <Title>글의 타이틀이죠</Title>
        <AboutWrap>
          <Icon path={mdiHeartOutline} title="likes" size={1} />
          <Likes>500</Likes>
          <Icon path={mdiMessageOutline} title="comment" size={1} />
          <Comments>22</Comments>
          <Icon path={mdiAccountOutline} title="nickname" size={1} />
          <NickName>닉네임</NickName>
        </AboutWrap>
      </Describe>
      <Icon path={mdiBookmarkOutline} title="book mark" size={1} />
    </DescribeWraper>
  </ContentWraper>
);

export default Content;
