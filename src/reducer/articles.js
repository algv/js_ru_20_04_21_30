import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc, [article.id]: article
}), {})

export default (articles = articlesMap, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return Object.keys(articles).filter(article => article.id !== payload.id)
        case ADD_COMMENT:
            //обрати внимание, comments - обычный массив, значит ты мутируеш стейт
            articles[payload.articleID].comments.push(payload.id)
    }

    return articles
}
