import mypageButton from 'assets/images/mypage_button.png';
import React from 'react';
import { useState } from 'react';

import {
  AsideWrap,
  Bio,
  SideListWrap,
  SideList,
  ButtonPurple,
  Order,
  ListTitle,
} from './styles';

function Aside() {
  // dummy popular Article
  const [popularArticle] = useState([
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
    <AsideWrap>
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
    </AsideWrap>
  );
}

export default Aside;
