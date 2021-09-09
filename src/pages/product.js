import React from 'react'
import styled, { css } from 'styled-components'
import { FormattedMessage, injectIntl } from 'react-intl'
import { withIntl } from '../i18n'

import Layout from '../components/layout'

import googlePlayEn from '../assets/product/google-play-en.svg'
import googlePlayDe from '../assets/product/google-play-de.svg'
import googlePlayZhHans from '../assets/product/google-play-zh-Hans.svg'
import googlePlayZhHant from '../assets/product/google-play-zh-Hant.svg'
import appStoreEn from '../assets/product/app-store-en.svg'
import appStoreDe from '../assets/product/app-store-de.svg'
import appStoreZhHans from '../assets/product/app-store-zh-Hans.svg'
import appStoreZhHant from '../assets/product/app-store-zh-Hant.svg'

import EmbeddedVideoPlayer from '../components/embedded-video-player'
import ContactUs from '../components/contact-us'
import AllRoundCare from '../components/all-round-care'

import contentMaking from '../assets/product/content-making.jpeg'
import playControl from '../assets/player/play.png'

import {
  VideoSectionWrapper,
  PlayButton,
  SectionTitle,
  LargeLinkButton,
  SectionContent,
  SectionSubtitle,
  LineDivider,
  grayText,
  media,
} from '../shared/styles'

const Outher = styled.div`
  height: 100%;
`

const StyledVideoSectionWrapper = styled(VideoSectionWrapper)`
  background-image: url(${contentMaking});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: calc(50vh - 2rem);
  width: calc(100% - 2rem);
  padding: 1rem;

  ${media.landscape`
    height: 70vh;
  `}
`

const ApplicationSection = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`
    flex-direction: row;
  `}
`

const ApplicationSectionPane = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.backgroundLink});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: calc(50vh - 31.985px);
  ${media.landscape`
    height: 100vh;
  `}
  ${media.tablet`
    width: 50%;
    max-height: 25rem;
  `}
  ${media.desktop`
    min-height: 40rem;
  `}
`

const ApplicationContentSection = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  margin: 4rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem;
  ${media.desktop`
    margin: 0;
    width: 20rem;
    height: 20rem;
  `}
`

const ApplicationSectionContentTitle = styled(SectionTitle.withComponent('h2'))`
  margin: 0;
  text-align: center;
`

const ApplicationSectionContentLink = styled(LargeLinkButton)`
  align-self: center;
  margin-top: 2rem;
  padding: 0 2rem;
  font-size: 1rem;
  min-width: unset;
  line-height: 2.5rem;
  ${media.desktop`
    font-size: 1.46rem;
    line-height: 3.666rem;
    padding: 0 3rem;
  `}
`

const LibrarySectionContent = styled.div`
  background-color: #ffffff;
  text-align: center;
`

const librarySectionTitles = css`
  margin: 0 auto;
  width: 82%;
`

const LibrarySectionTitle = styled(SectionTitle.withComponent('h2'))`
  padding-top: 3.75rem;
  ${librarySectionTitles};
`

const LibrarySectionSubtitle = styled(SectionSubtitle.withComponent('p'))`
  ${librarySectionTitles};
  margin-top: 1.8rem;
`

const LibrarySectionExamples = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  margin-top: 4.15rem;
  ${media.tablet`
    padding: 0;
    flex-direction: row;
    justify-content: space-around;
  `};
`

const LibrarySectionContentBox = styled.div`
  ${media.tablet`
    width: 40%;
  `};
`

const LibrarySectionExample = styled.img`
  max-width: 100%;
`

const LibrarySectionBottomTitle = styled(SectionTitle.withComponent('h3'))`
  margin: 1rem 0 2rem;
  font-size: 1.5rem;
  ${media.desktop`
    font-size: 2rem;
  `}
`

const LibrarySectionPdfLessonLink = styled(LargeLinkButton)`
  margin: 0 auto 2rem;
  ${media.desktop`
    margin: 3rem auto 5rem;
  `}
`

const CasparUsageSection = styled.div`
  background-size: cover;
  background-position: bottom;
  height: 40rem;

  ${media.tablet`
    height: 49rem;
  `};
`

const CasparUsageSectionContent = styled.div`
  max-width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  height: 100%;
  padding-top: 5rem;

  ${media.tablet`
    width: 26rem;
    padding-top: 6.67rem;
  `};
`

