import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    state = {
        isOpen: false,
        commentsOpen: false
    }

    render() {
        const {article} = this.props
        return (
            <section>
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>

                {this.getBody()}
            </section>
        )
    }

    getBody() {
        return this.state.isOpen &&
        (<div>
            {this.props.article.text}
            <p />
            {this.state.commentsOpen
                ? <a onClick={this.toggleComments}>
                    <b> hide comments </b>
                    </a>
                : <a onClick={this.toggleComments}>
                    <b> show comments </b>
                    </a>}

            {this.getComments()}
        </div>)
    }

    getComments() {
        return this.state.commentsOpen && <CommentList comments={this.props.article.comments}/>
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleComments = (ev) => {
        this.setState({
            commentsOpen: !this.state.commentsOpen
        })
    }
}
