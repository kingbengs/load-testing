import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import ContactUs from '../components/contact-us'
import { withIntl, Link } from '../i18n'

import {
  media,
  SectionContent,
  SectionTitle,
  SectionSubtitle,
  grayText,
} from '../shared/styles'
import { FormattedMessage } from 'react-intl'

import arrowDown from '../assets/arrow-down.svg'
import ShareIcons from '../components/share-icons'

const Outher = styled.div`
  height: 100%;
`

const BlogHeader = styled.div`
  background-image: url(https://caspar-assets.s3.eu-central-1.amazonaws.com/blog/Health-Stories+header+smaller.png);
  background-color: white;
  height: 20rem;
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;

  ${media.tablet`
    background-image: url(https://caspar-assets.s3.eu-central-1.amazonaws.com/blog/Health-Stories+header.png);
    background-size: contain;
    height: 25rem;
  `}

  ${media.desktop`
    height: 30rem;
  `}
`

const BlogPostLink = styled(Link)`
  text-decoration: none;
  flex-shrink: 0;
`

const BlogPostTeaserList = styled.div`
  display: flex;
  margin: 1rem 1rem 0;
  align-self: center;
  flex-wrap: wrap;
`

const BlogPostTeaser = styled.article`
  flex-direction: column;
  width: 100%;
  text-decoration: none;
  color: inherit;
  display: flex;
  padding: 2.5rem 1rem 0;
  width: calc(100% - 2rem);
  ${media.tablet`
    width: calc(50% - 2rem);
  `}

  ${media.desktop`
    width: calc(33.33% - 2rem);
  `}
`

const TeaserImage = styled.img`
  width: 100%;
  object-fit: cover;
  flex: 0 0 auto;
`

const TeaserTopic = styled.div`
  color: #1ed9bf;
  text-transform: uppercase;
  margin-top: 1rem;
`

const TeaserDate = styled.div`
  display: flex;
  align-items: center;
`

const TeaserTitle = styled(SectionSubtitle.withComponent('h3'))`
  font-weight: 600;
  line-height: 1.8rem;
  margin-top: 1rem;
`

const BlogTitle = styled(SectionTitle)`
  text-align: center;
  margin: 0 1rem;
`

const BlogSubtitle = styled(SectionSubtitle)`
  text-align: center;
  margin: 0 1rem;
  font-size: 2rem;
`

const FilterBar = styled.div`
  height: 4rem;
  align-items: center;
  justify-content: center;
  display: flex;
`

const FilterMenuDropdownContent = styled.div`
  display: none;
  z-index: 1;
  position: absolute;
  left: 0;
  padding: 0.5rem 2.5rem 0.5rem 0.5rem;
  margin-top: 3.5rem;
  width: 8rem;
  text-align: left;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: #e2e3e2;
`

const FilterMenuDropdown = styled.div`
  display: flex;
  position: relative;
  text-align: center;

  :hover {
    ${FilterMenuDropdownContent} {
      display: block;
    }
  }
`

const FilterMenuDropdownItem = styled(Link)`
  margin: 0.5rem 2rem 0.5rem 0.5rem;
  cursor: pointer;
  display: inline-block;
  ${grayText}

  &.active {
    border-bottom: 0.2rem solid #1ed9bf;
  }

  text-decoration: none;
  font-size: 1.4rem;

  ${media.tablet`
    font-size: 1.083rem;
  `};
`

const FilterMenuText = styled.span`
  ${grayText}
  font-size: 2rem;
  line-height: 4rem;
  display: flex;
  align-items: center;

  &:after {
    content: '';
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.5rem;
    background: url(${arrowDown}) no-repeat;
    background-position: bottom;
  }
`

const FilterMenuWrapper = styled.div`
  width: 100%;
  max-width: 90rem;
  display: flex;
  padding-left: 2rem;
  ${media.desktop`
    padding: 0;
  `};
`

const StyledShareIcons = styled(ShareIcons)`
  border-style: solid;
  border-width: 0 0 0 1px;
  margin-left: 1rem;
  padding-left 1rem;
`

const BlogPage = ({ data, setLocale, pageContext }) => {
  const { edgesWithTopic } = pageContext
  const fullDataEdges = []
  data.posts.edges.forEach(edge => {
    edgesWithTopic.forEach(edgeWithTopic => {
      if (edgeWithTopic.node.uid === edge.node.uid) fullDataEdges.push(edge)
    })
  })
  return (
    <Layout setLocale={setLocale} originalPath={pageContext.originalPath}>
      <Outher>
        <BlogHeader />
        <FilterBar>
          <FilterMenuWrapper>
            <FilterMenuDropdown>
              <FilterMenuText>
                <FormattedMessage id="blog.filter.title" />
              </FilterMenuText>
              <FilterMenuDropdownContent>
                <FilterMenuDropdownItem activeClassName="active" to="/blog/">
                  <FormattedMessage id="blog.filter.all" />
                </FilterMenuDropdownItem>
                <FilterMenuDropdownItem
                  activeClassName="active"
                  to="/blog/topic/article"
                >
                  <FormattedMessage id="blog.filter.article" />
                </FilterMenuDropdownItem>
                <FilterMenuDropdownItem
                  activeClassName="active"
                  to="/blog/topic/interview"
                >
                  <FormattedMessage id="blog.filter.interview" />
                </FilterMenuDropdownItem>
                <FilterMenuDropdownItem
                  activeClassName="active"
                  to="/blog/topic/survey"
                >
                  <FormattedMessage id="blog.filter.survey" />
                </FilterMenuDropdownItem>
                <FilterMenuDropdownItem
                  activeClassName="active"
                  to="/blog/topic/workout"
                >
                  <FormattedMessage id="blog.filter.workout" />
                </FilterMenuDropdownItem>
              </FilterMenuDropdownContent>
            </FilterMenuDropdown>
          </FilterMenuWrapper>
        </FilterBar>
        <SectionContent>
          <BlogTitle>
            <FormattedMessage id="blog.title" />
          </BlogTitle>
          <BlogSubtitle>
            <FormattedMessage id="blog.subtitle" />
          </BlogSubtitle>
          <BlogPostTeaserList>
            {fullDataEdges.map(({ node }) => (
              <BlogPostTeaser key={node.id}>
                <BlogPostLink to={`/blog/${node.uid}`}>
                  <TeaserImage src={node.data.lead_image.url} />
                </BlogPostLink>
                <TeaserTopic>{node.data.topic}</TeaserTopic>
                <TeaserDate>
                  <React.Fragment>
                    {node.data.publishing_date}
                    <StyledShareIcons
                      link={`/blog/${node.uid}`}
                      text={node.data.title.text}
                    />
                  </React.Fragment>
                </TeaserDate>
                <BlogPostLink to={`/blog/${node.uid}`}>
                  <TeaserTitle>{node.data.title.text}</TeaserTitle>
                </BlogPostLink>
              </BlogPostTeaser>
            ))}
          </BlogPostTeaserList>
        </SectionContent>
        <ContactUs linksOnly withoutTopSpacing />
      </Outher>
    </Layout>
  )
}

export default withIntl(BlogPage)

export const pageQuery = graphql`
  query BlogPostsQuery {
    posts: allPrismicBlogPost(
      filter: { lang: { eq: "de-de" } }
      sort: { fields: [data___publishing_date], order: DESC }
    ) {
      edges {
        node {
          id
          uid
          lang
          data {
            topic
            title {
              text
            }
            publishing_date(formatString: "DD.MM.YYYY")
            lead_image {
              alt
              dimensions {
                width
                height
              }
              url
            }
          }
        }
      }
    }
  }
`
