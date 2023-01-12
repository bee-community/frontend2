import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { setArticleToggle } from 'redux/openStateSlice';

import Button from '@components/atoms/Button';
import Comment from '@components/comment/Comment/Comment';
import CommentOpenButton from '@components/comment/CommentOpenButton/CommentOpenButton';
import ArticleContent from '@components/organisms/ArticleContent';
import TagRelatedList from '@components/organisms/lists/TagRelatedList';

import { useCreateComment } from '@hooks/business/article';
import { useGetArticleDetail } from '@hooks/queries/article';

import { CommentsWrap, Comments, CommentPostInput } from './styles';

function Article() {
  const { articleId } = useParams();
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  const [comment, setComment] = useState('');
  const article = useGetArticleDetail(articleId);
  const { createComment } = useCreateComment();
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

  const recommendedTags = ['꿀팁1', '꿀팁2', '꿀팁3', '꿀팁4', '꿀팁5', '꿀팁6', '꿀팁7'];

  const onChangeContent = useCallback(e => {
    setComment(e.target.value);
  }, []);

  const onDetailOpen = useCallback(() => setIsDetailsOpen(prev => !prev), []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!articleId) return;
      createComment({
        body: {
          content: comment,
        },
        articleId: articleId,
      });
      setComment('');
    },
    [articleId, comment],
  );
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
      {/* <article>댓글 기능 개발중</article> */}

      <CommentsWrap open isDetailsOpen={isDetailsOpen}>
        <CommentOpenButton isDetailsOpen={isDetailsOpen} onClick={onDetailOpen}></CommentOpenButton>
        <Comments>
          {article.comments?.map(element => (
            <Comment key={element.id} element={element} articleId={articleId}></Comment>
          ))}

          <form onSubmit={onSubmit}>
            <CommentPostInput>
              <div className="input-wrap">
                <input value={comment} onChange={onChangeContent} type="text" placeholder="내용을 입력해주세요." />
                <Button
                  buttonType="contained"
                  color="yellow"
                  radius="square"
                  customCss={{
                    marginLeft: '14px',
                  }}>
                  등록
                </Button>
              </div>
            </CommentPostInput>
          </form>
        </Comments>
      </CommentsWrap>
      <TagRelatedList articles={dummyTagRelatedArticles} />
    </>
  );
}

export default Article;
