import React, { Component } from 'react'
import PropTypes from 'prop-types'
//достаточно сильно усложняешь себе жизнь, мог бы тогда просто функцию в контекст поместить
import {localize} from "../../nls"

class Menu extends Component {
    static propTypes = {

    };

    //лучше воспользуйся декоратором или отдельным компонентом
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
