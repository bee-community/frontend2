import enter from 'assets/images/icons/enter.png';

import Button from '@components/@Shared/Button';

import * as Styled from './ReplyCreateInput.styles';

export interface ReplyCreateInputProps {
  comment: string;
  onChangeContent: (e: any) => void;
}
const ReplyCreateInput = (props: ReplyCreateInputProps) => {
  const { comment, onChangeContent } = props;
  return (
    <Styled.ReplyPostInput>
      <img src={enter} alt="enter" />
      <div className="input-wrap">
        <input value={comment} onChange={onChangeContent} type="text" placeholder="내용을 입력해주세요." />
        <Button customCss={Styled.ButtonStyle}>등록</Button>
      </div>
    </Styled.ReplyPostInput>
  );
};

export default ReplyCreateInput;
