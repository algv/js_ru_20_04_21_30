import React from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleArticle from '../decorators/toggleArticle'

function ArticleList(props) {
    const {articles,  openArticleId, toggleArticle} = props
    const elements = articles.map(article => <li key={article.id}>
        <Article article={article}
                 isOpen={article.id == openArticleId}
                 toggleOpen={toggleArticle(article.id)}
        />
    </li>)

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default toggleArticle(ArticleList)

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        comments: PropTypes.array
    }).isRequired).isRequired,
    openArticleId: PropTypes.string,
    toggleArticle: PropTypes.func.isRequired
}
