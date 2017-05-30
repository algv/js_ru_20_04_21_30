import { CHANGE_LANGUAGE, RU, EN } from '../constants'

export default (locale = EN, action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_LANGUAGE:
            return payload.locale
    }

    return locale
}
