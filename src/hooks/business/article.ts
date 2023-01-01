import { useCreateCommentMutation, useLikeMutation } from 'hooks/queries/article';
import { useCreateAriticleMutation } from 'hooks/queries/requests';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';
import { CreateArticleRequest, CreateCommentRequest } from 'types/article/remote';

export const useCreateArticle = () => {
  const createArticleMutate = useCreateAriticleMutation();
  const navigate = useNavigate();

  const createArticle = async (body: CreateArticleRequest, boardPath: string) => {
    await createArticleMutate.mutateAsync(body, {
      onSuccess() {
        navigate(`/board/${boardPath}`);
      },
    });
  };

  return { createArticle };
};

export const useCreateComment = () => {
  const createArticleMutate = useCreateCommentMutation();

  const createComment = async ({ body, articleId }: { body: CreateCommentRequest; articleId: string }) => {
    await createArticleMutate.mutateAsync(
      { body, articleId },
      {
        onSuccess() {},
      },
    );
  };

  return { createComment };
};

export const useLikeRequest = () => {
  const createArticleMutate = useLikeMutation();
  const queryClient = useQueryClient();
  const createLikeRequest = async (articleId: string) => {
    await createArticleMutate.mutateAsync(articleId, {
      onSuccess() {
        queryClient.invalidateQueries(['articleDetail', articleId]);
      },
    });
  };

  return { createLikeRequest };
};
