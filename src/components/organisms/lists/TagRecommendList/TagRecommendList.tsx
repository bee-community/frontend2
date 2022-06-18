import TagRecommedContainer from 'components/molecules/containers/TagRecommedContainer';
import * as React from 'react';

import { StyledTagRecommendList } from './styles';

interface TagRecommendListProps {
  tags: string[];
}

function TagRecommendList(props: TagRecommendListProps) {
  const { tags } = props;

  return (
    <StyledTagRecommendList>
      {tags.map((tag, index) => (
        <TagRecommedContainer key={index} tag={tag} />
      ))}
    </StyledTagRecommendList>
  );
}

export default TagRecommendList;