const CasparUsageSectionTitle = styled(SectionTitle.withComponent('h2'))`
  margin-top: 0;
  margin-bottom: 2.5rem;
`

const CasparUsageSectionDivider = styled(LineDivider)`
  width: 7rem;
`

const CasparUsageSectionText = styled.div`
  margin-top: 1.5rem;
  font-weight: lighter;
  font-size: 1.46rem;
  line-height: 2.1rem;
  ${grayText};
  ${media.desktop`
    margin-top: 2rem;
    font-size: 1.65rem;
  `}
`

const CasparInYourClinicSectionContent = styled(CasparUsageSectionContent)`
  margin-left: auto;
  padding-left: 3rem;
  padding-right: 3rem;

  ${media.tablet`
    padding-left: 6.5rem;
    padding-right: 2rem;
  `} ${media.desktop`
    padding-right: calc((100% - 78rem) / 2);
  `};
`

const CasparInYourClinicSection = styled(CasparUsageSection)`
  background-image: url(https://s3.eu-central-1.amazonaws.com/caspar-assets/clinics/einrichtung-bg-pic.jpg);
`

const PreventionAndRehabilitationSection = styled(CasparUsageSection)`
  background-image: url(${props => props.backgroundLink});
  background-position-x: 75%;
`

const PreventionAndRehabilitationSectionContent = styled(
  CasparUsageSectionContent
)`
  padding-right: 3rem;
  padding-left: 3rem;

  ${media.tablet`
    padding-right: 6.5rem;
    padding-left: 2rem;
  `} ${media.desktop`
    padding-left: calc((100% - 78rem) / 2);
  `};
`

const FeaturesSection = styled.div`
  background-color: #edf9f8;
  text-align: center;
`

const FeaturesSectionTitle = styled(SectionTitle.withComponent('h2'))`
  padding-top: 3rem;
  width: 85%;
  margin: 0 auto;

  ${media.desktop`
    width: 80%;
  `}
`

const Features = styled.div`
  width: 100%;
  margin-top: 3.75rem;
  justify-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const FeatureWrapper = styled.div`
  padding: 1rem;
`

const FeatureImage = styled.img`
  width: 10rem;

  ${media.tablet`
  width: 14rem;
  `};
`

const FeatureTitle = styled.div`
  font-weight: lighter;
  font-size: 1.2rem;
  ${grayText};
  margin-top: 1.2rem;
`

const FeatureSectionContent = styled(SectionContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DownloadApp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 30rem;
  padding: 4rem 2rem;
`

const ContentProductionVideoTitle = styled(SectionTitle.withComponent('h3'))`
  width: 100%;
  text-align: center;
  margin: 0;
  ${media.landscape`
    margin: 0;
  `}
  ${media.desktop`
    margin-top: 2rem;
  `}
`

const getGooglePlayBackground = locale => {
  switch (locale) {
    case 'en':
      return googlePlayEn
    case 'de':
      return googlePlayDe
    case 'zh-Hans':
      return googlePlayZhHans
    case 'zh-Hant':
      return googlePlayZhHant
    default:
      return googlePlayEn
  }
}

const getAppStoreBackground = locale => {
  switch (locale) {
    case 'en':
      return appStoreEn
    case 'de':
      return appStoreDe
    case 'zh-Hans':
      return appStoreZhHans
    case 'zh-Hant':
      return appStoreZhHant
    default:
      return appStoreEn
  }
}

const getSmartphoneBackground = locale => {
  switch (locale) {
    case 'en':
      return 'https://s3.eu-central-1.amazonaws.com/caspar-assets/clinics/nachbetreuung-bg-pic-en.jpg'
    case 'de':
      return 'https://s3.eu-central-1.amazonaws.com/caspar-assets/clinics/nachbetreuung-bg-pic-de.jpg'
    case 'zh-Hans':
      return 'https://s3.eu-central-1.amazonaws.com/caspar-assets/clinics/nachbetreuung-bg-pic-cn.jpg'
    case 'zh-Hant':
      return 'https://s3.eu-central-1.amazonaws.com/caspar-assets/clinics/nachbetreuung-bg-pic-cn.jpg'
    default:
      return 'https://s3.eu-central-1.amazonaws.com/caspar-assets/clinics/nachbetreuung-bg-pic-en.jpg'
  }
}

