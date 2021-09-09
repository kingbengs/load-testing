import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { IntlProvider, addLocaleData } from 'react-intl'
import { localeData, defaultLocale } from './config'
import * as localMessages from '../layouts/messages'

addLocaleData(localeData)

export default ComposedComponent => {
  class withIntl extends Component {
    static childContextTypes = {
      language: PropTypes.object,
    }

    constructor(props) {
      super()
      const { locale, languages, originalPath } = props.pageContext

      this.state = {
        language: {
          locale,
          languages,
          originalPath,
        },
      }
    }

    getChildContext() {
      const { language } = this.state
      return { language }
    }

    setLocale(value) {
      let originalPath = this.state.language.originalPath
      if (
        originalPath.startsWith('/blog/') ||
        originalPath.startsWith('/press/') ||
        originalPath.startsWith('/patients/')
      ) {
        originalPath = ''
      }
      const path =
        value === defaultLocale ? originalPath : `/${value}${originalPath}`

      navigate(path)
    }

    render() {
      const locale = this.state.language.locale || defaultLocale
      const messages = localMessages[locale.replace('-', '')]

      return (
        <IntlProvider locale={locale} messages={messages}>
          <ComposedComponent
            {...this.props}
            setLocale={this.setLocale.bind(this)}
          />
        </IntlProvider>
      )
    }
  }

  return withIntl
}
