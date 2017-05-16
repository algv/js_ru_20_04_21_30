import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {selectFilter} from '../../AC/index'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        const { articles, selections } = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <Select options = {options} value = {selections}
                    onChange = {this.handleSelectionChange}
                    multi = {true}
            />
        )
    }

    handleSelectionChange = selection => {
        const {selectFilter} = this.props
        selectFilter(selection)
    }
}

function mapStateToProps(storeState) {
    return {
        selections: storeState.selections,
        articles: storeState.articles
    }
}

export default connect(mapStateToProps, { selectFilter })(SelectFilter)
