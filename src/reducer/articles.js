import {articles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, SELECTION, ADD_DAY_TO_RANGE} from '../constants'

export default (articles = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
    }

    return articles
}
