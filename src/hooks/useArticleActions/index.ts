import request from 'api';
import { ArticlesAction, ArticleType } from 'context/Article/types';

function useArticleActions() {

  function getArticles(board_name?: string) {
    if (board_name) {
      request<ArticlesAction['payload']>('GET', `/boards/${board_name}`, {
        board_id_or_path: board_name,
      })
        .then(response => {
        })
        .catch(error => console.error(error));
    } else {
      request<ArticleType[]>('GET', `/articles`, {
        offset: 0,
        limit: 100,
      })
        .then(response => {
        })
        .catch(error => console.error(error));
    }
  }

  return {
    getArticles,
  };
}

export default useArticleActions;
