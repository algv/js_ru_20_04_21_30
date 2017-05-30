import { CHANGE_LOCALE, RU, EN } from '../constants'

export default (locale = EN, action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_LOCALE:
            return payload.locale
    }

    return locale
}
