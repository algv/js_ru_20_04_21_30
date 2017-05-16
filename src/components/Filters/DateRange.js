import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {addDayToRange} from '../../AC/index'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    handleDayClick = (day) => {
        const {addDayToRange} = this.props
        addDayToRange(day)
    }

    render() {
        const { range } = this.props;
        const selectedRange = range.from && range.to && `${range.from.toDateString()} - ${range.to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, range) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(({range}) => ({range}), { addDayToRange })(DateRange)
