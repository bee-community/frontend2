import styled from '@emotion/styled';

export const Title = styled.article`
  font-size: ${props => props.theme.fontSize[30]};
  font-weight: bold;
  margin: 30px;
  margin-bottom: 0;

  @media (max-width: ${props => props.theme.size.lg}) {
    margin: 5px;
    margin-bottom: 30px;
  }
`;

export const TableTitle = styled.div`
  color: ${props => props.theme.palette.purple[100]};
  font-size: ${props => props.theme.fontSize[18]};
  font-weight: bold;
  margin-bottom: 15px;
  text-align: left;
  width: 100%;
`;
