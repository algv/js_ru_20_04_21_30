import { ADD_COMMENT } from '../constants'

export default store => next => action => {
    const { type, payload } = action

    switch (type) {
        //через мидлвары будет проходить каждый экшин, они должны быть максимально общими, завязывать на конкретные экшины - не лучшее решение
        case ADD_COMMENT:
            action.payload.id = parseInt(Math.random().toString().substr(2, 5))
    }

    next(action)
}
