import React, {useEffect} from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import Layout from '../components/layout'

import ContactUs from '../components/contact-us'
import { injectIntl } from 'react-intl'
import { withIntl } from '../i18n'

import {
  LineDivider,
  SectionContent,
  SectionTitle,
  SectionSubtitle,
  grayText,
} from '../shared/styles'

const Outher = styled.div`
  height: 100%;
`

const JoinUsImage = styled.img`
  width: 100%;
`

const JobOpeningHeading = styled(SectionTitle.withComponent('h5'))`
  margin-top: 0;
  margin-bottom: 0;
`

const JobOpeningSubtitle = styled(SectionSubtitle)`
  margin: 2.6rem 0 4rem 0;
  ${grayText};
  text-align: center;
`

const JobOpeningContent = styled(SectionContent)`
  padding: 6rem 1rem 0;
`

const PersonioWrapper = styled.div`
  margin-top: 4rem;
`

const CareerPage = ({ setLocale, pageContext }) => {

  const resizeEvent = (e) => {
    const iframe = document.querySelector('#personio-iframe');
    const eventName = e.data[0];
    const data = e.data[1];
    switch(eventName) {
      case 'setHeight':
        iframe.style.height = data + 'px';
        break;
      default:
      //do nothing
    }
  }

  useEffect(() => {
    window.addEventListener('message', resizeEvent, false); 
    return () => {
      window.removeEventListener('message', resizeEvent )
    }
  }, [])
  
  return ( 
    <Layout setLocale={setLocale} originalPath={pageContext.originalPath}>
      <Outher>
        <JoinUsImage src="https://caspar-assets.s3.eu-central-1.amazonaws.com/office-photos/Join-us.jpg" />
        <JobOpeningContent>
          <JobOpeningHeading center>
            <FormattedMessage id="job-openings.open" />
          </JobOpeningHeading>
          <JobOpeningSubtitle>
            <FormattedMessage id="job-openings.subtitle" />
          </JobOpeningSubtitle>
          <LineDivider />
          <PersonioWrapper>
            <iframe id="personio-iframe" title="personio-iframe" style={{border: "none"}} src="https://goreha.jobs.personio.de/" width="100%"></iframe>
          </PersonioWrapper>
        </JobOpeningContent>
        <ContactUs linksOnly withoutTopSpacing />
      </Outher>
    </Layout>
  )
}

export default withIntl(injectIntl(CareerPage))

