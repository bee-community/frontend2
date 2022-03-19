import profile from 'assets/images/icon/profile.png';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="./mypage">
          <img src={profile} />
          <div>마이페이지</div>
        </Link>
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
                <Link to={`/article/${index}`}>
                  <Order>{index + 1}</Order>
                  <ListTitle>
                    <div>
                      <b>#연애</b> 오늘 있었던 일 얘기할게요
                    </div>
                    <div>1일 23시간 24분 후 종료</div>
                  </ListTitle>
                </Link>
              </li>
            );
          })}
        </SideList>
      </SideListWrap>
    </AsideWrap>
  );
}

export default Aside;
