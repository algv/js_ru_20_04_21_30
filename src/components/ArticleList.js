import React, { Component } from 'react'
import moment from 'moment'
import { findDOMNode } from 'react-dom'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component {
    componentDidMount() {
        const ref = this.refs[this.props.articles[0].id]
        console.log('---', ref, findDOMNode(ref))
    }

    render() {
        const { toggleOpenItem, isItemOpened } = this.props
        const articles = this.filteredArticles();
        const elements = articles.map(article => <li key={article.id}>
            <Article article={article}
                isOpen={isItemOpened(article.id)}
                toggleOpen={toggleOpenItem(article.id)}
                ref={article.id}
            />
        </li>)
        return (
            <ul>
                {elements}
            </ul>
        )
    }

    filteredArticles = () => {
        const { range, selections, articles } = this.props
        const FROM = moment(range.from).format('MM/DD/YYYY');
        const TO = range.to ? moment(range.to).format('MM/DD/YYYY') : FROM

        if (selections.length == 0 && range.from == null) return articles

        return articles.filter(article => moment(article.date).isBetween(FROM, TO) && selections.some((element) => {
            return article.id == element.value;
        }))
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array,
    //from accordion decorator
    toggleOpenItem: PropTypes.func.isRequired,
    isItemOpened: PropTypes.func.isRequired
}

function mapStateToProps(storeState) {
    return {
        selections: storeState.selections,
        range: storeState.range,
        articles: storeState.articles
    }
}

export default connect(mapStateToProps)(accordion(ArticleList))
