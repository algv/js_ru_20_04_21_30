import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC/index'
import {localize} from "../nls"
import {RU, EN} from '../constants'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number
    };

    static contextTypes = {
        locale: PropTypes.string
    }

    render() {
        return (
            <h1>
                {this.props.count}
                <a href = "#" onClick = {this.handleClick}>{localize("href.increment", this.context.locale)}</a>
            </h1>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        const { increment } = this.props
        increment()
    }
}

function mapStateToProps(storeState) {
    return {
        count: storeState.counter
    }
}


export default connect(mapStateToProps, { increment })(Counter)