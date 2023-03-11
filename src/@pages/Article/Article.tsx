import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { setArticleToggle } from 'redux/openStateSlice';

import CommentSection from '@components/comment/CommentSection';
import ArticleContent from '@components/organisms/ArticleContent';
import TagRelatedList from '@components/organisms/lists/TagRelatedList';

import { useGetArticleDetail } from '@hooks/@queries/article';

function Article() {
  const { articleId } = useParams();
  const article = useGetArticleDetail(articleId);
  const dispatch = useDispatch();
  const [dummyTagRelatedArticles] = useState([
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      title: 'string',
      content: 'string',
      summary: 'string',
      board_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      view_count: 0,
      is_announcement: true,
      like_count: 0,
      tags: ['꿀팁', '꿀팁', '꿀팁', '꿀팁'],
      poll: {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        title: 'string',
        is_multiple: false,
        contents: [
          {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            content: 'string',
          },
        ],
      },
      created_at: '2022-11-11T15:24:14.019Z',
      updated_at: '2022-11-11T15:24:14.019Z',
    },
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      title: 'string',
      content: 'string',
      summary: 'string',
      board_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      view_count: 0,
      is_announcement: true,
      like_count: 0,
      tags: ['꿀팁', '꿀팁', '꿀팁', '꿀팁'],
      poll: {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        title: 'string',
        is_multiple: false,
        contents: [
          {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            content: 'string',
          },
        ],
      },
      created_at: '2022-11-11T15:24:14.019Z',
      updated_at: '2022-11-11T15:24:14.019Z',
    },
  ]);

  const recommendedTags = ['응원합니다.', '화이팅입니다.', '사랑합니다.', '열심히하세요.', '중꺽마', '프론트엔드'];

  useEffect(() => {
    dispatch(setArticleToggle());
    return () => {
      dispatch(setArticleToggle());
    };
  }, []);

  if (!article) return null;
  if (!articleId) return null;
  return (
    <>
      <ArticleContent articleId={articleId} article={article} recommendedTags={recommendedTags} />
      <CommentSection article={article} articleId={articleId} />
      <TagRelatedList articles={dummyTagRelatedArticles} />
    </>
  );
}

export default Article;
