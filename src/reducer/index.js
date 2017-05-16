import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import dateRange from './dateRange'
import selections from './selectFilter'

export default combineReducers({
    counter: counterReducer,
    articles,
    range: dateRange,
    selections
})