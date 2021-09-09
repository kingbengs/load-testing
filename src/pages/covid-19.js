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
import ShareIcons from '../components/share-icons'
import EmbeddedVideoPlayer from '../components/embedded-video-player'

import {
  grayText,
  media,
  SectionContent,
  VideoSectionWrapper,
  PlayButton,
  PageLink,
  SectionTitle
} from '../shared/styles'
import { linkResolver, htmlSerializer } from '../shared/prismic'

const Outher = styled.div`
  height: 100%;
`

const BlogTitle = styled(SectionTitle.withComponent('h1'))`
  padding: 1rem 2.5rem;
`

const BlogSubTitle = styled(SectionTitle.withComponent('h2'))`
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 0 2.5rem;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

const BlogAuthor = styled.p`
  font-size: 1rem;
  ${grayText};
  font-weight: lighter;
  padding: 0 2.5rem;
`

const BlogContent = styled.div`
  font-weight: lighter;
  font-size: 19px;
  line-height: 32px;
  color: rgb(79, 79, 79);
  font-family: 'Open Sans', sans-serif;
  margin: 0px;
  padding: 0 2.5rem;

  img {
    max-width: 100%;
  }

  .caption {
    font-size: 70%;
  }
`

const StyledEmbeddedVideoPlayer = styled(EmbeddedVideoPlayer)`
  padding: 0 2.5rem;
  width: unset;
`

const StyledShareIcons = styled(ShareIcons)`
  padding: 0 2.5rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 5rem);
  padding: 0 2.5rem 2rem;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `}
`

const StyledPageLink = styled(PageLink)`
  width: calc(100% - 10rem);
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 5rem;
  line-height: 2rem;

  ${media.tablet`
    width: calc(45% - 10rem);
  `}

  ${media.desktop`
    width: calc(45% - 6rem); 
    padding: 1rem 3rem;
`}
`

const Covid19 = ({ data: dataProp, setLocale, pageContext }) => {
  const data = dataProp.covid.nodes[0].data
  return (
    <>
      <Helmet>
        <meta
          property="og:url"
          content={`https://caspar-health.com${pageContext.originalPath}`}
        />
        <meta property="og:title" content={data.title.text} />
        <meta property="og:description" content={data.subtitle.text} />
      </Helmet>
      <Layout setLocale={setLocale} originalPath={pageContext.originalPath}>
        <Outher>
          <SectionContent>
            <BlogTitle>{data.title.text}</BlogTitle>
            {data.video_link && (
              <StyledEmbeddedVideoPlayer src={data.video_link.url}>
                <VideoSectionWrapper>
                  <Image src={data.video_thumbnail.url} />
                  <PlayButton src={playControl} />
                </VideoSectionWrapper>
              </StyledEmbeddedVideoPlayer>
            )}
            <BlogSubTitle>{data.subtitle.text}</BlogSubTitle>
            <BlogAuthor>
              <FormattedMessage id="blog.by" /> Andreas Nölting
            </BlogAuthor>
            <StyledShareIcons
              link={pageContext.originalPath}
              text={data.title.text}
            />
            <BlogContent>
              {RichText.render(
                data.body_text.raw,
                linkResolver,
                htmlSerializer
              )}
            </BlogContent>
            <ButtonWrapper>
              <StyledPageLink to="/institutions/">Patientenversorgung während COVID-19</StyledPageLink>
              <StyledPageLink to="/contact/?section=customer">Jetzt Kontakt aufnehmen</StyledPageLink>
            </ButtonWrapper>
          </SectionContent>
          <ContactUs linksOnly withoutTopSpacing/>
        </Outher>
      </Layout>
    </>
  )
}

export default withIntl(Covid19)

export const pageQuery = graphql`
  query covid19Query {
    covid: allPrismicCovid19 {
      nodes {
        data {
          body_text {
            raw {
              type
              text
              spans {
                start
                end
                type
              }
            }
          }
          title {
            text
          }
          video_link {
            url
          }
          video_thumbnail {
            url
          }
          subtitle {
            text
          }
        }
      }
    }
  }
`
