import React from 'react';
import Filter from 'components/Filter';
import { FilterZone, FilterWrap, Swiper, SwiperButton } from './styles';

const FilterList = () => {
  return (
    <FilterZone>
      <FilterWrap>
        <Filter title="" key="" />
        <Filter title="" key="" />
        <Filter title="" key="" />
      </FilterWrap>

      <Swiper>
        <SwiperButton>왼</SwiperButton>
        <SwiperButton>오</SwiperButton>
      </Swiper>
    </FilterZone>
  );
};

export default FilterList;
