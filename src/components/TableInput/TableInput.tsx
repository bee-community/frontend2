import * as Styled from './TableInput.styles';

const TableInput = () => {
  return (
    <Styled.Wrapper>
      <Styled.TableHead>제목</Styled.TableHead>
      <Styled.TableBody placeholder="제목을 입력해주세요."></Styled.TableBody>
    </Styled.Wrapper>
  );
};

export default TableInput;
