import * as Styled from './TableTextArea.styles';

const TableTextArea = ({ title, placeholder }: any) => {
  return (
    <Styled.Wrapper>
      <Styled.TableHead>{title}</Styled.TableHead>
      <Styled.TableBody placeholder={placeholder}></Styled.TableBody>
    </Styled.Wrapper>
  );
};

export default TableTextArea;
