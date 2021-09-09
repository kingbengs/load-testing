import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl'
import { withIntl } from '../i18n'

import playControl from '../assets/player/play.png'
import googlePlayDe from '../assets/product/google-play-de.svg'
import appStoreDe from '../assets/product/app-store-de.svg'

import {
  media,
  grayText,
  LargeLinkButton,
  PlayButton,
  VideoSectionThumbnail,
  VideoSectionWrapper,
  SectionContent,
  SectionTitle,
  SectionSubtitle,
} from '../shared/styles'

import Layout from '../components/layout'
import ClientBubbles from '../components/client-bubbles'
import ClientMap from '../components/client-map'
import ContactUs from '../components/contact-us'
import EmbeddedVideoPlayer from '../components/embedded-video-player'
import PillarsSection from '../components/pillars-section'

const Outher = styled.div`
  height: 100%;
`

const PatientsHeader = styled.div`
  width: 100%;
  margin-bottom: 3em;
  background-image: url('https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/patient-header-mobile.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 23.67rem;

  ${media.tablet`
  background-image: url('https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/Patients-header.jpg');
  height: 40rem;
  `}
  
  ${media.desktop`
  background-image: url('https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/Patients-header.jpg');
  height: 55rem;
  `}

  ${media.landscape`
    background-image: url('https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/Patients-header.jpg');  
    height: 50vh;
  `}
`

const HeaderTextBox = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80%;
  padding: 0.5rem;

  ${SectionSubtitle} {
    font-size: 1.2rem;
  }

  ${media.tablet`
    padding: 1rem 2rem 2rem;
    width: 50%;

    ${SectionTitle} {
      margin: 0.67em 0;
    }

    ${SectionSubtitle} {
      font-size: 1.46rem;
    }
  `};
`

const AppSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 1rem;
`

const TabletChecklistWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3rem;
  flex-direction: column;
  align-items: center;

  ${media.desktop`
    flex-direction: row;
    align-items: unset;
  `}
`

const AppPicture = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;

  ${media.desktop`
    justify-content: flex-end;
    width: 50%;
  `}
`

const TabletImage = styled.img`
  width: 100%;
  height: auto;
  align-self: center;
`

const AppChecklistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 90%;
  justify-content: center;

  ${media.desktop`
    margin-left: 7rem;
    width: 35%;
    justify-content: flex-start;
  `}
`

const Checklist = styled.ul`
  padding: 0;
  margin-top: 0;
