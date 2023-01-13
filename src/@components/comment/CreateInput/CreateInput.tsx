import enter from 'assets/images/icons/enter.png';
import { ChangeEventHandler } from 'react';

import Button from '@components/@Shared/Button';

import * as Styled from './CreateInput.styles';

export interface CreateInputProps {
  comment: string;
  onChangeContent: ChangeEventHandler<HTMLInputElement>;
}

const CreateInput = () => {
  return <></>;
};

CreateInput.Comment = function Comment(props: CreateInputProps) {
  const { comment, onChangeContent } = props;
  return (
    <Styled.PostInput>
      <div className="input-wrap">
        <input value={comment} onChange={onChangeContent} type="text" placeholder="내용을 입력해주세요." />
        <Button customCss={Styled.ButtonStyle}>등록</Button>
      </div>
    </Styled.PostInput>
  );
};

CreateInput.Reply = function Reply(props: CreateInputProps) {
  const { comment, onChangeContent } = props;
  return (
    <Styled.PostInput>
      <img src={enter} alt="enter" />
      <div className="input-wrap">
        <input value={comment} onChange={onChangeContent} type="text" placeholder="내용을 입력해주세요." />
        <Button customCss={Styled.ButtonStyle}>등록</Button>
      </div>
    </Styled.PostInput>
  );
};

export default CreateInput;
