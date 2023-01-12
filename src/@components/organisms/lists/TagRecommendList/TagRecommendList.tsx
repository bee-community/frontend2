import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';
import thumbDown from 'assets/images/icons/thumb-down.png';
import thumbUp from 'assets/images/icons/thumb-up.png';

import Button from '@components/atoms/Button';
import TagRecommedContainer from '@components/molecules/containers/TagRecommedContainer';

import { StyledTagRecommendList, StyledTagRecommedContainer } from './styles';

interface TagRecommendListProps {
  tags: string[];
}

function TagRecommendList(props: TagRecommendListProps) {
  const { tags } = props;

  return (
    <>
      {window.innerWidth <= 425 ? (
        <StyledTagRecommendList>
          <Flicking bound={true}>
            {tags.map((tag, index) => (
              <StyledTagRecommedContainer key={index}>
                <span>#{tag}</span>
                <span className="tag-points">+2</span>
                <Button
                  buttonType="iconButton"
                  color="yellow"
                  radius="circle"
                  customCss={{ boxShadow: 'none', padding: 0 }}>
                  <img width="28px" src={thumbUp} alt="up" />
                </Button>
                <Button
                  buttonType="iconButton"
                  color="yellow"
                  radius="circle"
                  customCss={{ boxShadow: 'none', padding: 0 }}>
                  <img width="28px" src={thumbDown} alt="down" />
                </Button>
              </StyledTagRecommedContainer>
            ))}
          </Flicking>
        </StyledTagRecommendList>
      ) : (
        <StyledTagRecommendList>
          {tags.map((tag, index) => (
            <TagRecommedContainer key={index} tag={tag} />
          ))}
        </StyledTagRecommendList>
      )}
    </>
  );
}

export default TagRecommendList;
