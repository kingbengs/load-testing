import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

import ContactUs from '../components/contact-us'

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

const AgbsPage = ({ data, intl, setLocale, pageContext }) => {
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

export default withIntl(injectIntl(AgbsPage))

export const pageQuery = graphql`
  query AgbsQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/agbs/" } }) {
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
