import { client } from 'apis';
import axios from 'axios';
import { CreateArticleRequest, CreateCommentRequest } from 'types/article/remote';

let REQUEST_URL = '';
if (process.env.REACT_APP_MSW === 'development') {
  REQUEST_URL = 'http://localhost:3000/ant_community_frontend_dev3';
} else {
  REQUEST_URL = 'http://honeybees.community';
}

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
