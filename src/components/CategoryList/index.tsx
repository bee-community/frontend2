import categoryIcon from 'assets/images/icons/category.png';
import React, { useState } from 'react';

import { Category, Circle, CategoryListWrap } from './styles';

function CategoryList() {
  const [categories] = useState([
    { name: '재잘재잘', imgPath: 'category' },
    { name: '재잘재잘', imgPath: 'category' },
    { name: '재잘재잘', imgPath: 'category' },
    { name: '재잘재잘', imgPath: 'category' },
    { name: '재잘재잘', imgPath: 'category' },
    { name: '재잘재잘', imgPath: 'category' },
    { name: '재잘재잘', imgPath: 'category' },
    { name: '재잘재잘', imgPath: 'category' },
    { name: '재잘재잘', imgPath: '' },
    { name: '재잘재잘', imgPath: '' },
    { name: '재잘재잘', imgPath: '' },
    { name: '재잘재잘', imgPath: '' },
    { name: '재잘재잘', imgPath: '' },
  ]);

  return (
    <CategoryListWrap>
      {categories.map((category, index) => {
        return (
          <Category key={index}>
            <Circle>
              <img src={categoryIcon} alt="categoryIcon" />
            </Circle>
            <span>{category.name}</span>
          </Category>
        );
      })}
    </CategoryListWrap>
  );
}

export default CategoryList;
