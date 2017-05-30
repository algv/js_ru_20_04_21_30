import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeLocale } from '../AC'
import {EN, RU} from '../constants'

import 'react-select/dist/react-select.css'

const locales = [RU, EN]

class LocaleSelect extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => this.props.changeLocale(selected.value)

    render() {
        const { locale } = this.props
        const options = locales.map(locale => ({
            label: locale,
            value: locale
        }))

        return <Select
            options={options}
            value={locale}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    locale: state.locale,
}), { changeLocale })(LocaleSelect)