import React from 'react';
import { FilterWrap, ImageWrap, Text } from './styles';

type Props = {
  title: string;
};

const Filter: React.FC<Props> = ({ title }: Props) => (
  <FilterWrap>
    <ImageWrap>
      <img alt="hel" />
    </ImageWrap>
    <Text>{title}</Text>
  </FilterWrap>
);

export default Filter;
