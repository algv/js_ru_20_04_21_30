import {ADD_DAY_TO_RANGE, INCREMENT, DELETE_ARTICLE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function addDayToRange(day) {
    return {
        type: ADD_DAY_TO_RANGE,
        payload: { day }
    }
}