const Image = styled.img`
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

const getGooglePlayLink = locale => {
  switch (locale) {
    case 'en':
      return 'https://play.google.com/store/apps/details?id=com.casparhealth.android.patient'
    case 'de':
      return 'https://play.google.com/store/apps/details?id=com.casparhealth.android.patient&hl=de'
    case 'zh-Hans':
      return 'https://play.google.com/store/apps/details?id=com.casparhealth.android.patient&hl=zh-CN'
    case 'zh-Hant':
      return 'https://play.google.com/store/apps/details?id=com.casparhealth.android.patient&hl=zh-HK'
    default:
      return 'https://play.google.com/store/apps/details?id=com.casparhealth.android.patient'
  }
}

const getAppStoreLink = locale => {
  switch (locale) {
    case 'en':
      return 'https://itunes.apple.com/us/app/id1222630969'
    case 'de':
      return 'https://itunes.apple.com/DE/app/id1222630969'
    case 'zh-Hans':
      return 'https://itunes.apple.com/cn/app/caspar-health/id1222630969?mt=8'
    case 'zh-Hant':
      return 'https://itunes.apple.com/hk/app/caspar-health/id1222630969?mt=8'
    default:
      return 'https://itunes.apple.com/us/app/id1222630969'
  }
}

const getCasparContentLink = locale =>
  `https://s3.eu-central-1.amazonaws.com/caspar-assets/pdf/CASPAR-content-${locale}.pdf`

const Feature = props => (
  <FeatureWrapper>
    <FeatureImage src={props.src} />
    <FeatureTitle>{props.title}</FeatureTitle>
  </FeatureWrapper>
)

