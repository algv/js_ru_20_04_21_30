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
import { connect } from 'react-redux'
import Menu from './Menu'
import MenuItem from './Menu/MenuItem'
import LocaleSelect from './LocaleSelect'
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
        const {username} = this.state
        const { locale } = this.props
        return {
            locale,
            user: username
        }
    }

    handleUserChange = username => this.setState({ username })

    render() {
        return (
            <Router history = {history}>
                <div>
                    <LocaleSelect />
                    <UserForm value = {this.state.username} onChange = {this.handleUserChange}/>
                    <Menu>
                        <MenuItem path = '/counter'/>
                        <MenuItem path = '/filters'/>
                        <MenuItem path = '/articles'/>
                    </Menu>

                    <Switch>
                        <Route path = '/counter' component = {Counter} exact />
                        <Route path = '/filters' component = {Filters}/>
                        <Route path = '/articles/new' render = {this.getNewArticleComponent}/>
                        <Route path = '/articles' component = {ArticlesPage}/>
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

export default connect(state => ({
    locale: state.locale,
}))(App)
