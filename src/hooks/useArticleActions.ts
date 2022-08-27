import API from 'api';
import { ArticleType, useArticleDispatch } from 'context/Article';
import { useArticlesDispatch, ArticlesAction } from 'context/Articles';

function useArticleActions() {
  const articlesDispatch = useArticlesDispatch();
  const articleDispatch = useArticleDispatch();

  function getArticles(board_name?: string) {
    if (board_name) {
      API<ArticlesAction['payload']>('GET', `/boards/${board_name}`, {
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
      API<ArticleType[]>('GET', `/articles`, {
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
  function getArticleById(article_id: string) {
    API<ArticleType>('GET', `/articles/${article_id}`)
      .then(response => {
        articleDispatch({
          type: 'GET_ARTICLE',
          payload: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
  }

  return {
    getArticles,
    getArticleById,
  };
}

export default useArticleActions;