const ProductPage = ({ intl, setLocale, pageContext }) => (
  <Layout setLocale={setLocale} originalPath={pageContext.originalPath}>
    <Outher>
    {(intl.locale === 'de') && (
        <AllRoundCare />
      )}
      <ApplicationSection>
        <ApplicationSectionPane backgroundLink="https://s3.eu-central-1.amazonaws.com/caspar-assets/clinics/Einrichtung.jpg">
          <ApplicationContentSection>
            <ApplicationSectionContentTitle>
              <FormattedMessage id="product.application-section.left" />
            </ApplicationSectionContentTitle>
            <ApplicationSectionContentLink href="#product-4">
              <FormattedMessage id="product.application-section.more" />
            </ApplicationSectionContentLink>
          </ApplicationContentSection>
        </ApplicationSectionPane>
        <ApplicationSectionPane backgroundLink="https://s3.eu-central-1.amazonaws.com/caspar-assets/clinics/Nachbetreuung.jpg">
          <ApplicationContentSection>
            <ApplicationSectionContentTitle>
              <FormattedMessage id="product.application-section.right" />
            </ApplicationSectionContentTitle>
            <ApplicationSectionContentLink href="#product-5">
              <FormattedMessage id="product.application-section.more" />
            </ApplicationSectionContentLink>
          </ApplicationContentSection>
        </ApplicationSectionPane>
      </ApplicationSection>
      <LibrarySectionContent>
        <SectionContent>
          <LibrarySectionTitle>
            <FormattedMessage id="product.library" />
          </LibrarySectionTitle>
          <LibrarySectionSubtitle>
            <FormattedMessage id="product.library.subtitle" />
          </LibrarySectionSubtitle>
          <LibrarySectionExamples>
            <LibrarySectionContentBox>
              <LibrarySectionExample src="https://s3.eu-central-1.amazonaws.com/caspar-assets/GIFs/exercise-gif.gif" />
              <LibrarySectionBottomTitle>
                <FormattedMessage id="product.library.training" />
              </LibrarySectionBottomTitle>
            </LibrarySectionContentBox>
            <LibrarySectionContentBox>
              <LibrarySectionExample src="https://s3.eu-central-1.amazonaws.com/caspar-assets/GIFs/Seminar-2-gif.gif" />
              <LibrarySectionBottomTitle>
                <FormattedMessage id="product.library.seminare" />
              </LibrarySectionBottomTitle>
            </LibrarySectionContentBox>
          </LibrarySectionExamples>
          <LibrarySectionPdfLessonLink
            href={getCasparContentLink(intl.locale)}
            target="_blank"
          >
            <FormattedMessage id="product.library.pdf-lesson" />
          </LibrarySectionPdfLessonLink>
        </SectionContent>
      </LibrarySectionContent>

      <EmbeddedVideoPlayer src="https://s3.eu-central-1.amazonaws.com/caspar-assets/videos/Making_of_Caspar_170518_01.mp4">
        <StyledVideoSectionWrapper>
          <ContentProductionVideoTitle>
            {intl.locale === 'de' ? (
              <>
                <FormattedMessage id="product.content.first-line" />
                <br />
                <FormattedMessage id="product.content.second-line" />
              </>
            ) : (
              <FormattedMessage id="product.content" />
            )}
          </ContentProductionVideoTitle>
          <PlayButton src={playControl} />
        </StyledVideoSectionWrapper>
      </EmbeddedVideoPlayer>
      <CasparInYourClinicSection id="product-4">
        <CasparInYourClinicSectionContent>
          <CasparUsageSectionTitle>
            <FormattedMessage id="product.caspar-in-your-clinic" />
          </CasparUsageSectionTitle>
          <CasparUsageSectionDivider />
          <CasparUsageSectionText>
            <FormattedMessage
              defaultMessage=""
              id="product.caspar-in-your-clinic.line1"
            />
          </CasparUsageSectionText>
        </CasparInYourClinicSectionContent>
      </CasparInYourClinicSection>
      <PreventionAndRehabilitationSection
        id="product-5"
        backgroundLink={getSmartphoneBackground(intl.locale)}
      >
        <PreventionAndRehabilitationSectionContent>
          <CasparUsageSectionTitle>
            <FormattedMessage id="product.prevention-rehabilitation" />
          </CasparUsageSectionTitle>
          <CasparUsageSectionDivider />
          <CasparUsageSectionText>
            <FormattedMessage
              defaultMessage=""
              id="product.prevention-rehabilitation.line1"
            />{' '}
            <br />
            <br />
            <FormattedMessage
              defaultMessage=""
              id="product.prevention-rehabilitation.line2"
            />
          </CasparUsageSectionText>
        </PreventionAndRehabilitationSectionContent>
      </PreventionAndRehabilitationSection>
      <FeaturesSection>
        <FeatureSectionContent>
          <FeaturesSectionTitle>
            {intl.locale === 'de' ? (
              <>
                <FormattedMessage id="product.features.first-line" />
                <br />
                <FormattedMessage id="product.features.second-line" />
              </>
            ) : (
              <FormattedMessage id="product.features" />
            )}
          </FeaturesSectionTitle>
          <Features>
            <Feature
              src="https://s3.eu-central-1.amazonaws.com/caspar-assets/GIFs/trainingplan-icon.gif"
              title={intl.formatMessage({
                id: 'product.features.training-plan',
              })}
            />
            <Feature
              src="https://s3.eu-central-1.amazonaws.com/caspar-assets/GIFs/chat-icon.gif"
              title={intl.formatMessage({ id: 'product.features.chat' })}
            />
            <Feature
              src="https://s3.eu-central-1.amazonaws.com/caspar-assets/GIFs/tracking-icon.gif"
              title={intl.formatMessage({ id: 'product.features.tracking' })}
            />
            <Feature
              src="https://s3.eu-central-1.amazonaws.com/caspar-assets/GIFs/recording-icon.gif"
              title={intl.formatMessage({ id: 'product.features.recording' })}
            />
            <Feature
              src="https://s3.eu-central-1.amazonaws.com/caspar-assets/GIFs/Videocall-icon1.gif"
              title={intl.formatMessage({ id: 'product.features.videochat' })}
            />
          </Features>
          <DownloadApp>
            <GooglePlayLink
              href={getGooglePlayLink(intl.locale)}
              target="_blank"
              locale={intl.locale}
            >
              <ImageWrapper>
                <Image src={getGooglePlayBackground(intl.locale)} />
              </ImageWrapper>
            </GooglePlayLink>
            <AppStoreLink
              href={getAppStoreLink(intl.locale)}
              target="_blank"
              locale={intl.locale}
            >
              <ImageWrapper>
                <Image src={getAppStoreBackground(intl.locale)} />
              </ImageWrapper>
            </AppStoreLink>
          </DownloadApp>
        </FeatureSectionContent>
      </FeaturesSection>
      <ContactUs />
    </Outher>
  </Layout>
)

export default withIntl(injectIntl(ProductPage))
