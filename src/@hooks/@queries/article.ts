import { client } from 'apis';
import { createComment, createLikeRequest } from 'apis/article';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { ArticleDetailType } from 'types/article/remote';

const REQUEST_URL = 'https://puzzled-cautious-radish.glitch.me';

export const useGetArticleDetail = (articleId?: string): ArticleDetailType | undefined => {
  const { data: res } = useQuery(
    ['articleDetail', articleId],
    () => client.get<ArticleDetailType>(`${REQUEST_URL}/articles/${articleId}`),
    { refetchOnWindowFocus: false },
  );
  return res?.data;
};

export const useCreateCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createComment, {
    onSuccess() {
      queryClient.invalidateQueries('articleDetail');
    },
    onMutate() {},
    onSettled() {},
  });
};

export const useLikeMutation = () => {
  return useMutation(createLikeRequest, {
    onSuccess() {},
    onMutate() {},
    onSettled() {},
  });
};
