import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { injectIntl } from 'react-intl'
import { withIntl } from '../i18n'

import Layout from '../components/layout'

import { SmallSectionContent } from '../shared/styles'
import ContactUs from '../components/contact-us'

const Outher = styled.div`
  height: 100%;
`

const findLocale = (data, locale) => {
  return data.allMarkdownRemark.edges.find(
    edge => edge.node.frontmatter.lang === locale
  )
}

const ImpressumPage = ({ data, intl, setLocale, pageContext }) => {
  const content = findLocale(data, intl.locale.replace('-', ''))
  return (
    <Layout setLocale={setLocale} originalPath={pageContext.originalPath}>
      <Outher>
        <SmallSectionContent
          dangerouslySetInnerHTML={{ __html: content.node.html }}
        />
        <ContactUs />
      </Outher>
    </Layout>
  )
}

export default withIntl(injectIntl(ImpressumPage))

export const pageQuery = graphql`
  query ImpressumQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/impressum/" } }) {
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
