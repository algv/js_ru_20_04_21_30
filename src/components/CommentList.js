import React, { Component } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm/index'
import Loader from './Loader'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadComments} from '../AC'
import {mapToArr} from '../utils'

class CommentList extends Component {
    componentWillReceiveProps({isOpen, article, loadComments}) {
        if (!article.commentsLoaded && !article.commentsLoading && isOpen && !this.props.isOpen) loadComments(article.id)
    }

    render() {
        const { isOpen, toggleOpen, article, loadComments } = this.props
        const linkText = isOpen ? 'hide comments' : 'show comments'

        return (
            <div>
                <a href="#" onClick={toggleOpen}>{linkText}</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return null
        if (article.commentsLoading) return <Loader />
        if (!article.comments.length) return <div><p>No comments yet</p><CommentForm articleId={article.id} /></div>
        return (
            <div>
                <ul>
                    {article.comments.map(id => <li key={id}><Comment id={id} /></li>)}
                </ul>
                <CommentForm articleId={article.id} />
            </div>
        )
    }

}


CommentList.propTypes = {
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
    article: PropTypes.object
}

export default connect(null, {loadComments})(toggleOpen(CommentList))
