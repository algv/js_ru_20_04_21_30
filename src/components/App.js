import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticlesPage from '../route_handlers/ArticlesPage'
import UserForm from './UserForm'
import Filters from './Filters/index'
import Counter from './Counter'
import CommentsPage from '../route_handlers/CommentsPage'
import NotFoundPage from '../route_handlers/NotFoundPage'
import {Redirect, Route, NavLink, Switch} from 'react-router-dom'
import {ConnectedRouter as Router} from 'react-router-redux'
import history from '../history'
import Menu from './Menu'
import MenuItem from './Menu/MenuItem'
import {localize} from "../nls"
import {EN, RU} from '../constants'

class App extends Component {
    static propTypes = {
    };

    state = {
        username: ''
    }

    static childContextTypes = {
        locale: PropTypes.string,
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    handleUserChange = username => this.setState({ username })

    render() {
        return (
            <Router history = {history}>
                <div>
                    <UserForm value = {this.state.username} onChange = {this.handleUserChange}/>
                    <Menu>
                        <MenuItem path = {`/${localize("components.counter", this.context.locale)}`}/>
                        <MenuItem path = {`/${localize("components.filters", this.context.locale)}`}/>
                        <MenuItem path = {`/${localize("components.articles", this.context.locale)}`}/>
                    </Menu>

                    <Switch>
                        <Route path = {`/${localize("components.counter", this.context.locale)}`} component = {Counter} exact />
                        <Route path = {`/${localize("components.filters", this.context.locale)}`} component = {Filters}/>
                        <Route path = '/articles/new' render = {this.getNewArticleComponent}/>
                        <Route path = {`/${localize("components.articles", this.context.locale)}`} component = {ArticlesPage}/>
                        <Route path = '/comments' component = {CommentsPage} />
                        <Route path = '*' component = {NotFoundPage} />
                    </Switch>
                </div>
            </Router>
        )
    }

    getNewArticleComponent = () => {
        return <h2>New Article Component</h2>
    }
}

export default App