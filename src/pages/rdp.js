import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout } from '../components/layout'

import { injectIntl } from 'react-intl'
import { withIntl } from '../i18n'
import { SmallSectionContent } from '../shared/styles'

const Outher = styled.div`
  height: 100%;
`

const findLocale = (data, locale) => {
  return data.allMarkdownRemark.edges.find(
    edge => edge.node.frontmatter.lang === locale
  )
}

const RDPPage = ({ data, setLocale, pageContext, intl }) => {
  const content = findLocale(data, intl.locale.replace('-', ''))

  return (
    <Layout
      setLocale={setLocale}
      intl={intl}
      originalPath={pageContext.originalPath}
    >
      <Outher>
        <SmallSectionContent
          dangerouslySetInnerHTML={{ __html: content.node.html }}
        />
      </Outher>
    </Layout>
  )
}

export default withIntl(injectIntl(RDPPage))

export const pageQuery = graphql`
  query RdpQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/rdp/" } }) {
      edges {
        node {
          html
          frontmatter {
            title
            lang
          }
        }
      }
    }
  }
`
