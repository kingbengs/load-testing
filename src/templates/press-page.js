import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ContactUs from '../components/contact-us'
import PressArticle from '../components/press-article'

import { Link, withIntl } from '../i18n'

import {
  SectionContent,
  media,
  SectionSubtitle,
  grayText,
} from '../shared/styles'

import arrowForward from '../assets/arrow-forward.png'
import arrowBack from '../assets/arrow-back.png'

const Outher = styled.div`
  height: 100%;
`

const PressHeader = styled.div`
  width: 100%;
  margin-bottom: 2em;

  ${media.desktop`
    margin-bottom: 5em;
  `}
`

const HeaderImage = styled.img`
  width: 100%;
  height: auto;
`

const DownloadSection = styled.div`
  background-color: #9fdbd7;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5em 0 6em 0;
  flex-direction: column;
`

const DownloadSectionTitle = styled(SectionSubtitle)`
  font-weight: bold;
  margin: 0.5rem 0 0.75rem 0;
`

const DownloadDropDownButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`

const DownloadButton = styled.div`
  font-weight: lighter;
  font-size: 1.5rem;
  background: linear-gradient(to left, #07ACAB, #50D0C6);
  color: white;
  width: 25rem;
  text-align: center;
  margin-top: 1rem;
  padding: 0.75rem 0;
  cursor: pointer;
`

const DownloadLinkContainer = styled.div`
  z-index: 1;
  position: absolute;
  background-color: white;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.75rem;
  padding: 0.75rem 0em;
  width: 25rem;
  display: none;
  ${props => props.downloadLinkContainerVisible && 'display: flex;'}
`

const DownloadLogoLink = styled.a`
  text-decoration: none;
`

const DownloadLink = styled.a`
  ${grayText}
`

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`

const PageButton = styled(Link)`
  width: 7vw;
  height: 7vw;
  border: 0.12rem solid #07acab;
  border-radius: 50%;
  margin: 0 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 5vw;
  color: #07acab;
  ${props =>
    props.active === 'true' && `color: white; background: linear-gradient(to left, #07ACAB, #50D0C6);`}
  ${media.tablet`
    margin: 0 0.5rem;
    width: 3rem;
    height: 3rem;
    font-size: 2rem;
  `}
`

const ArrowImage = styled.img`
  height: 4vw;
  width: auto;
  ${media.tablet`
    height: 1.5rem;
  `}
`

const buildPressPagePath = pageNumber =>
  `/press/${pageNumber > 1 ? `${pageNumber}` : ''}`

const renderPageButtons = (currentPage, amountOfPages) => {
  const pageButtons = []
  pageButtons.push(
    <PageButton key="arrowBack" to={buildPressPagePath(currentPage - 1)}>
      <ArrowImage src={arrowBack} />
    </PageButton>
  )
  for (let pageNumber = 1; pageNumber <= amountOfPages; pageNumber++) {
    pageButtons.push(
      <PageButton
        key={pageNumber}
        active={(currentPage === pageNumber).toString()}
        to={buildPressPagePath(pageNumber)}
      >
        {pageNumber}
      </PageButton>
    )
  }
  pageButtons.push(
    <PageButton
      key="arrowForward"
      to={buildPressPagePath(
        currentPage < amountOfPages ? currentPage + 1 : currentPage
      )}
    >
      <ArrowImage src={arrowForward} />
    </PageButton>
  )
  return pageButtons
}

class PressPage extends React.Component {
  state = {
    downloadLinkContainerVisible: false,
  }
  render() {
    const { data, setLocale, pageContext } = this.props
    const { downloadLinkContainerVisible } = this.state
    return (
      <Layout setLocale={setLocale} originalPath={pageContext.originalPath}>
        <Outher>
          <PressHeader>
            <HeaderImage src="https://caspar-assets.s3.eu-central-1.amazonaws.com/press/press-header.png" />
          </PressHeader>
          <SectionContent>
            {data.articles.edges.map(({ node }) => (
              <PressArticle
                key={node.data.title.text}
                imageUrl={node.data.image.url}
                title={node.data.title.text}
                date={node.data.date}
                text={node.data.text.raw && node.data.text.raw[0].text}
                link={node.data.link.url}
                linkText={node.data.link_text.text}
                video={node.data.type === 'Video'}
              />
            ))}
            <PaginationWrapper>
              {renderPageButtons(
                pageContext.currentPage,
                pageContext.amountOfPages
              )}
            </PaginationWrapper>
          </SectionContent>
          <DownloadSection>
            <DownloadSectionTitle>Pressematerial</DownloadSectionTitle>
            <DownloadLogoLink href={data.page.edges[0].node.data.link.url}>
              <DownloadButton>Logos Downloads</DownloadButton>
            </DownloadLogoLink>
            <DownloadDropDownButtonWrapper>
              <DownloadButton
                onClick={() =>
                  this.setState(prevState => ({
                    downloadLinkContainerVisible: !prevState.downloadLinkContainerVisible,
                  }))
                }
              >
                Presseartikel Downloads
              </DownloadButton>
              <DownloadLinkContainer
                downloadLinkContainerVisible={downloadLinkContainerVisible}
              >
                {data.page.edges[0].node.data.press_releases.map(
                  ({ link, link_text }) => (
                    <DownloadLink
                      key={link_text.text}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={link.url}
                    >
                      {link_text.text}
                    </DownloadLink>
                  )
                )}
              </DownloadLinkContainer>
            </DownloadDropDownButtonWrapper>
          </DownloadSection>
          <ContactUs />
        </Outher>
      </Layout>
    )
  }
}

export default withIntl(PressPage)

export const pageQuery = graphql`
  query PressPageQuery($skip: Int!) {
    page: allPrismicPressPage(filter: { lang: { eq: "de-de" } }) {
      edges {
        node {
          data {
            link {
              url
            }
            press_releases {
              link {
                url
              }
              link_text {
                text
              }
            }
          }
        }
      }
    }
    articles: allPrismicPressArticle(
      filter: { lang: { eq: "de-de" } }
      sort: { fields: [data___date], order: DESC }
      skip: $skip
      limit: 6
    ) {
      edges {
        node {
          data {
            type
            image {
              url
            }
            title {
              text
            }
            date(formatString: "DD.MM.YYYY")
            text {
              raw {
                type
                text
              }
            }
            link {
              url
            }
            link_text {
              text
            }
          }
        }
      }
    }
  }
`
