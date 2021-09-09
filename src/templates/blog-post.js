import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { FormattedMessage } from 'react-intl'

import { withIntl } from '../i18n'

import playControl from '../assets/player/play.png'

import Layout from '../components/layout'
import ContactUs from '../components/contact-us'
import EmbeddedVideoPlayer from '../components/embedded-video-player'

import { grayText, SectionContent, VideoSectionWrapper, PlayButton, SectionTitle, SectionSubtitle, LineDivider } from '../shared/styles'
import { linkResolver, htmlSerializer } from '../shared/prismic'
import ShareIcons from '../components/share-icons'

const Outher = styled.div`
  height: 100%;
`

const BlogImage = styled.img`
  width: 100%;
  box-sizing: border-box;
  object-fit: cover;
  flex: 0 0 auto;
  padding: 0 2.5rem;
`

const BlogTitle = styled(SectionTitle.withComponent('h1'))`
  font-size: 4.4rem;
  font-weight: lighter;
  margin-top: 4.44rem;
  margin-bottom: 0;
  padding: 0 2.5rem;
`

const BlogSubTitle = styled(SectionSubtitle.withComponent('h2'))`
  margin-top: 2rem;
  margin-bottom: 0;
  padding: 0 2.5rem;
  margin-bottom: 4.44rem;
`

const BlogAuthor = styled.p`
  font-size: 1rem;
  ${grayText};
  font-weight: lighter;
  padding: 0 2.5rem;
`

const BlogDate = styled.span`
  font-size: 1rem;
  ${grayText};
  font-weight: lighter;
  padding-left: 2.5rem;
`

const BlogContent = styled.div`
  font-weight: lighter;
  font-size: 19px;
  line-height: 32px;
  color: rgb(79, 79, 79);
  font-family: 'Open Sans', sans-serif;
  margin: 0 0 15.79em 0;
  padding: 0 2.5rem;

  p:first-child {
    &::first-letter {
      float: left;
      font-size: 64px;
      line-height: 59px;
      padding-right: 8px;
      padding-left: 3px;
    }
  }

  img {
    max-width: 100%;
  }

  .caption {
    font-size: 70%;
  }
`

const DateShareWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4.44rem;
`

const StyledLineDivider = styled(LineDivider)`
  height: 1px;
  width: 18rem;
  margin: 0 2.5rem 4.44rem;
`

const StyledShareIcons = styled(ShareIcons)`
  border-style: solid;
  border-width: 0 0 0 1px;
  margin-left: 1rem;
  padding-left 1rem;
`

const StyledEmbeddedVideoPlayer = styled(EmbeddedVideoPlayer)`
  padding: 0 2.5rem;
  width: unset;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

const BlogPost = ({ data, setLocale, pageContext }) => {
  const { post } = data
  return (
    <>
      <Helmet>
        <meta
          property="og:url"
          content={`https://caspar-health.com${pageContext.originalPath}`}
        />
        <meta property="og:title" content={post.data.title.text} />
        <meta property="og:description" content={post.data.subtitle.text} />
        <meta property="og:image" content={post.data.lead_image.url} />
        <meta property="og:type" content="article" />
        <meta
          property="article:published_time"
          content={post.data.publishing_date}
        />
      </Helmet>
      <Layout setLocale={setLocale} originalPath={pageContext.originalPath}>
        <Outher>
          <SectionContent>
            {!post.data.video_link_optional && (
              <BlogImage src={post.data.lead_image.url} />
            )}
            {post.data.video_link_optional && (
              <StyledEmbeddedVideoPlayer src={post.data.video_link_optional.url}>
                <VideoSectionWrapper>
                  <Image src={post.data.lead_image.url} />
                  <PlayButton src={playControl} />
                </VideoSectionWrapper>
              </StyledEmbeddedVideoPlayer>
            )}
            <BlogTitle>{post.data.title.text}</BlogTitle>
            <BlogSubTitle>{post.data.subtitle.text}</BlogSubTitle>
            <BlogAuthor>
              <FormattedMessage id="blog.by" /> {post.data.author}
            </BlogAuthor>
            <DateShareWrapper>
              <BlogDate>{post.data.publishing_date}</BlogDate>
              <StyledShareIcons
                link={pageContext.originalPath}
                text={post.data.title.text}
              />
            </DateShareWrapper>
            <StyledLineDivider />
            <BlogContent>
              {RichText.render(
                post.data.body_text.raw,
                linkResolver,
                htmlSerializer
              )}
            </BlogContent>
          </SectionContent>
          <ContactUs linksOnly withoutTopSpacing />
        </Outher>
      </Layout>
    </>
  )
}

export default withIntl(BlogPost)

export const pageQuery = graphql`
  query queryPostBySlug($uid: String!) {
    post: prismicBlogPost(uid: { eq: $uid }) {
      uid
      lang
      data {
        title {
          text
        }
        subtitle {
          text
        }
        author
        publishing_date(formatString: "DD.MM.YYYY")
        video_link_optional {
          url
        }
        lead_image {
          alt
          dimensions {
            width
            height
          }
          url
        }
        body_text {
          raw {
            type
            text
            url
            dimensions {
              width
              height
            }
            spans {
              start
              end
              type
              data {
                id
                isBroken
                label
                lang
                link_type
                slug
                tags
                type
                uid
                url
              }
            }
          }
        }
      }
    }
  }
`
