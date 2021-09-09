import React from 'react'
import styled from 'styled-components'

import { FormattedMessage, injectIntl } from 'react-intl'

import {
  media,
  SectionTitle,
  SectionSubtitle,
  SectionContent,
} from '../shared/styles'

const FeaturesSection = styled.div`
  background-color: #07ACAB;
  text-align: center;
  padding: 10rem 1rem;
`

const FeatureSectionTitle = styled(SectionTitle)`
  color: white;
`

const Features = styled.div`
  width: 100%;
  justify-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 5rem;
`

const FeatureWrapper = styled.div`
  padding: 1rem;
  ${media.tablet`
    width: calc(50% - 2rem);
  `}
  ${media.desktop`
    width: calc(25% - 2rem);
  `}
`

const FeatureImage = styled.img`
  width: 20rem;
  ${media.tablet`
    width: 14rem;
  `};
`

const FeatureTitle = styled(SectionSubtitle)`
  margin-bottom: 1rem;
  color: white;
  font-weight: bold;
`

const FeatureSubtitle = styled(SectionSubtitle)`
  font-size: 16px;
  line-height: 26px;
  color: white;
`

const Feature = ({ src, titleId, subtitleId }) => (
  <FeatureWrapper>
    <FeatureImage src={src} />
    <FeatureTitle as="h3">
      <FormattedMessage id={titleId} />
    </FeatureTitle>
    <FeatureSubtitle>
      <FormattedMessage id={subtitleId} />
    </FeatureSubtitle>
  </FeatureWrapper>
)

const PillarsSection = ({ pageId }) => (
  <FeaturesSection>
    <SectionContent>
      <FeatureSectionTitle as="h2">
        <FormattedMessage id={pageId + '.pillars.title'} />
      </FeatureSectionTitle>
      <Features>
        <Feature
          src="https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/Trainings-icon.png"
          titleId={pageId + '.pillars.item1.title'}
          subtitleId={pageId + '.pillars.item1.subtitle'}
        />
        <Feature
          src="https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/Betreuung-icon.png"
          titleId={pageId + '.pillars.item2.title'}
          subtitleId={pageId + '.pillars.item2.subtitle'}
        />
        <Feature
          src="https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/Wohlbefinden-icon.png"
          titleId={pageId + '.pillars.item3.title'}
          subtitleId={pageId + '.pillars.item3.subtitle'}
        />
        <Feature
          src="https://s3.eu-central-1.amazonaws.com/caspar-assets/patients/Wissen-icon.png"
          titleId={pageId + '.pillars.item4.title'}
          subtitleId={pageId + '.pillars.item4.subtitle'}
        />
      </Features>
    </SectionContent>
  </FeaturesSection>
)

export default injectIntl(PillarsSection)
