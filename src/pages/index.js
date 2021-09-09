import React, { Component } from 'react'
import styled, { css, keyframes } from 'styled-components'

import { FormattedMessage, injectIntl } from 'react-intl'
import { withIntl, Link } from '../i18n'

import Layout from '../components/layout'
import WinterSection from '../components/winter-section'

import headingSectionBackground from '../assets/heading-section.png'

// Press Section Logos
import aerzteZeitungLogo from '../assets/press/logo-arztezeitung.png'
import focusLogo from '../assets/press/logo-focus.png'
import healthcareStartupsLogo from '../assets/press/logo-healthcare-startups-deutschland.png'
import konradAdenauerStiftungLogo from '../assets/press/logo-konrad-adenauer-stiftung.png'
import physiopraxisLogo from '../assets/press/logo-physiopraxis.png'
import physiotalkLogo from '../assets/press/logo-physiotalk-de.png'
import rbbLogo from '../assets/press/logo-rbb.png'
import rehaNews24Logo from '../assets/press/logo-reha-news24.png'
import techCrunchLogo from '../assets/press/logo-techcrunch.png'

import casparExplainer from '../assets/index/caspar-explainer.jpg'
import casparExplainer1024 from '../assets/index/caspar-explainer-1024.jpg'
import casparExplainer640 from '../assets/index/caspar-explainer-640.jpg'
import casparExplainer480 from '../assets/index/caspar-explainer-480.jpg'
import casparExplainerMobile from '../assets/index/caspar-explainer-mobile.jpg'
import playControl from '../assets/player/play.png'

import {
  VideoSectionThumbnail,
  VideoSectionWrapper,
  PlayButton,
  media,
  SectionTitle,
  grayText,
  SectionContent,
  PageLink,
  LineDivider,
} from '../shared/styles'

import EmbeddedVideoPlayer from '../components/embedded-video-player'
import ContactUs from '../components/contact-us'
import PillarsSection from '../components/pillars-section'

// Partner Section Logos
const partnerLogoSources = [
  {
    logo:
      'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/11-Passauerwolf-logo.jpg',
    link: 'https://www.passauerwolf.de/',
  },
  {
    logo:
      'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/12-sana-logo.jpg',
    link: 'https://www.sana.de/sommerfeld',
  },
  {
    logo:
      'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/13-Schmieder-logo.jpg',
    link: 'https://www.kliniken-schmieder.de/english/home.html',
  },
  {
    logo:
      'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/14-SRH-logo.jpg',
    link: 'https://www.srh-kliniken.de/',
  },
  {
    logo:
      'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/15-Medicalpark-logo.jpg',
    link: 'https://www.medicalpark.de/',
  },
  {
    logo:
      'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/01-Vivantes-logo.jpg',
    link: 'https://www.vivantes.de/',
  },
  {
    logo:
      'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/02-ZAR-logo.jpg',
    link: 'https://www.zar-berlin.de/',
  },
  {
    logo:
      'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/03-BG-logo.jpg',
    link: 'https://www.bgklinik-badreichenhall.de/',
  },
  {
    logo:
      'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/04-Johannesbad-logo.jpg',
    link: 'https://www.johannesbad.de/',
  },
  {
    logo:
      'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/05-Michels-logo.jpg',
    link: 'https://www.michelskliniken.de/',
  },
  {
    logo:
      'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/06-Paracelsus-logo.jpg',
    link: 'https://www.paracelsus-kliniken.de/',
  },
  {
    logo:
      'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/07-Alpenpark-logo.jpg',
    link: 'https://www.klinik-alpenpark.de/',
  },
  {
    logo:
      'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/08-Median-logo.jpg',
    link: 'https://www.median-kliniken.de/de/',
  },
  {
    logo:
      'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/09-FPZ-logo.jpg',
    link: 'https://www.fpz.de/',
  },
  {
    logo:
      'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/10-KMG-logo.jpg',
    link: 'https://kmg-kliniken.de/',
  },
]

const Outer = styled.div`
  height: 100%;
`

const HeadingSection = styled.div`
  position: relative;
  height: calc(100vh - 5rem);
  min-height: 33rem;
`

const fullScreenCover = css`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  object-fit: cover;
  object-position: 80% 50%;
  height: 100%;
`

