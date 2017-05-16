import {ADD_DAY_TO_RANGE} from '../constants'
import { DateUtils } from 'react-day-picker'

export default (range = {from: null, to: null}, action) => {
    const {type, payload} = action

    switch (type) {
        case ADD_DAY_TO_RANGE:
            return DateUtils.addDayToRange(payload.day, range)   
    }

    return range
}
