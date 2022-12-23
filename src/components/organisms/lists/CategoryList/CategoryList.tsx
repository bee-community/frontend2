import Button from 'components/atoms/Button';
import IconWithLinkContainer from 'components/molecules/containers/IconWithLinkContainer';
import { BoardInfo } from 'context/Board/types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setCategoryToggle } from 'redux/openStateSlice';

import { StyledCategoryList } from './styles';

function CategoryList(props: { categories: BoardInfo[] }) {
  const navigate = useNavigate();
  const categories = props.categories;
  const { isCategoryOpen } = useSelector((store: any) => store.openState);
  const dispatch = useDispatch();
  // const [isOpened, setIsOpened] = useState(false);

  return (
    <StyledCategoryList isOpened={isCategoryOpen}>
      <div className="title">
        <div>카테고리</div>
        <Button
          buttonType="contained"
          color="black"
          radius="round"
          onClick={() => {
            dispatch(setCategoryToggle());
          }}>
          전체보기
        </Button>
      </div>
      <div className="category-list">
        {categories?.map((category, index) => {
          return (
            <IconWithLinkContainer
              type="default"
              key={index}
              name={category.name}
              id={category.id}
              icon={category.path}
              link={`board/${category.id}`}
              navigate={navigate}
            />
          );
        })}
      </div>
    </StyledCategoryList>
  );
}

export default CategoryList;
