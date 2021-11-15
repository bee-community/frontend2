import { Outlet } from 'react-router';

const BoardLayout = () => {
  return (
    <>
      게시판의 layout 입니다
      <Outlet />
    </>
  );
};

export default BoardLayout;
