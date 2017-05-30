import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {localize} from "../../nls"

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
        locale: PropTypes.string
    }

    render() {
        return (
            <div>
                <h2>{`${localize("components.menu", this.context.locale)}:`}</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Menu