const HeadingSectionDesktopBackground = styled.video`
  ${fullScreenCover};
  display: none;
  ${media.tablet`
    display: block;
  `}
  ${media.landscape`
    display: block;
  `}
  ${media.desktop`
    display: block;
  `}
`

const HeadingSectionMobileBackground = styled.video`
  ${fullScreenCover};
  ${media.tablet`
    display: none;
  `}
  ${media.landscape`
    display: none;
  `}
  ${media.desktop`
    display: none;
  `}
`

const HeadingSectionBackgroundStatic = styled.img`
  ${fullScreenCover};
`

const HeadingContentSection = styled.div`
  padding: 4rem 0;

  ${media.tablet`
    padding 14rem 0;
  `}

  ${media.desktop`
    padding: 18rem 0;
  `}
`
const DataCertificate = styled.div`
  position: absolute;
  right: 10rem;
  top: 5rem;
  display: none;
  ${media.tablet`
display: block;
`}

  ${media.desktop`
display: block;
`}
`

const HeadingSectionTitle = styled(SectionTitle.withComponent('h1'))`
  line-height: 1.5;
  margin: 0;
  padding: 1rem 2rem 4rem;

  ${media.tablet`
    max-width: 65%;
    text-align: left;
  `}
  ${media.landscape`
    padding: 3rem 2rem 5rem;
  `}
`
const HeadingAnchor = styled.a`
  text-decoration: inherit;
  color: inherit;
  cursor: auto;
`
const HeadingSectionButton = styled.div`
  margin: 0 -1rem 0 2rem;
`

const HeadingSectionButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 85%;

  ${media.tablet`
    width: 70%;
    flex-direction: row;
  `};

  ${media.desktop`
    width: 50%;
  `};
`

const ObjectivesSection = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
`

const ObjectivesSectionContent = styled(SectionContent)`
  padding: 10rem 2rem 5rem;
  display: flex;
  flex-direction: column;

  ${media.tablet`
  flex-direction: row;
  `} ${media.desktop`
    padding-left: 0;
    padding-right: 0;
  `};
`

const CasparAppsWrapper = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  ${media.tablet`
    padding-right: 3rem;
    width: 50%;
    margin: 0;
  `}
`

const CasparApps = styled.img`
  width: 100%;
`

const ObjectivesSectionTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${media.tablet`
    width: 50%;
    padding-left: 3rem;
  `}
`

const ObjectivesSectionTitle = styled(SectionTitle.withComponent('h2'))`
  margin: 0;
  margin-bottom: 2rem;
`

const ObjectivesSectionInfo = styled.div`
  font-size: 16px;
  line-height: 26px;
  ${grayText};
  font-weight: lighter;
`

const PartnersSection = styled.div`
  padding: 10rem 0;
`

const PartnersSectionTitle = styled(SectionTitle.withComponent('h2'))`
  padding: 0 2rem 2rem;
  margin: 0 auto;
  line-height: 2.75rem;
`

const PartnersSectionLogosRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const SectionFooter = styled.div`
  margin-top: 3rem;
  text-align: center;
`

const VideoTitle = styled(SectionTitle.withComponent('h2'))`
  position: absolute;
  top: 2.6rem;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;

  ${media.tablet`
    display: block;
    top: 2rem;
  `}
  ${media.desktop`
    top: 2.6rem;
  `};
`

const PressSection = styled.div`
  background-color: white;
  padding: 10rem 0;
`

const PressSectionTitle = styled(SectionTitle.withComponent('h2'))`
  margin: 0;
  padding-bottom: 2rem;

  ${media.desktop`
    padding-bottom: 3rem;
  `};
`

const PressSectionLogosRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const PressLogo = styled.img`
  height: 2.1rem;
  margin: 2.8rem;
`

const ClientLogo = styled.img`
  max-height: 12rem;
  ${media.desktop`
    max-height: 14rem;
  `};
  margin: 0 2rem;
`

const SliderText = styled.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  align-items: center;
  overflow: hidden;
`

const movement1 = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`

const movement2 = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-200%);
  }
`

const SliderTextContainer = styled.div`
  white-space: nowrap;
  span {
    margin: 0 2rem;
  }
