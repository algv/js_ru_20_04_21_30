import ru from "./i18n/RU"
import en from "./i18n/EN"
import {RU, EN} from './constants'

export function localize(message, locale = EN) {
  switch (locale) {
    case RU:
      return ru[message]
    case EN:
      return en[message]
  }
}
