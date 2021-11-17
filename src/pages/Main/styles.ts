import styled from '@emotion/styled';

export const MainWrap = styled.div`
  background-color: ${props => props.theme.palette.background.white};
  border-radius: 40px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

// NOTE: Main contents-Section
export const Section = styled.section`
  display: flex;
  flex: 1;
`;
export const Title = styled.div``;
export const Category = styled.div``;
export const TodayNew = styled.div``;
export const WeeklyNew = styled.div``;

// NOTE: Main side contents-Aside
export const Aside = styled.aside`
  width: 370px;
  background-color: ${props => props.theme.palette.background.gray};
  border-radius: 0 20px 20px 0;
`;
export const Chat = styled.div``;
export const DailyList = styled.div``;
export const WeeklyList = styled.div``;
