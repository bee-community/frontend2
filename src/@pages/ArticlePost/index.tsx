import { patchArticle } from 'apis/article';
import closeButton from 'assets/chatImages/xx.png';
import { useCallback, useState, useRef, useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setArticleEditClose } from 'redux/openStateSlice';
import theme from 'styles/theme';

import { Form, Title } from '@pages/Question/styles';

import { ShadowBox, MobileShadowBox } from '@components/ShadowBox';
import { Table } from '@components/Table';
import TableInput from '@components/TableInput/TableInput';
import TableTextArea from '@components/TableTextArea/TableTextArea';
import Button from '@components/atoms/Button';

import { useGetArticleDetail } from '@hooks/@queries/article';
import { useGetBoards } from '@hooks/@queries/requests';
import { useCreateArticle } from '@hooks/business/article';
import useInput from '@hooks/useInput';

import imageAdd from '../../assets/images/icons/imageAdd.png';
import { InputPhoto, Image, AddImageIcon, TableTitle } from './styles';

const ArticlePost = () => {
  const beforeBoard = useSelector((store: any) => store.boardData);
  const { articleEdit: editOpen } = useSelector((store: any) => store.openState);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const article = useGetArticleDetail(editOpen?.articleId);
  const dispatch = useDispatch();
  const isBeforeBoardExist = !!beforeBoard.id;
  const boards = useGetBoards().filter(element => element.id !== beforeBoard.id); // 이전에 특정 게시판에서 글쓰기 버튼을 눌러 넘어온 경우 select 태그의 option이 중복되는 것을 막기위해 filter를 사용하였습니다.
  const { createArticle } = useCreateArticle();
  const [title, setTitle] = useState(() => (editOpen.state ? article?.title : ''));
  const [content, setContent] = useState(() => (editOpen.state ? article?.content : ''));
  const [boardId, setBoardId] = useState(beforeBoard.id);
  const [boardPath, setBoardPath] = useState(beforeBoard.path);
  const imageInput = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<FileList[]>();
  const [tags, setTags] = useState<any>([]);
  const [newHash, onChangeNewHash, setNewHash] = useInput('');
  const hashref = useRef<HTMLInputElement>(null);
  const hashTagInputWrapper = useRef<HTMLDivElement>(null);
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
  const patchArticleRequest = useMutation(patchArticle, {
    onSuccess: (response: any) => {
      queryClient.invalidateQueries('articleDetail');
      navigate(`/board/${boardId}`);
    },
    onError: error => {},
  });

  const onSubmit = useCallback(
    e => {
      console.log(e);
      if (e.code === 'Enter') {
      }
      e.preventDefault();
      if (editOpen.state) {
        console.log('patch');
        patchArticleRequest.mutate({
          articleId: editOpen.articleId,
          body: { title: title, content: content, summary: 'string', board_id: boardId },
        });
      } else {
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
          boardId,
        );
      }
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

  const handleKeyDown = (e: any) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      e.preventDefault();
      if (e.target.id === 'tag') {
        if (newHash !== '' && e.key === 'Enter' && e.keyCode === 13) {
          setNewHash('');
          setTags([...tags, e.target.value]);
        }
      }
    }
    if (newHash == '' && e.key == 'Backspace') {
      let size = tags.length;
      setTags([...tags.slice(0, size - 1)]);
    }
  };

  const deleteClick = (index: number) => {
    setTags([...tags.slice(0, index), ...tags.slice(index + 1)]);
  };

  useEffect(() => {
    const hashTagInputWrapperElement = hashTagInputWrapper.current;
    hashTagInputWrapperElement?.addEventListener('click', () => hashref.current?.focus());

    return () => {
      hashTagInputWrapperElement?.removeEventListener('click', () => hashref.current?.focus());
    };
  }, []);

  useEffect(() => {
    return () => {
      dispatch(setArticleEditClose());
    };
  }, []);

  useEffect(() => {
    const html = document.querySelector<HTMLElement>('html');
    const root = document.querySelector<HTMLElement>('#root');
    if (window.innerWidth <= 425) {
      if (html != null) html.style.backgroundColor = '#f4f4f4';
      if (root != null) root.style.backgroundColor = '#f4f4f4';
    }

    return () => {
      if (window.innerWidth <= 425) {
        if (html != null) html.style.backgroundColor = 'white';
        if (root != null) root.style.backgroundColor = 'white';
      } else {
        if (html != null) html.style.backgroundColor = '#ffe576';
        if (root != null) root.style.backgroundColor = '#ffe576';
      }
    };
  }, []);
  if (window.innerWidth <= 425) {
    return (
      <MobileShadowBox onSubmit={onSubmit}>
        <TableTitle>글쓰기</TableTitle>
        <TableInput
          title="제목"
          placeholder="제목을 입력해주세요."
          id="title"
          name="title"
          type="text"
          maxLength={20}
          required
          value={editOpen.state ? article?.title : title}
          onChange={onChangeTitle}
          onKeyDown={handleKeyDown}></TableInput>
        <TableTextArea
          title="내용"
          placeholder="내용을 입력해주세요."
          id="content"
          name="content"
          value={content}
          required
          onChange={onChangeContent}></TableTextArea>
        <div style={{ display: 'flex', borderBottom: 'solid 1px #ddd', paddingBottom: '10px' }}>
          <div style={{ width: '35%', fontWeight: 'bold', fontSize: `${theme.fontSize[15]}`, paddingTop: '5px' }}>
            게시판
          </div>
          <select id="board" onChange={onChangeBoard} name="category" required>
            {isBeforeBoardExist ? (
              <option value={beforeBoard.name}>{beforeBoard.name}</option>
            ) : (
              <option value="">게시판 선택</option>
            )}

            {!editOpen.state &&
              boards.map(element => (
                <option key={element.id} value={JSON.stringify(element)}>
                  {element.name}
                </option>
              ))}
          </select>
        </div>
        <div style={{ display: 'flex', borderBottom: 'solid 1px #ddd', paddingBottom: '10px' }}>
          <div style={{ width: '35%', fontWeight: 'bold', fontSize: `${theme.fontSize[15]}`, paddingTop: '3px' }}>
            태그
          </div>
          <div ref={hashTagInputWrapper} className="inputWrapper">
            {tags.map((tag: string, index: number) => {
              return (
                <div style={{ marginRight: '5px' }} className="tag" key={index}>
                  <div className="test">{tag}</div>
                  <img
                    style={{
                      width: '15px',
                      height: '15px',
                      fontSize: '16px',
                      color: '#666',
                      marginLeft: '5px',
                      marginBottom: '2px',
                    }}
                    alt="hashTagDelete"
                    role="presentation"
                    onClick={() => deleteClick(index)}
                    src={closeButton}
                    className="material-icons"
                  />
                </div>
              );
            })}

            <input
              id="tag"
              type="text"
              value={newHash}
              ref={hashref}
              onKeyDown={handleKeyDown}
              onChange={onChangeNewHash}
              placeholder={tags.length > 0 ? '' : '태그를 입력해주세요.'}
            />
          </div>
        </div>
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
        <Button
          buttonType="contained"
          color="yellow"
          radius="round"
          customCss={{
            fontSize: `${theme.fontSize[15]}`,
            padding: '15px 68px',
            borderRadius: '10px',
          }}>
          글쓰기
        </Button>
      </MobileShadowBox>
    );
  }
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
                  onKeyDown={handleKeyDown}
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

                  {!editOpen.state &&
                    boards.map(element => (
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
                <div ref={hashTagInputWrapper} className="inputWrapper">
                  {tags.map((tag: string, index: number) => {
                    return (
                      <div style={{ marginRight: '5px' }} className="tag" key={index}>
                        <div className="test">{tag}</div>
                        <img
                          style={{
                            width: '15px',
                            height: '15px',
                            fontSize: '16px',
                            color: '#666',
                            marginLeft: '5px',
                            marginBottom: '2px',
                          }}
                          alt="hashTagDelete"
                          role="presentation"
                          onClick={() => deleteClick(index)}
                          src={closeButton}
                          className="material-icons"
                        />
                      </div>
                    );
                  })}

                  <input
                    id="tag"
                    type="text"
                    value={newHash}
                    ref={hashref}
                    onKeyDown={handleKeyDown}
                    onChange={onChangeNewHash}
                    placeholder={tags.length > 0 ? '' : '추가하실 태그를 입력한 후 엔터를 눌러주세요.'}
                  />
                </div>
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
            customCss={{
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
