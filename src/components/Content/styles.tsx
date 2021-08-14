import styled from '@emotion/styled';
import theme from 'styles/theme';

export const ContentWraper = styled.div`
  max-width: 100%;
`;

export const PostMainImage = styled.div`
  position: relative;
  width: 100%;
  padding-bottom:70%;
  overflow: hidden;
  border-radius: 3px;
  margin-bottom: 10px;

  ${(props) => props.theme.mq.mobile}{
    margin-bottom: 3px;
  }
`;

export const PostImg = styled.img`
  position: absolute;
  width: 100%;
`;

export const DescribeWraper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Describe = styled.div`
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-bottom: 5px;
  font-size: 1.4rem;

  ${(props) => props.theme.mq.mobile}{
    font-size: 1rem;
  }
`;

export const AboutWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 16px;

  font-size: 1.2rem;
  color: ${theme.color.deepGray};

  ${(props) => props.theme.mq.mobile}{
    font-size: 1rem;
  }
`;
export const Likes = styled.div`
  margin: 0 5px 0 1px;

  ${(props) => props.theme.mq.mobile}{
    margin: 0 1px;
    }
`;

export const Comments = styled.div`
  margin: 0 5px 0 1px;

  ${(props) => props.theme.mq.mobile}{
    margin: 0 1px;
  }
`;

export const NickName = styled.div`
  margin: 0 5px 0 1px;
  text-overflow: ellipsis;

  ${(props) => props.theme.mq.mobile}{
    margin: 0 1px;
  }
`;
