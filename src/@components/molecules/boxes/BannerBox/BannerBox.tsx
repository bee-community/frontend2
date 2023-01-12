import * as React from 'react';
import { useNavigate } from 'react-router';

import Button from '@components/atoms/Button';

import { StyledBannerBox } from './styles';

function BannerBox() {
  const navigate = useNavigate();
  return (
    <StyledBannerBox>
      <span>다양한 사람들 속에서 닮은 꼴 찾기</span>
      <span>꿀벌커뮤니티</span>
      <Button onClick={() => navigate('/signup')} buttonType="contained" color="black" radius="round">
        회원가입하고 포인트 받기
      </Button>
    </StyledBannerBox>
  );
}

export default BannerBox;
