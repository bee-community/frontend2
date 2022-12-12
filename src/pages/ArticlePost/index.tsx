import { ShadowBox } from 'components/ShadowBox';
import { Table } from 'components/Table';
import Button from 'components/atoms/Button';
import { useCreateArticle } from 'hooks/business/article';
import { useGetBoards } from 'hooks/queries/requests';
import { Form, Title } from 'pages/Question/styles';
import { useCallback, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import imageAdd from '../../assets/images/icons/imageAdd.png';
import { InputPhoto, Image, AddImageIcon } from './styles';

const ArticlePost = () => {
  const beforeBoard = useSelector((store: any) => store.boardData);
  const isBeforeBoardExist = !!beforeBoard.id;
  const boards = useGetBoards().filter(element => element.id !== beforeBoard.id); // 이전에 특정 게시판에서 글쓰기 버튼을 눌러 넘어온 경우 select 태그의 option이 중복되는 것을 막기위해 filter를 사용하였습니다.
  const { createArticle } = useCreateArticle();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [boardId, setBoardId] = useState(beforeBoard.id);
  const [boardPath, setBoardPath] = useState(beforeBoard.path);
  const imageInput = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<FileList[]>();

  const onChangeTitle = useCallback(e => {
    setTitle(e.target.value);
  }, []);

  const onChangeContent = useCallback(e => {
    setContent(e.target.value);
  }, []);

  const onChangeBoard = useCallback(e => {
    const board = JSON.parse(e.target.value);
    setBoardPath(board.path);
    setBoardId(board.id);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      createArticle(
        {
          title: title,
          content: content,
          summary: 'string',
          board_id: boardId,
          board_path: boardPath,
          tags: [],
          poll: {
            title: 'string',
            is_multiple: false,
            contents: [],
          },
        },
        boardPath,
      );
    },
    [title, content, boardId, boardPath],
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
                  required
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
                  required
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
                <select id="board" onChange={onChangeBoard} name="category" required>
                  {isBeforeBoardExist ? (
                    <option value={beforeBoard.name}>{beforeBoard.name}</option>
                  ) : (
                    <option value="">게시판 선택</option>
                  )}

                  {boards.map(element => (
                    <option key={element.id} value={JSON.stringify(element)}>
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
                <input type="text" required placeholder="#ENTP  추가하실 태그를 적어주세요" />
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
