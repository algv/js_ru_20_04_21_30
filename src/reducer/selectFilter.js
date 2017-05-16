import {SELECTION} from '../constants'

export default (selections = [], action) => {
    const {type, payload} = action

    switch (type) {
        case SELECTION:
            return [ ...payload.select ] 
    }

    return selections
}