`

const SliderMessageSection = styled.div`
  width: calc(100% - 2rem);
  background: #07acab;
  display: flex;
  justify-content: center;
  padding: 1rem;

  ${SliderTextContainer}:nth-child(1) {
    animation: ${movement1} 62s linear infinite -31s normal;
  }

  ${SliderTextContainer}:nth-child(2) {
    animation: ${movement2} 62s linear infinite 0s normal;
  }
`

const SilderButtonSection = styled(Link)`
  color: #07acab;
  background: white;
  text-decoration: none;
  cursor: pointer;
  line-height: 2.6rem;
  padding: 0 2rem 0 2rem;
  border-radius: 1.6rem;
  display: inline-block;
  position: relative;
  font-size: 1.2rem;
  text-align: center;
  margin-left: 1.5rem;
  align-items: center;

  ${media.tablet`
    white-space: nowrap;
  `}
`

const HeadingNormal = styled.span`
  font-weight: normal;
`

const StyledLineDivider = styled(LineDivider)`
  height: 1px;
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  ${media.desktop`
    margin-right: ${({ marginRight }) => marginRight || 0};
  `}
`

const getExplainerVideoLink = locale => {
  switch (locale) {
    case 'en':
      return 'https://s3.eu-central-1.amazonaws.com/caspar-assets/videos/Caspar-explainer-en.mp4'
    case 'de':
      return 'https://s3.eu-central-1.amazonaws.com/caspar-assets/videos/Caspar-explainer-de.mp4'
    case 'zh-Hans':
      return 'https://s3.eu-central-1.amazonaws.com/caspar-assets/videos/Caspar-explainer-zh.mp4'
    case 'zh-Hant':
      return 'https://s3.eu-central-1.amazonaws.com/caspar-assets/videos/Caspar-explainer-zh.mp4'
    default:
      return 'https://s3.eu-central-1.amazonaws.com/caspar-assets/videos/Caspar-explainer-en.mp4'
  }
}

const getHeaderBackgroundDesktopVideoLink = locale => {
  switch (locale) {
    case 'en':
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/homepage-bg-video-desktop-2-en.mp4'
    case 'de':
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/homepage-bg-video-desktop-2-de.mp4 '
    case 'zh-Hans':
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/homepage-bg-video-desktop-2-en.mp4'
    case 'zh-Hant':
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/homepage-bg-video-desktop-2-en.mp4'
    default:
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/homepage-bg-video-desktop-2-en.mp4'
  }
}

const getHeaderBackgroundMobileVideoLink = locale => {
  switch (locale) {
    case 'en':
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/homepage-bg-video-mobile-2-en.mp4'
    case 'de':
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/homepage-bg-video-mobile-2-de.mp4'
    case 'zh-Hans':
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/homepage-bg-video-mobile-2-en.mp4'
    case 'zh-Hant':
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/homepage-bg-video-mobile-2-en.mp4'
    default:
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/homepage-bg-video-mobile-2-en.mp4'
  }
}

const getCasparAppsSourceLink = locale => {
  switch (locale) {
    case 'en':
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/phone-product-characters-en.gif'
    case 'de':
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/GIFs/phone-product-characters-de.gif'
    case 'zh-Hans':
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/phone-product-characters-en.gif'
    case 'zh-Hant':
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/phone-product-characters-en.gif'
    default:
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/homepage/phone-product-characters-en.gif'
  }
}

class IndexPage extends Component {
  state = {
    autoplay: true,
  }

  render() {
    const { intl, setLocale, pageContext } = this.props
    const { autoplay } = this.state

    const pressLogos = (
      <PressSectionLogosRow>
        <PressLogo src={focusLogo} />
        <PressLogo src={aerzteZeitungLogo} />
        <PressLogo src={physiotalkLogo} />
        <PressLogo src={physiopraxisLogo} />
        <PressLogo src={rbbLogo} />
        <PressLogo src={techCrunchLogo} />
        <PressLogo src={rehaNews24Logo} />
        <PressLogo src={konradAdenauerStiftungLogo} />
        <PressLogo src={healthcareStartupsLogo} />
      </PressSectionLogosRow>
    )

    return (
      <Layout setLocale={setLocale} originalPath={pageContext.originalPath}>
        <Outer>
          {/* we keep the slider until it is clear that it can be deleted
          {(intl.locale === 'de') && (
          <SliderMessageSection>
            <SliderText>
            <SliderTextContainer>
              <FormattedMessage id="index.slider.message" values={{ sliderUpdate: <b> {"Sicher in den Winter: "} </b> }} />
              <FormattedMessage id="index.slider.bulletpoint" />
              <FormattedMessage id="index.slider.second" values={{ neu: <b> {"Inhalte der App: "} </b>}} />
              <FormattedMessage id="index.slider.bulletpoint" />
              <FormattedMessage id="index.slider.third" />
              <FormattedMessage id="index.slider.bulletpoint" />
              <FormattedMessage id="index.slider.message" values={{ sliderUpdate: <b> {"Sicher in den Winter: "} </b> }} />

              <FormattedMessage id="index.slider.bulletpoint" />
              <FormattedMessage id="index.slider.second" values={{ neu: <b> {"Inhalte der App: "} </b>}} />
              <FormattedMessage id="index.slider.bulletpoint" />
              <FormattedMessage id="index.slider.third" />
              <FormattedMessage id="index.slider.bulletpoint" />
            </SliderTextContainer>
            <SliderTextContainer>
            <FormattedMessage id="index.slider.message" values={{ sliderUpdate: <b> {"Sicher in den Winter: "} </b> }} />
              <FormattedMessage id="index.slider.bulletpoint" />
              <FormattedMessage id="index.slider.second" values={{ neu: <b> {"Inhalte der App: "} </b>}} />
              <FormattedMessage id="index.slider.bulletpoint" />
              <FormattedMessage id="index.slider.third" />
              <FormattedMessage id="index.slider.bulletpoint" />
              <FormattedMessage id="index.slider.message" values={{ sliderUpdate: <b> {"Sicher in den Winter: "} </b> }} />
              <FormattedMessage id="index.slider.bulletpoint" />
              <FormattedMessage id="index.slider.second" values={{ neu: <b> {"Inhalte der App: "} </b>}} />
              <FormattedMessage id="index.slider.bulletpoint" />
              <FormattedMessage id="index.slider.third" />
              <FormattedMessage id="index.slider.bulletpoint" />
            </SliderTextContainer>
            </SliderText>
            <SilderButtonSection to="/contact/?section=customer">
                <FormattedMessage id="index.heading.demo" />
            </SilderButtonSection>
           </SliderMessageSection>
          )} */}
          <HeadingSection style={{ backgroundColor: 'rgba(245,245,220, 0.2)' }}>
            {autoplay ? (
              <React.Fragment>
                <HeadingSectionMobileBackground
                  data-object-fit="cover"
                  data-object-position="80% 50%"
                  loop
                  muted
                  playsInline
                  ref={stream => {
                    if (stream) {
                      let promise = stream.play()
                      if (promise !== undefined) {
                        promise
                          .then(() => {})
                          .catch(error => {
                            this.setState({ autoplay: false })
                          })
                      }
                    }
                  }}
                >
                  <source
                    src={getHeaderBackgroundMobileVideoLink(intl.locale)}
                    type="video/mp4"
                  />
                </HeadingSectionMobileBackground>
                <HeadingSectionDesktopBackground
                  data-object-fit="cover"
                  data-object-position="80% 50%"
                  loop
                  muted
                  playsInline
                  ref={stream => {
                    if (stream) {
                      let promise = stream.play()
                      if (promise !== undefined) {
                        promise
                          .then(() => {})
                          .catch(error => {
                            this.setState({ autoplay: false })
                          })
                      }
                    }
                  }}
                >
                  <source
                    src={getHeaderBackgroundDesktopVideoLink(intl.locale)}
                    type="video/mp4"
                  />
                </HeadingSectionDesktopBackground>
              </React.Fragment>
            ) : (
              <HeadingSectionBackgroundStatic src={headingSectionBackground} />
            )}
            <DataCertificate>
              <a href="https://ips.datenschutz-cert.de/goreha" target="_blank">
                <img
                  height="150"
                  width="150"
                  alt="data certificate"
                  src="https://caspar-assets.s3.eu-central-1.amazonaws.com/logos/dsc_ips.svg"
                />
              </a>
            </DataCertificate>
            <SectionContent>
              <HeadingContentSection>
                <HeadingSectionTitle>
                  <HeadingNormal>
                    <HeadingAnchor href="https://www.caspar-health.com/blog/anerkennung-tele-nachsorge">
                      <FormattedMessage id="index.heading.1" />
                    </HeadingAnchor>
                  </HeadingNormal>
                </HeadingSectionTitle>
                <HeadingSectionButtonWrapper>
                  <HeadingSectionButton>
                    <PageLink to="/contact/?section=customer">
                      <FormattedMessage id="index.button.contact" />
                    </PageLink>
                  </HeadingSectionButton>
                </HeadingSectionButtonWrapper>
              </HeadingContentSection>
            </SectionContent>
          </HeadingSection>
          <ObjectivesSection>
            <ObjectivesSectionContent>
              <CasparAppsWrapper>
                <CasparApps
                  src={getCasparAppsSourceLink(intl.locale)}
                  alt={intl.formatMessage({
                    id: 'index.objectives.image',
                  })}
                />
              </CasparAppsWrapper>
              <ObjectivesSectionTextWrapper>
                <ObjectivesSectionTitle>
                  <FormattedMessage id="index.objectives" />
                </ObjectivesSectionTitle>
                <ObjectivesSectionInfo>
                  <FormattedMessage
                    id="index.objectives.paragraph"
                    values={{ br: <br /> }}
                  />
                </ObjectivesSectionInfo>
              </ObjectivesSectionTextWrapper>
            </ObjectivesSectionContent>
          </ObjectivesSection>
          {intl.locale === 'de' && <WinterSection />}
          <EmbeddedVideoPlayer
            responsive
            src={getExplainerVideoLink(intl.locale)}
          >
            {/* Removed due legal issues in the video content */}
            {/* <VideoSectionWrapper>
              <picture>
                <source
                  media="(max-width: 479px)"
                  srcSet={casparExplainerMobile}
                />
                <source
                  media="(max-width: 639px)"
                  srcSet={casparExplainer480}
                />
                <source
                  media="(max-width: 1023px)"
                  srcSet={casparExplainer640}
                />
                <source
                  media="(max-width: 1399px)"
                  srcSet={casparExplainer1024}
                />
                <source media="(min-width: 1400px)" srcSet={casparExplainer} />
                <VideoSectionThumbnail src={casparExplainer} />
              </picture>
              <PlayButton src={playControl} />
            </VideoSectionWrapper> */}
          </EmbeddedVideoPlayer>
          {(intl.locale === 'de' || intl.locale === 'en') && (
            <PillarsSection pageId="index" />
          )}
          <PartnersSection>
            <SectionContent>
              <PartnersSectionTitle center>
                <FormattedMessage id="index.partners" values={{ br: <br /> }} />
              </PartnersSectionTitle>
              <PartnersSectionLogosRow>
                {partnerLogoSources.map(partnerLogoSource => (
                  <Link
                    href={partnerLogoSource.link}
                    key={partnerLogoSource.logo}
                  >
                    <ClientLogo src={partnerLogoSource.logo} />
                  </Link>
                ))}
              </PartnersSectionLogosRow>
              <SectionFooter>
                <PageLink to="/institutions/">
                  <FormattedMessage id="index.partners.moreinfo" />
                </PageLink>
              </SectionFooter>
            </SectionContent>
          </PartnersSection>
          <SectionContent>
            <StyledLineDivider />
          </SectionContent>
          <PressSection>
            <SectionContent>
              <PressSectionTitle center>
                <FormattedMessage id="index.press" />
              </PressSectionTitle>
              {intl.locale === 'de' ? (
                <>
                  <Link to="/press/">{pressLogos}</Link>
                  <SectionFooter>
                    <PageLink to="/press/">
                      <FormattedMessage id="index.press.button" />
                    </PageLink>
                  </SectionFooter>
                </>
              ) : (
                pressLogos
              )}
            </SectionContent>
          </PressSection>
          <ContactUs />
        </Outer>
      </Layout>
    )
  }
}

export default withIntl(injectIntl(IndexPage))
