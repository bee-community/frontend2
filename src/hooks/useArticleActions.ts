import request from 'api';
import { useArticlesDispatch } from 'context/Article';
import { ArticlesAction, ArticleType } from 'context/Article/types';

function useArticleActions() {
  const articlesDispatch = useArticlesDispatch();

  function getArticles(board_name?: string) {
    if (board_name) {
      request<ArticlesAction['payload']>('GET', `/boards/${board_name}`, {
        board_id_or_path: board_name,
      })
        .then(response => {
          articlesDispatch({
            type: 'GET_ARTICLES',
            payload: {
              id: response.data.id,
              name: response.data.name,
              articles: response.data.articles,
            },
          });
        })
        .catch(error => console.error(error));
    } else {
      request<ArticleType[]>('GET', `/articles`, {
        offset: 0,
        limit: 100,
      })
        .then(response => {
          articlesDispatch({
            type: 'GET_ARTICLES',
            payload: {
              name: 'All',
              articles: response.data,
            },
          });
        })
        .catch(error => console.error(error));
    }
  }

  return {
    getArticles,
  };
}

export default useArticleActions;
