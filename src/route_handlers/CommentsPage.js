import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentList from '../components/CommentList'
import Comment from '../components/Comment'
import Loader from '../components/Loader'
import { Route } from 'react-router-dom'
import { loadPageComments } from '../AC/index'
import { connect } from 'react-redux'

class CommentsPage extends Component {
    static propTypes = {
        //from react-router
        match: PropTypes.object.isRequired
    };

    componentDidMount() {
        const {match, loadPageComments, comments} = this.props
        if (!comments.length) loadPageComments(match.params.page)
    }

    render() {
        const { match, comments } = this.props
        if (comments) return (
            <div>
                <Route path={`${match.url}/:page`} render={this.getComments} />
            </div>
        )
        return <Loader />
    }

    getComments = ({ match }) => {
        const {comments, loadPageComments} = this.props

        return <div>{this.props.comments.map(id => <li key={id}>
            <div>
                {id}
            </div>
        </li>)}
        </div>
    }
}

export default connect((state) => {
    return {
        comments: state.comments.entities
    }
}, { loadPageComments })(CommentsPage)