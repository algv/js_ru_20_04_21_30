import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment} from  '../../AC'
import {localize} from "../../nls"
import './style.css'

class CommentForm extends Component {
    static propTypes = {

    };

    static contextTypes = {
        locale: PropTypes.string
    }

    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                {localize("fields.user", this.context.locale)} <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                {localize("fields.comment", this.context.locale)} <input value = {this.state.text}
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')} />
                <input type = "submit" value = {localize("button.submit", this.context.locale)}/>
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { addComment, articleId } = this.props
        addComment(this.state, articleId)
        this.setState({
            user: '',
            text: ''
        })
    }

    getClassName = type => this.state[type].length && this.state[type].length < 10 ? 'form-input__error' : ''

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > 20) return
        this.setState({
            [type]: value
        })
    }
}

export default connect(null, {addComment}, null, {
    pure: false})(CommentForm)