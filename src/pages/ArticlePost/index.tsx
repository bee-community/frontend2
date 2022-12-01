import { ShadowBox } from 'components/ShadowBox';
import { Table } from 'components/Table';
import Button from 'components/atoms/Button';
import { useBoards } from 'hooks/queries/requests';
import API from 'mainAPI';
import { Form, Title } from 'pages/Question/styles';
import { useCallback, useState, useRef, useEffect } from 'react';
import { useQuery } from 'react-query';

import imageAdd from '../../assets/images/icons/imageAdd.png';
import { InputPhoto, Image, AddImageIcon } from './styles';

const ArticlePost = () => {
  const boards = useBoards();
  console.log(boards);
  const [title, setTitle] = useState(undefined);
  const [content, setContent] = useState(undefined);
  const [board, setBoard] = useState('');
  const imageInput = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<FileList[]>();
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

  const onClickImageUpload = useCallback(() => {
    if (!imageInput.current) return;
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback(
    e => {
      console.log(e);
      if (!images) {
        setImages([e.target.files]);
        return;
      }
      setImages([...images, e.target.files]);
    },
    [images],
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
                  {boards.map(element => (
                    <option key={element.id} value={element.name}>
                      {element.name}
                    </option>
                  ))}
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
                  <input
                    type="file"
                    id="file-input"
                    accept="image/png, image/jpeg, image/gif, image/jpg"
                    style={{ display: 'none' }}
                    ref={imageInput}
                    onChange={onChangeImages}
                    multiple // multiple 설정을 하면 같은 사진을 중복하여 올릴 수 없다.
                  />
                  {images?.map((v, index) => {
                    if (v[0] === undefined) return;
                    return (
                      <Image key={index}>
                        <img
                          style={{ width: '100%', height: '100%' }}
                          src={URL.createObjectURL(v[0])}
                          alt="사용자가 추가한 사진"
                        />
                      </Image>
                    );
                  })}
                  <Image onClick={onClickImageUpload}>
                    <AddImageIcon src={imageAdd} alt="사진추가이미지" />
                  </Image>
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
