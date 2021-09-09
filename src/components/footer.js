import React from 'react'
import styled from 'styled-components'
import { injectIntl, FormattedMessage } from 'react-intl'

import { Row } from '../pages/index'

import casparLogoGray from '../assets/caspar-logo-gray.svg'
import investLogo from '../assets/footer/invest.png'
import microsoftLogo from '../assets/footer/microsoft.png'
import euLogo from '../assets/footer/eu-logo.png'
import digimeda from '../assets/footer/digimeda.png'

import { smallText, media } from '../shared/styles'

const Outer = styled.div`
  ${smallText};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e2e3e2;
  text-align: center;
  margin-top: auto;
`

const Logo = styled.img`
  height: 2rem;
  margin-top: 3.75rem;
  margin-bottom: 1.58rem;
`

const FooterText = styled.div`
  margin-bottom: 1.58rem;
`

const FooterLogos = styled.div`
  display: flex;
  width: 20rem;
  max-width: 90%;
  justify-content: center;
  margin-bottom: 2rem;
`

const FooterLogo = styled.img`
  margin-left: 8px;
  margin-right: 8px;
  height: 3.5rem;
`

const FooterEuNote = styled.div`
  box-sizing: border-box;
  margin-top: 2rem;
  padding: 0 2rem;
  max-width: 41.5rem;
  width: 100%;
  text-align: left;
`

const FooterEuNoteInner = styled.div`
  display: flex;
  min-height: 6rem;
  padding-top: 1rem;
`

const EuLogo = styled.img`
  display: flex;
  flex: 0 0 auto;
  width: 40%;
  height: 100%;
  margin-right: 1rem;
  ${media.desktop`
    margin-right: 2rem;
    width: 20%;
  `}
`

const SocialMediaButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.58rem;
  margin-bottom: 2rem;
`

const SocialMediaButton = styled.a`
  width: 3.5rem;
`

const SocialMediaIcon = styled.img`
  height: 2.5rem;
`

const PartnerLogo = styled.img`
  max-height: 2.1rem;
  margin-right: ${({ noMarginRight }) => (noMarginRight ? 0 : '1.0rem')};
  ${media.desktop`
    max-height: 2.5rem;
    margin-right: ${({ noMarginRight }) => (noMarginRight ? 0 : '1.5rem')};
  `}
`

const Footer = ({ intl }) => (
  <Outer>
    <Logo src={casparLogoGray} />
    <FooterText>
      <FormattedMessage id="footer.location" />
    </FooterText>
    <FooterText>
      <FormattedMessage id="footer.name" />
    </FooterText>
    <FooterText>
      <FormattedMessage id="footer.partner" />
    </FooterText>
    <Row>
      <PartnerLogo src="https://caspar-assets.s3.eu-central-1.amazonaws.com/footer/01-footer-logo-Renteversicherung.png" />
      <PartnerLogo src="https://caspar-assets.s3.eu-central-1.amazonaws.com/footer/02-footer-logo-axa.png" />
      <PartnerLogo src="https://caspar-assets.s3.eu-central-1.amazonaws.com/footer/03-footer-logo-vbg.png" />
      <PartnerLogo
        noMarginRight
        src="https://caspar-assets.s3.eu-central-1.amazonaws.com/footer/04-footer-logo-kbs.png"
      />
    </Row>
    {intl.locale === 'de' && (
      <FooterEuNote>
        Dieses Projekt wird kofinanziert durch den Europäischen Fonds für
        regionale Entwicklung [EFRE].
        <FooterEuNoteInner>
          <EuLogo src={euLogo} />
          <br />
          Unser innovativer Ansatz wird vom Europäischen Fonds für regionale
          Entwicklung (EFRE) unterstützt. Ziel des Projektes ist es eine
          digitale Rehabilitationsplattform zu entwickeln, mit der die sog.
          <br />
          "Patient Compliance" (Therapietreue) gemessen und optimiert werden
          kann.
        </FooterEuNoteInner>
      </FooterEuNote>
    )}
    <SocialMediaButtons>
      <SocialMediaButton
        href="https://www.facebook.com/casparhealth"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialMediaIcon src="https://s3.eu-central-1.amazonaws.com/caspar-assets/logos/facebook-icon.png" />
      </SocialMediaButton>
      <SocialMediaButton
        href="https://www.linkedin.com/company/caspar-health"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialMediaIcon src="https://s3.eu-central-1.amazonaws.com/caspar-assets/logos/linkedin-icon.png" />
      </SocialMediaButton>
      <SocialMediaButton
        href="https://www.xing.com/companies/caspar-health"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialMediaIcon src="https://s3.eu-central-1.amazonaws.com/caspar-assets/logos/xing-icon.png" />
      </SocialMediaButton>
    </SocialMediaButtons>
    <FooterLogos>
      <FooterLogo
        src={microsoftLogo}
        alt={intl.formatMessage({ id: 'footer.logos.microsoft' })}
      />
      <FooterLogo
        src={investLogo}
        alt={intl.formatMessage({ id: 'footer.logos.invest' })}
      />
      <FooterLogo 
        src={digimeda}
        alt={intl.formatMessage({ id: 'footer.logos.digimeda'})}
      />
      <a href='https://ips.datenschutz-cert.de/goreha' target='blank'> 
      <FooterLogo
      
      src='https://caspar-assets.s3.eu-central-1.amazonaws.com/logos/dsc_ips.svg'
      alt={intl.formatMessage({ id: 'footer.logos.datasecurity'})}
    />
    </a>
    </FooterLogos>
    
    
  </Outer>
)

export default injectIntl(Footer)
