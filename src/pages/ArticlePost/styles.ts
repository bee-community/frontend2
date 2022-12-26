import styled from '@emotion/styled';

export const TableTitle = styled.div`
  color: ${props => props.theme.palette.purple[100]};
  font-size: ${props => props.theme.fontSize[18]};
  font-weight: bold;
  margin-bottom: 7px;
  text-align: left;
  width: 100%;
`;

export const InputPhoto = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
`;

export const Image = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px 4px 0;
  width: 85px;
  height: 85px;
  border: 1px solid #d6d6d6;
  cursor: pointer;
`;

export const AddImageIcon = styled.img`
  width: 24px;
  height: 24px;
`;
