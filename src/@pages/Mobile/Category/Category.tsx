import { useNavigate } from 'react-router';

import IconWithLinkContainer from '@components/molecules/containers/IconWithLinkContainer';

import { useGetBoards } from '@hooks/@queries/requests';

import { CategoryList } from './Category.styles';

const Category = () => {
  const categories = useGetBoards();
  const navigate = useNavigate();
  return (
    <CategoryList>
      {categories?.map((category, index) => {
        return (
          <IconWithLinkContainer
            type="mobile"
            key={index}
            name={category.name}
            id={category.id}
            icon={category.path}
            link={`/board/${category.id}`}
            navigate={navigate}
          />
        );
      })}
    </CategoryList>
  );
};

export default Category;
