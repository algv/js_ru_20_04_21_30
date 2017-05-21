import { normalizedComments as defaultComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc, [comment.id]: comment
}), {})

export default (comments = commentsMap, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT: {
            return {
                ...comments,
                [payload.id]: {
                    id: payload.id,
                    user: payload.user,
                    text: payload.text,  
                }
            }
        }
    }

    return comments
}