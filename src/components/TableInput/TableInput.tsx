import * as Styled from './TableInput.styles';

const TableInput = ({ title, placeholder, ...props }: any) => {
  return (
    <Styled.Wrapper>
      <Styled.TableHead>{title}</Styled.TableHead>
      <Styled.TableBody placeholder={placeholder} {...props}></Styled.TableBody>
    </Styled.Wrapper>
  );
};

export default TableInput;
