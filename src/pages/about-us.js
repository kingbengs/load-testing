import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

import ContactUs from '../components/contact-us'
import PictureSlider from '../components/picture-slider'
import { FormattedMessage, injectIntl } from 'react-intl'
import { withIntl } from '../i18n'

import {
  SectionTitle,
  LargeLinkButton,
  SectionContent,
  grayText,
  media,
} from '../shared/styles'

const Outher = styled.div`
  height: 100%;
`

const VisionAndMissionSection = styled.div`
  background-color: white;
`

const VisionAndMissionSectionContent = styled(SectionContent)`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 3rem;

  ${media.tablet`
    padding-bottom: 5.42rem;
  `};
`

const VisionMissionWrapper = styled.div`
  padding: 0 2rem;
  width: calc(100% - 4rem);
  margin-top: 3rem;
  ${media.tablet`
    width: calc(50% - 4rem);
  `};
`

const VisionAndMissionHeading = styled(SectionTitle.withComponent('h2'))`
  margin-top: 0;
  margin-bottom: 0;
`

const VisionMissionContent = styled.div`
  margin-top: 2.71rem;
  ${grayText};
  font-size: 1.46rem;
  line-height: 2.4rem;
`

const CeoLetterSection = styled.div`
  text-align: center;
  background-color: #edf9f8;
  padding: 3rem 2rem 0;
`

const CeoLetterHeading = styled(SectionTitle.withComponent('h3'))`
  margin-top: 0;
  margin-bottom: 0;
`

const CeoLetterLink = styled(LargeLinkButton)`
  margin: 2.5rem 0 3rem 0;
`

const MedicalTeamSection = styled.div`
  background-color: #d9e6e4;
  padding: 4.58rem 2rem;
`

const TeamMembers = styled.div`
  margin-top: 4.7rem;
  display: flex;
  justify-items: center;
  flex-wrap: wrap;
`

const MedicalTeamMembers = styled(TeamMembers)`
  justify-content: center;
`

const TeamSectionHeading = styled(SectionTitle.withComponent('h4'))`
  margin-top: 0;
  margin-bottom: 0;
`

const DevelopmentTeamSection = styled.div`
  background-color: #ffffff;
  padding: 6.25rem 2rem;
`

const MemberWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;

  ${media.tablet`
    width: 50%;
  `}

  ${media.desktop`
    width: 33%;
  `}
`

const MemberImage = styled.img`
  width: 50%;
  margin-bottom: 1.1rem;
`

const MemberInfoLineBold = styled.div`
  font-weight: 600;
  ${grayText};
  font-size: 1.46rem;
  line-height: 1.66rem;
`
const MemberInfoLine = styled.div`
  ${grayText};
  font-weight: lighter;
  font-size: 1rem;
  margin-top: 0.5rem;
  line-height: 1.66rem;
`

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
  ${media.tablet`
    height: auto;
  `}
`

const Member = props => (
  <MemberWrapper>
    <MemberImage src={props.image} />
    <MemberInfoLineBold>{props.one}</MemberInfoLineBold>
    <MemberInfoLineBold>{props.two}</MemberInfoLineBold>
    <MemberInfoLine>{props.info}</MemberInfoLine>
  </MemberWrapper>
)

const getSlideshowImages = locale => [
  `https://s3.eu-central-1.amazonaws.com/caspar-assets/office-photos/04a_Slideshow_02-${locale}.jpg`,
  `https://s3.eu-central-1.amazonaws.com/caspar-assets/office-photos/04a_Slideshow_03-${locale}.jpg`,
  `https://s3.eu-central-1.amazonaws.com/caspar-assets/office-photos/04a_Slideshow_04-${locale}.jpg`,
  `https://s3.eu-central-1.amazonaws.com/caspar-assets/office-photos/04a_Slideshow_05-${locale}.jpg`,
  `https://s3.eu-central-1.amazonaws.com/caspar-assets/office-photos/04a_Slideshow_06-${locale}.jpg`,
]

const getCeoLetterLink = locale =>
  `https://s3.eu-central-1.amazonaws.com/caspar-assets/pdf/CEO-letter-${locale}.pdf`

const AboutUsPage = ({ data, intl, setLocale, pageContext }) => (
  <Layout setLocale={setLocale} originalPath={pageContext.originalPath}>
    <Outher>
      <SliderContainer>
        <PictureSlider arrows images={getSlideshowImages(intl.locale)} />
      </SliderContainer>
      <VisionAndMissionSection>
        <VisionAndMissionSectionContent>
          <VisionMissionWrapper>
            <VisionAndMissionHeading>
              <FormattedMessage id="about-us.vision.title" />
            </VisionAndMissionHeading>
            <VisionMissionContent>
              <FormattedMessage id="about-us.vision" />
            </VisionMissionContent>
          </VisionMissionWrapper>
          <VisionMissionWrapper>
            <VisionAndMissionHeading>
              <FormattedMessage id="about-us.mission.title" />
            </VisionAndMissionHeading>
            <VisionMissionContent>
              <FormattedMessage id="about-us.mission" />{' '}
            </VisionMissionContent>
          </VisionMissionWrapper>
        </VisionAndMissionSectionContent>
      </VisionAndMissionSection>
      <CeoLetterSection>
        <SectionContent>
          <CeoLetterHeading center>
            <FormattedMessage id="about-us.ceo-letter" />
          </CeoLetterHeading>
          <CeoLetterLink target="_blank" href={getCeoLetterLink(intl.locale)}>
            <FormattedMessage id="about-us.ceo-letter.link" />
          </CeoLetterLink>
        </SectionContent>
      </CeoLetterSection>
      <DevelopmentTeamSection>
        <SectionContent>
          <TeamSectionHeading center>
            <FormattedMessage id="about-us.team.development" />
          </TeamSectionHeading>
          <TeamMembers>
            {data.markdownRemark.frontmatter.development.map(x => (
              <Member
                key={x.firstName + x.lastName}
                image={x.image}
                one={x.firstName}
                two={x.lastName}
                info={x.title}
              />
            ))}
          </TeamMembers>
        </SectionContent>
      </DevelopmentTeamSection>
      <MedicalTeamSection>
        <SectionContent>
          <TeamSectionHeading center>
            <FormattedMessage id="about-us.team.medical" />
          </TeamSectionHeading>
          <MedicalTeamMembers>
            {data.markdownRemark.frontmatter.medical.map(x => (
              <Member
                image={x.image}
                key={x.name}
                one={x.title}
                two={x.name}
                info={x.role}
              />
            ))}
          </MedicalTeamMembers>
        </SectionContent>
      </MedicalTeamSection>
      <ContactUs linksOnly withoutTopSpacing />
    </Outher>
  </Layout>
)

export default withIntl(injectIntl(AboutUsPage))

export const pageQuery = graphql`
  query TeamMembersQuery {
    markdownRemark(fileAbsolutePath: { regex: "/team/" }) {
      frontmatter {
        medical {
          title
          name
          role
          image
        }
        development {
          title
          firstName
          lastName
          image
        }
      }
    }
  }
`
