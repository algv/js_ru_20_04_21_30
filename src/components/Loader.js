import React, {PropTypes} from 'react'
import {localize} from "../nls"

const Loader = ({children}, context) =>
  <h1>{localize("message.loading", context.locale)}</h1>

Loader.contextTypes = {locale: PropTypes.string};

export default Loader