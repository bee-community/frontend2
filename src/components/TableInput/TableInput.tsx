import * as Styled from './TableInput.styles';

const TableInput = ({ title, placeholder }: any) => {
  return (
    <Styled.Wrapper>
      <Styled.TableHead>{title}</Styled.TableHead>
      <Styled.TableBody placeholder={placeholder}></Styled.TableBody>
    </Styled.Wrapper>
  );
};

export default TableInput;
