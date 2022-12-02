import { useCreateAriticleMutation } from 'hooks/queries/requests';
import { useNavigate } from 'react-router';
import { CreateArticleRequest } from 'types/article/remote';

export const useCreateArticle = () => {
  const createArticleMutate = useCreateAriticleMutation();
  const navigate = useNavigate();

  const createArticle = async (
    body: CreateArticleRequest,
    boardPath: string,
  ) => {
    await createArticleMutate.mutateAsync(body, {
      onSuccess() {
        navigate(`/board/${boardPath}`);
      },
    });
  };

  return { createArticle };
};
