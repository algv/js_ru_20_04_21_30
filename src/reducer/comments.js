import {ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL} from '../constants'
import {arrayToMap} from '../utils'
import {Record, OrderedMap} from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: '',
})

const DefaultReducerState = Record({
    entities: new OrderedMap,
})

export default (comments = new DefaultReducerState(), action) => {
    const {type, payload, randomId, response, articleId} = action
    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(randomId, new CommentModel(
                payload.comment,
                id: randomId
            ))

        case LOAD_COMMENTS + SUCCESS:
            return comments
                .setIn(['entities'], (arrayToMap(payload.response, CommentModel)))
    }

    return comments
}
