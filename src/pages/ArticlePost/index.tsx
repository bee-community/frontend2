import { useCallback, useState } from 'react';

import { Form, Label, Input, Button, BoardList } from './styles';

const ArticlePost = () => {
  const [title, setTitle] = useState(undefined);
  const [content, setContent] = useState(undefined);
  const [board, setBoard] = useState('게시판1'); // 기본 게시판을 어떤걸로 할까나~

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
        console.log('onSubmit!!');
      } else {
        console.log('타이틀과 컨텐츠를 모두 입력해주세요~');
      }
    },
    [title, content, board],
  );
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Label>
          <span>타이틀</span>
          <Input
            id="title"
            name="title"
            type="text"
            maxLength={20}
            value={title}
            onChange={onChangeTitle}
            placeholder="Title"
          />
        </Label>
        <Label>
          <span>컨텐츠</span>
          <Input
            id="content"
            name="content"
            type="text"
            value={content}
            onChange={onChangeContent}
            placeholder="contents"
          />
        </Label>
        <Label>
          <span>업로드 할 게시판 선택</span>
          <BoardList id="board" onChange={onChangeBoard} value={board}>
            <option value="게시판1">게시판1</option>
            <option value="게사판2">게시판2</option>
            <option value="게시판3">게시판3</option>
          </BoardList>
        </Label>
        <Button type="submit">글 등록</Button>
      </Form>
    </>
  );
};

export default ArticlePost;
