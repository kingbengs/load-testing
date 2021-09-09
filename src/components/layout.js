import React from 'react'
import { injectIntl } from 'react-intl'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import { languages, defaultLocale } from '../i18n'
import favicon16 from '../assets/favicon-16x16.png'
import favicon32 from '../assets/favicon-32x32.png'
import favicon from '../assets/favicon.ico'

import Header from './header'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
    font-size: 12px !important;
  }
  body {
    margin: 0;
    font-family: "Open Sans", sans-serif;
  }
`

const Outer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const HeightSaverIe = styled.div`
  height: 100%;
`

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    speed: 1500,
    speedAsDuration: true,
    easing: 'easeInOutCubic',
  })
}

export class Layout extends React.Component {
  state = {
    locale:
      (typeof localStorage !== 'undefined' &&
        localStorage.getItem('caspar-website-locale')) ||
      (typeof navigator !== 'undefined' &&
      navigator.language.substr(0, 2) === 'de'
        ? 'de'
        : 'en'),
  }

  render() {
    const location =
      typeof window !== 'undefined'
        ? `${window.location.protocol}//${window.location.host}`
        : 'https://caspar-health.com'

    const hreflangLinks = languages.map(language => {
      const path =
        language.id === defaultLocale
          ? this.props.originalPath
          : `/${language.id}${this.props.originalPath}`
      return {
        rel: 'alternate',
        href: `${location}${path}`,
        hreflang: language.id,
      }
    })

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={() => (
          <Outer>
            <Helmet
              title={this.props.intl.formatMessage({ id: 'meta.title' })}
              meta={[
                {
                  name: 'description',
                  content: this.props.intl.formatMessage({
                    id: 'meta.description',
                  }),
                },
                {
                  name: 'keywords',
                  content: this.props.intl.formatMessage({
                    id: 'meta.keywords',
                  }),
                },
              ]}
              link={[
                ...hreflangLinks,
                {
                  rel: 'icon',
                  type: 'img/png',
                  sizes: '32x32',
                  href: favicon32,
                },
                {
                  rel: 'icon',
                  type: 'img/png',
                  sizes: '16x16',
                  href: favicon16,
                },
                { rel: 'shortcut icon', href: favicon },
              ]}
              script={[
                {
                  innerHTML: `
                    window.intercomSettings = {
                      app_id: 'ssbn8jyx'
                    };
                    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var   s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/ssbn8jyx';var x=d.getElementsByTagName('script')   [0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
                  `,
                },
              ]}
            />
            <HeightSaverIe>
              <Header setLocale={this.props.setLocale} />
              <div>{this.props.children}</div>
              <Footer />
            </HeightSaverIe>
            <GlobalStyle />
          </Outer>
        )}
      />
    )
  }
}

export default injectIntl(Layout)
