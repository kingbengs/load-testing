import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { defaultLocale } from './config'

const I18nLink = ({ to, children, ...rest }, { language }) => {
  const { locale } = language
  const toWithLocale = locale === defaultLocale ? to : `/${locale}${to}`
  if (to) {
    return (
      <Link to={toWithLocale} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <a {...rest}>{children}</a>
  )
}

I18nLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
}

I18nLink.defaultProps = {
  to: null
}

I18nLink.contextTypes = {
  language: PropTypes.object,
}

export default I18nLink
