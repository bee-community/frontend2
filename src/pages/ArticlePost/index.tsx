import { ShadowBox } from 'components/ShadowBox';
import { Table } from 'components/Table';
import Button from 'components/atoms/Button';
import API from 'mainAPI';
import { Form, Title } from 'pages/Question/styles';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';

import { InputPhoto } from './styles';

const ArticlePost = () => {
  const { data, isLoading, error } = useQuery(
    ['todos'],
    () => API.get(`/boards`),
    {
      staleTime: 10000,
    },
  );
  console.log(data);
  const [title, setTitle] = useState(undefined);
  const [content, setContent] = useState(undefined);
  const [board, setBoard] = useState('');

  const onChangeTitle = useCallback(e => {
    setTitle(e.target.value);
  }, []);

  const onChangeContent = useCallback(e => {
    setContent(e.target.value);
  }, []);

  const onChangeBoard = useCallback(e => {
    setBoard(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      console.log(title, content, board);

      if (title && content) {
        console.log('create article');
        const params = {
          title: title,
          content: content,
          board_id: '7cdbf3a6-42b2-4c9f-9440-c3f34b6cbeeb',
          headers: {
            Authorization: `Bearer token`,
          },
        };

        // API('post', '/articles', params)
        //   .then(reponse => {
        //     console.log(reponse);
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   })
        //   .finally(() => {});
      } else {
        console.log('타이틀과 컨텐츠를 모두 입력해주세요~');
      }
    },
    [title, content, board],
  );

  return (
    <>
      <Title>글쓰기</Title>
      <ShadowBox>
        <Form onSubmit={onSubmit}>
          <Table>
            <tr>
              <th scope="row" className="border-bottom">
                제목
              </th>
              <td className="border-bottom">
                <input
                  id="title"
                  name="title"
                  type="text"
                  maxLength={20}
                  value={title}
                  onChange={onChangeTitle}
                  placeholder="제목을 입력해주세요."
                />
              </td>
            </tr>
            <tr>
              <th className="border-bottom" scope="row">
                내용
              </th>
              <td className="border-bottom">
                <textarea
                  id="content"
                  name="content"
                  value={content}
                  onChange={onChangeContent}
                  placeholder="문의할 내용을 입력해주세요."
                />
              </td>
            </tr>
            <tr>
              <th scope="row" className="border-bottom">
                게시판
              </th>
              <td className="border-bottom">
                <select
                  id="board"
                  onChange={onChangeBoard}
                  value={board}
                  name="category"
                  required>
                  <option value="" disabled selected>
                    게시판 선택
                  </option>
                  <option value="게시판1">게시판1</option>
                  <option value="게사판2">게시판2</option>
                  <option value="게시판3">게시판3</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row" className="border-bottom">
                태그
              </th>
              <td className="border-bottom">
                <input
                  type="text"
                  placeholder="#ENTP  추가하실 태그를 적어주세요"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">사진</th>
              <td>
                <InputPhoto>
                  <label
                    className="input-file-button"
                    htmlFor="post-input-file-1">
                    <button className="button-in-table">가져오기</button>
                  </label>
                  <input
                    type="file"
                    id="post-input-file-1"
                    style={{ display: 'none' }}
                  />
                  <label
                    className="input-file-button"
                    htmlFor="post-input-file-2">
                    <button className="button-in-table">가져오기</button>
                  </label>
                  <input
                    type="file"
                    id="post-input-file-2"
                    style={{ display: 'none' }}
                  />
                  <label
                    className="input-file-button"
                    htmlFor="post-input-file-3">
                    <button className="button-in-table">가져오기</button>
                  </label>
                  <input
                    type="file"
                    id="post-input-file-3"
                    // style={{ display: 'none' }}
                  />
                </InputPhoto>
              </td>
            </tr>
          </Table>
          <Button
            buttonType="contained"
            color="yellow"
            radius="round"
            css={{
              padding: '15px 68px',
            }}>
            글쓰기
          </Button>
        </Form>
      </ShadowBox>
    </>
  );
};

export default ArticlePost;
