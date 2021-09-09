import React from 'react'
import styled from 'styled-components'
import { Link } from '../i18n'

import { FormattedMessage, injectIntl } from 'react-intl'

import {
  SectionTitle,
  SectionContent,
  PageLink,
  smallText,
  SectionSubtitle
} from '../shared/styles'

const ContactSection = styled.div`
  text-align: center;
  box-sizing: border-box;
  ${props => props.footerColor ? 'background-color: #e2e3e2;' : 'background-color: #07acab;'}
  ${props => props.withoutTopSpacing ? 'padding: 1.2rem 0;' : 'padding: 10rem 0 1.2rem;'}
`

const ContactSectionLink = styled.div`
  margin-top: 5rem;
`

const TitleContainer = styled.div`
  margin-top: 2.5rem;
  padding: 0 1rem;

  ${SectionTitle} {
    color: white;
  }
  ${SectionSubtitle} {
    color: white;
  }
`

const ContentSectionFooterLink = styled(Link)`
  line-height: 1.8rem;
  ${smallText};
  text-decoration: none;
  color: white;
`

const ContentSectionFooterLinkDivider = styled.div`
  margin: 0.5rem 1rem;
  height: 0.8rem;
  width: 1px;
  background-color: white;
`

const ContactSectionFooter = styled.div`
  ${props => !props.withoutTopSpacing && 'margin-top: 10rem;'}
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${props => props.footerColor && `
    ${ContentSectionFooterLink} {
      color: #808080;
    }
    ${ContentSectionFooterLinkDivider} {
      background-color: #808080;
    }
  `}

`

const StyledPageLink = styled(PageLink)`
  background: white;
  color: #07acab;
`

const ContactUs = ({ intl, linksOnly, withoutTopSpacing }) => (
  <ContactSection withoutTopSpacing={withoutTopSpacing} footerColor={linksOnly}>
    <SectionContent>
      {!linksOnly && (
        <div>
          <TitleContainer>
            <SectionTitle as="h2">
              <FormattedMessage id="contact-us.title.line1" />
            </SectionTitle>
            <SectionSubtitle>
              <FormattedMessage id="contact-us.title.line2" />
            </SectionSubtitle>
          </TitleContainer>
          <ContactSectionLink>
            <StyledPageLink to="/contact/">
              <FormattedMessage id="index.heading.demo" />
            </StyledPageLink>
          </ContactSectionLink>
        </div>
      )}
      <ContactSectionFooter withoutTopSpacing={withoutTopSpacing} footerColor={linksOnly}>
        {intl.locale === 'de' && 
          <>
            <ContentSectionFooterLink to="/agbs/">
              <FormattedMessage id="contact-us.agbs" />
            </ContentSectionFooterLink>
            <ContentSectionFooterLinkDivider />
            <ContentSectionFooterLink to="/datenschutz/">
              <FormattedMessage id="contact-us.datenschutz" />
            </ContentSectionFooterLink>
            <ContentSectionFooterLinkDivider />
          </>
        }
        <ContentSectionFooterLink to="/career/">
          <FormattedMessage id="contact-us.about-us" />
        </ContentSectionFooterLink>
        <ContentSectionFooterLinkDivider />
        <ContentSectionFooterLink to="/impressum/">
          <FormattedMessage id="contact-us.impressum" />
        </ContentSectionFooterLink>
        <ContentSectionFooterLinkDivider />
        <ContentSectionFooterLink to="/contact/">
          <FormattedMessage id="contact-us.contact" />
        </ContentSectionFooterLink>
      </ContactSectionFooter>
    </SectionContent>
  </ContactSection>
)

export default injectIntl(ContactUs)
