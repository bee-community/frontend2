import categoryImg from 'assets/images/categoryImg1.png';
import React from 'react';
import { useState } from 'react';

import { Category, Circle, CategoryListWrap } from './styles';

function CategoryList() {
  const [categories, setCategories] = useState([
    { name: '재잘재잘', imgPath: 'categoryImg1' },
    { name: '재잘재잘', imgPath: 'categoryImg1' },
    { name: '재잘재잘', imgPath: 'categoryImg1' },
    { name: '재잘재잘', imgPath: 'categoryImg1' },
    { name: '재잘재잘', imgPath: 'categoryImg1' },
    { name: '재잘재잘', imgPath: 'categoryImg1' },
    { name: '재잘재잘', imgPath: 'categoryImg1' },
    { name: '재잘재잘', imgPath: 'categoryImg1' },
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
              <img src={categoryImg} />
            </Circle>
            <span>{category.name}</span>
          </Category>
        );
      })}
    </CategoryListWrap>
  );
}

export default CategoryList;
