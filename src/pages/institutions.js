import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { FormattedMessage, injectIntl } from 'react-intl'
import { withIntl } from '../i18n'

import Layout from '../components/layout'

import ContactUs from '../components/contact-us'
import PictureSlider from '../components/picture-slider'
import ClientMap from '../components/client-map'
import ClientSlider from '../components/client-slider'

import { SectionTitle, SectionContent, media, PageLink } from '../shared/styles'

import ClientBubbles from '../components/client-bubbles'

const Outher = styled.div`
  height: 100%;
`

const getSlideshowImages = () => [
  'https://s3.eu-central-1.amazonaws.com/caspar-assets/clinics/03a_clinic_slideshow_01_Brandenburgklinik2.png',
  'https://s3.eu-central-1.amazonaws.com/caspar-assets/clinics/03a_clinic_slideshow_02_ZAR Bielefeld.png',
  'https://s3.eu-central-1.amazonaws.com/caspar-assets/clinics/03a_clinic_slideshow_03_ZAR Tuebingen.png',
  'https://s3.eu-central-1.amazonaws.com/caspar-assets/clinics/03a_clinic_slideshow_04_ZAR Ludwigshafen.png',
  'https://caspar-assets.s3.eu-central-1.amazonaws.com/clinics/Casper-Heinrich-Klinik.jpg'
]

const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  ${media.tablet`
    height: auto;
  `}
`

const OurClinicsSection = styled.div`
  text-align: center;
`

const OurClinicsSectionTitle = styled(SectionTitle.withComponent('h2'))`
  margin: 3rem 0;
  padding: 0 1rem;
`

const SlideshowCaption = styled(SectionTitle.withComponent('h1'))`
  z-index: 2;
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  padding: 1rem 1.5rem;
  width: calc(90% - 6rem);
  line-height: 1.5rem;

  ${media.tablet`
    font-size: 2rem;
    padding: 2rem 3rem;
    line-height: 2.4rem;
  `}

  ${media.desktop`
    font-size: 2.2rem;
    width: 50rem;
    padding: 5rem 7.5rem;
  `}

  background-color: rgba(255,255,255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ClientsSection = styled.div`
  background-color: #edf9f8;
  padding-bottom: 1rem;
`

const ClientsSectionTitle = styled(SectionTitle.withComponent('h3'))`
  margin-top: 0;
  margin-bottom: 0;
  padding: 3rem 1rem;
`

const ClientLogosContainer = styled(SectionContent)`
  margin-top: 4rem;
  margin-bottom: 2rem;
  overflow: hidden;
`

const DemoButton = styled(PageLink)`
  margin-bottom: 3rem;
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

const InstitutionsPage = ({ data, intl, setLocale, pageContext }) => (
  <Layout setLocale={setLocale} originalPath={pageContext.originalPath}>
    <Outher>
      <SlideshowContainer>
        <SlideshowCaption center>
          <FormattedMessage id="clients.slideshow" />
        </SlideshowCaption>
        <PictureSlider images={getSlideshowImages()} />
      </SlideshowContainer>
      {intl.locale === 'de' && (
        <OurClinicsSection>
          <OurClinicsSectionTitle center>
            <FormattedMessage id="clients.our-clients.title" />
          </OurClinicsSectionTitle>
          <ClientMap />
          <Gif src="https://s3.eu-central-1.amazonaws.com/caspar-assets/GIFs/Therapist-with-a-sign.gif" />
          <ClientLogosContainer>
            <ClientSlider />
          </ClientLogosContainer>
          <DemoButton to="/contact/">
            <FormattedMessage id="index.heading.demo" />
          </DemoButton>
        </OurClinicsSection>
      )}
      <ClientsSection>
        <SectionContent>
          <ClientsSectionTitle center>
            <FormattedMessage id="clients.slideshow.title" />
          </ClientsSectionTitle>
          <ClientBubbles
            posts={
              data.markdownRemark.frontmatter[intl.locale.replace('-', '')]
            }
          />
        </SectionContent>
      </ClientsSection>
      <ContactUs />
    </Outher>
  </Layout>
)

export default withIntl(injectIntl(InstitutionsPage))

export const pageQuery = graphql`
  query ClientsQuery {
    markdownRemark(fileAbsolutePath: { regex: "/clients/" }) {
      frontmatter {
        de {
          title
          subtitle
          content
          image
        }
        en {
          title
          subtitle
          content
          image
        }
        zhHans {
          title
          subtitle
          content
          image
        }
        zhHant {
          title
          subtitle
          content
          image
        }
      }
    }
  }
`
