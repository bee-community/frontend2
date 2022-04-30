import BannerBox from 'components/molecules/boxes/BannerBox';
import CategoryList from 'components/organisms/lists/CategoryList';
import { useState } from 'react';

function Main() {
  const [categories] = useState([
    '재잘재잘',
    '재잘재잘',
    '재잘재잘',
    '재잘재잘',
    '재잘재잘',
    '재잘재잘',
    '재잘재잘',
    '재잘재잘',
    '재잘재잘',
    '재잘재잘',
    '재잘재잘',
    '재잘재잘',
    '재잘재잘',
  ]);

  return (
    <>
      <BannerBox />
      <CategoryList categories={categories} />
    </>
  );
}

export default Main;
