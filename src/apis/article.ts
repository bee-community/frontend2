import { client } from 'apis';
import { CreateArticleRequest, CreateCommentRequest } from 'types/article/remote';

const REQUEST_URL = 'https://puzzled-cautious-radish.glitch.me';

export const createArticle = async (body: CreateArticleRequest) => {
  await client.post(`${REQUEST_URL}/articles`, body);
};

export const patchArticle = async ({ body, articleId }: { body: CreateArticleRequest; articleId: string }) => {
  await client.patch(`${REQUEST_URL}/articles/${articleId}`, body);
};

export const deleteArticle = async (articleId?: string) => {
  await client.delete(`${REQUEST_URL}/articles/${articleId}`);
};

export const createComment = async ({ body, articleId }: { body: CreateCommentRequest; articleId: string }) => {
  await client.post(`${REQUEST_URL}/articles/${articleId}/comments`, body);
};

export const createLikeRequest = async (articleId: string) => {
  await client.post(`${REQUEST_URL}/articles/${articleId}/likes`);
};

export const deleteLikeRequest = async (articleId: string) => {
  await client.delete(`${REQUEST_URL}/articles/${articleId}/likes`);
};
