import React, { Component } from 'react'

//отлично, только я просил в css файле сделать, а не инлайн стилями
export default class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        commentText: '',
    }

    render() {
        const errorFieldStyle = {
            color: 'red'
        }
    
        return (
            <div>
                <form>
                    <div>User: <input type = "text" value = {this.state.user} onChange = {this.userChange} style={this.state.user.length < 10 ? errorFieldStyle : null}/></div>
                    <p />
                    <div>Text: <input type = "text" value = {this.state.commentText} onChange = {this.commentChange} style={this.state.commentText.length < 10 ? errorFieldStyle : null}/></div>
                </form>
            </div>
        )
    }

    userChange = ev => {
        if (ev.target.value.length > 20) return
        this.setState({
            user: ev.target.value
        })
    }

    commentChange = ev => {
        if (ev.target.value.length > 20) return
        this.setState({
            commentText: ev.target.value
        })
    }
}