`

const ChecklistItem = styled.li`
  list-style: none;
  ${grayText}
  font-size: 1.46rem;
  text-indent: -2.46rem;
  padding-left: 2.46rem;
  margin-bottom: 1rem;

  &:before {
    height: 1.46rem;
    width: 1.46rem;
    margin-right: 1rem;
    content: '';
    display: inline-block;
    background-image: url('https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/check-icon.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left bottom;
  }
`

const HowSection = styled.div`
  text-align: center;
  padding: 1rem 1rem 3rem;
`

const HowFeatureWrapper = styled.div`
  padding: 1rem;
  ${media.tablet`
    width: calc(33% - 2rem);
  `}
`

const HowFeatureImage = styled.img`
  width: 18rem;

  ${media.tablet`
    width: 15rem;
  `};
  ${media.desktop`
    width: 20rem;
  `};
`

const ClientsSection = styled.div`
  background-color: #edf9f8;
  padding: 0 1rem 1rem;
`

const ClientsSectionTitle = styled(SectionTitle)`
  margin-top: 0;
  margin-bottom: 0;
  padding: 3rem 1rem;
`

const ReadySection = styled.div`
  background-color: #cde9e8;
  text-align: center;
  padding: 1.5rem 1rem 1rem;
`

const ReadySectionContent = styled(SectionContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ReadyFeatureImage = styled.img`
  width: 5rem;
`

const ReadySubtitle = styled(SectionSubtitle)`
  a {
    color: #4f4f4f;
  }
`

const DownloadApp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 30rem;
  padding: 2rem;
  align-self: center;
`

const StoreImage = styled.img`
  width: 100%;
  height: auto;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
`

const GooglePlayLink = styled.a`
  width: 50%;
`

const AppStoreLink = styled.a`
  width: 44.33%;
`

const OurClinicsSection = styled.div`
  text-align: center;
  padding: 0 1rem;
`

const OurClinicsSectionTitle = styled(SectionTitle.withComponent('h2'))`
  margin: 3rem 0;
  padding: 0 1rem;
`

const DemoButton = styled(LargeLinkButton)`
  display: block;
  width: fit-content;
  margin: 2rem auto 3rem;
  padding: 0 0.99rem;
  font-size: 1.3rem;

  ${media.tablet`
    padding: 0 3rem;
  `};
`

const Gif = styled.img`
  display: none;
  height: auto;
  width: 17rem;
  position: relative;
  bottom: 0;
  left: 0;

  ${media.desktop`
    display: inline-block;
  `};
`

const Features = styled.div`
  width: 100%;
  justify-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const FeatureTitle = styled(SectionTitle)`
  margin: 1rem 0;
`

const HeaderButton = styled(LargeLinkButton)`
  margin: 1rem 0.5rem;
  font-size: 1.1rem;
  padding: 0.25rem 1.5rem;
  width: calc (75% - 1rem);
  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 2rem;

  ${media.desktop`
    margin: 0;
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
    width: 95%;
  `}
`

const HeaderButtonSection = styled.div`
  width: 100%;
  margin: 0.25rem 0;
  display: flex;
  flex-direction: column;
  line-height: 1.8rem;
  

  ${media.desktop`
    flex-direction: row;
    margin: 2rem 0 0.5rem;
    max-width: 58rem;

    ${HeaderButton}:nth-child(1) {
      padding: 0.25rem 2rem;
      margin: 0 3rem 0 0;
    }
`}
`


const HowFeature = props => (
  <HowFeatureWrapper>
    <HowFeatureImage src={props.src} />
    <FeatureTitle as="h3">
      <FormattedMessage id={props.titleId} />
    </FeatureTitle>
    <SectionSubtitle>
      <FormattedMessage id={props.subtitleId} />
    </SectionSubtitle>
  </HowFeatureWrapper>
)

const ReadyFeature = props => (
  <HowFeatureWrapper>
    <ReadyFeatureImage src={props.src} />
    <ReadySubtitle>
      <FormattedHTMLMessage id={props.subtitleId} />
    </ReadySubtitle>
  </HowFeatureWrapper>
)

const PatientsPage = ({ data, intl, setLocale, pageContext }) => (
  <Layout setLocale={setLocale} originalPath={pageContext.originalPath}>
    <Outher>
      {intl.locale === 'de' && (
        <>
          <PatientsHeader>
            <HeaderTextBox>
              <SectionTitle as="h1">
                <FormattedMessage id="patients.header.title" />
              </SectionTitle>
              <SectionSubtitle>
                <FormattedMessage id="patients.header.subtitle" />
              </SectionSubtitle>
              <HeaderButtonSection>
                <HeaderButton
                  href="https://caspar-assets.s3.eu-central-1.amazonaws.com/videos/Datei+von+iOS.mp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <FormattedMessage id="patients.header.button.mobile" />
                  </HeaderButton>
                  <HeaderButton
                  href="https://caspar-assets.s3.eu-central-1.amazonaws.com/videos/Caspar+Tutorial+2.0.mp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <FormattedMessage id="patients.header.button.web" />
                  </HeaderButton>
                </HeaderButtonSection>
            </HeaderTextBox>
          </PatientsHeader>
          <AppSection>
            <SectionContent>
              <SectionTitle as="h2">
                <FormattedMessage id="patients.app.title" />
              </SectionTitle>
              <TabletChecklistWrapper>
                <AppPicture>
                  <TabletImage src="https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/overview-tablet.png" />
                </AppPicture>
                <AppChecklistWrapper>
                  <SectionTitle as="h3">
                    <FormattedMessage id="patients.app.checklist.title" />
                  </SectionTitle>
                  <Checklist>
                    <ChecklistItem>
                      <FormattedMessage id="patients.app.checklist.item1" />
                    </ChecklistItem>
                    <ChecklistItem>
                      <FormattedMessage id="patients.app.checklist.item2" />
                    </ChecklistItem>
                    <ChecklistItem>
                      <FormattedMessage id="patients.app.checklist.item3" />
                    </ChecklistItem>
                  </Checklist>
                </AppChecklistWrapper>
              </TabletChecklistWrapper>
            </SectionContent>
          </AppSection>
          <EmbeddedVideoPlayer
            responsive
            src="https://s3.eu-central-1.amazonaws.com/caspar-assets/videos/Caspar-teaser-de.mp4"
          >
            <VideoSectionWrapper>
              <picture>
                <VideoSectionThumbnail src="https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/teaser-bg-image-de.jpg" />
              </picture>
              <PlayButton src={playControl} />
            </VideoSectionWrapper>
          </EmbeddedVideoPlayer>
          <PillarsSection pageId="patients" />
          <HowSection>
            <SectionContent>
              <SectionTitle as="h2">
                <FormattedMessage id="patients.how.title" />
              </SectionTitle>
              <Features>
                <HowFeature
                  src="https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/overview-phone.png"
                  titleId="patients.how.item1.title"
                  subtitleId="patients.how.item1.subtitle"
                />
                <HowFeature
                  src="https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/trainings-phone.png"
                  titleId="patients.how.item2.title"
                  subtitleId="patients.how.item2.subtitle"
                />
                <HowFeature
                  src="https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/feedback-phone.png"
                  titleId="patients.how.item3.title"
                  subtitleId="patients.how.item3.subtitle"
                />
              </Features>
            </SectionContent>
          </HowSection>
          <ClientsSection>
            <SectionContent>
              <ClientsSectionTitle as="h2" center>
                <FormattedMessage id="patients.review.title" />
              </ClientsSectionTitle>
              <ClientBubbles
                posts={
                  data.markdownRemark.frontmatter[intl.locale.replace('-', '')]
                }
              />
            </SectionContent>
          </ClientsSection>
          <ReadySection>
            <ReadySectionContent>
              <SectionTitle as="h2">
                <FormattedMessage id="patients.ready.title" />
              </SectionTitle>
              <Features>
                <ReadyFeature
                  src="https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/1.png"
                  subtitleId="patients.ready.item1.subtitle"
                />
                <ReadyFeature
                  src="https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/2.png"
                  subtitleId="patients.ready.item2.subtitle"
                />
                <ReadyFeature
                  src="https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/3.png"
                  subtitleId="patients.ready.item3.subtitle"
                />
              </Features>
              <DownloadApp>
                <GooglePlayLink
                  href="https://play.google.com/store/apps/details?id=com.casparhealth.android.patient&hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImageWrapper>
                    <StoreImage src={googlePlayDe} />
                  </ImageWrapper>
                </GooglePlayLink>
                <AppStoreLink
                  href="https://itunes.apple.com/DE/app/id1222630969"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImageWrapper>
                    <StoreImage src={appStoreDe} />
                  </ImageWrapper>
                </AppStoreLink>
              </DownloadApp>
            </ReadySectionContent>
          </ReadySection>
          <OurClinicsSection>
            <OurClinicsSectionTitle center>
              <FormattedMessage id="patients.institutions.title" />
            </OurClinicsSectionTitle>
            <ClientMap />
            <Gif src="https://s3.eu-central-1.amazonaws.com/caspar-assets/GIFs/Therapist-with-a-sign.gif" />
            <DemoButton
              href="https://caspar-assets.s3.eu-central-1.amazonaws.com/patients/Caspar-fuer-Patienten.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="patients.institutions.button" />
            </DemoButton>
          </OurClinicsSection>
          <ContactUs linksOnly withoutTopSpacing />
        </>
      )}
    </Outher>
  </Layout>
)

export default withIntl(injectIntl(PatientsPage))

export const pageQuery = graphql`
  query PatientsQuery {
    markdownRemark(fileAbsolutePath: { regex: "/patients/" }) {
      frontmatter {
        de {
          title
          subtitle
          content
          image
        }
      }
    }
  }
`
