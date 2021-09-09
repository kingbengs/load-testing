import React from 'react'
import styled from 'styled-components'

import { FormattedMessage } from 'react-intl'

import Circle from '../assets/circle.png'
import Check from '../assets/check.png'

import { SectionTitle, SectionContent, media, PageLink } from '../shared/styles'


const CovidSection = styled.div`
  background: white;
  margin: 0;
  padding: 2.5rem 0;
  `

const CovidContainer = styled.div`
  margin: 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`

const CovidSectionTitle = styled(SectionTitle.withComponent('h1'))`
  padding: 0 2em;
  text-align:center;
`

const CovidSecondTitle = styled(SectionTitle.withComponent('h2'))`
  margin: 0 0 1rem 0;
  font-weight: 600;
`

const CircleText = styled.div`
  padding: 0;
`

const HeaderCircle = styled.div`
  background-image: url(${Circle});
  background-size: contain;
  background-repeat: no-repeat;
  background-position:center;
  width: 100%;
  height: 17em;
  padding: 5em 0 0;
  margin: 0 0 4em ;


  ${media.desktop`
    width: 100%;
    height: 18em;
    padding-top: 4.75em;
    margin: 0 2em 4em ;
  `}
`

const HeaderCircleSection = styled.div`
  margin: 2em 0 0;
  display:flex;
  flex-direction: column;
  text-align: center;

  ${HeaderCircle}:nth-child(1) {
    ${CircleText}:nth-child(1) {
      padding: 1.5em 0 0;
    }
  }

  ${media.desktop`
    flex-direction: row;
  `}
`

const CovidSectionSubtitle = styled(SectionTitle.withComponent('p'))`
  font-size: 22px;
  line-height: 2.2rem;
  margin: 0 0 0.2em 0;
  padding: 0 1em;
`

const CovidSectionSubtitleContent = styled(SectionTitle.withComponent('p'))`
  font-weight: lighter;
  font-size: 19px;
  line-height: 2.2rem;
  font-family: 'Open Sans', sans-serif;
  margin: 0 0 1rem 0;
  padding: 0 1em;

  .caption {
    font-size: 70%;
  }
`

const CovidSectionContent =styled.div`
  padding: 2rem 3em 0;
  display: flex;
  flex-direction: column;

  ${media.desktop`
    padding: 2rem 3rem 0;
  `}
`

const CovidCheck = styled.img`
  height: 1.7rem;
  margin: 0 1rem 0 0;
  padding: 0.4em 0 0
`

const ContentContainer = styled(SectionTitle.withComponent('p'))`
  overflow-wrap: break-word;
  font-weight: lighter;
  font-size: 19px;
  line-height: 32px;
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  ${media.tablet`
    padding: 0;
  `}
`

const CovidSectionContentList = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  

  img {
    max-width: 100%;
  }

  .caption {
    font-size: 70%;
  }
`


const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 5rem);
  padding: 0 2.5rem;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `}
`

const StyledPageLink = styled(PageLink)`
  margin-top: 2rem;
  display: flex-center;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
  padding: 0.8rem 2.8rem;
`

const AllRoundCare = () => {
    return (
        <CovidSection>
          <SectionContent>
            <CovidContainer>
              <CovidSectionTitle>
                <FormattedMessage id='clients.header.title' />
              </CovidSectionTitle>
              <HeaderCircleSection>
                <HeaderCircle>
                  <CircleText>
                  <CovidSectionSubtitle>
                    <FormattedMessage id='clients.header.subtitle1' values={{ br: <br /> }} />
                  </CovidSectionSubtitle>
                  <CovidSectionSubtitleContent>
                    <FormattedMessage id='clients.header.subtitle1.content' values={{ br: <br /> }} />
                  </CovidSectionSubtitleContent>
                  </CircleText>
                </HeaderCircle>
                <HeaderCircle>
                  <CircleText>
                  <CovidSectionSubtitle>
                    <FormattedMessage id='clients.header.subtitle2' values={{ br: <br /> }} />
                  </CovidSectionSubtitle>
                  <CovidSectionSubtitleContent>
                    <FormattedMessage id='clients.header.subtitle2.content' values={{ br: <br /> }} />
                  </CovidSectionSubtitleContent>
                  </CircleText>
                </HeaderCircle>
                <HeaderCircle>
                  <CircleText>
                  <CovidSectionSubtitle>
                    <FormattedMessage id='clients.header.subtitle3' values={{ br: <br /> }} />
                  </CovidSectionSubtitle>
                  <CovidSectionSubtitleContent>
                    <FormattedMessage id='clients.header.subtitle3.content' values={{ br: <br /> }} />
                  </CovidSectionSubtitleContent>
                  </CircleText>
                </HeaderCircle>
              </HeaderCircleSection>
              <CovidSectionContent>
                <CovidSecondTitle>
                  <FormattedMessage id='clients.header.subtitle4' />
                </CovidSecondTitle>
              <CovidSectionContentList>
                <CovidCheck src={Check} />
                <ContentContainer>
                  <FormattedMessage id='clients.header.content1' />
                </ContentContainer>
              </CovidSectionContentList>
              <CovidSectionContentList>
                <CovidCheck src={Check} />
                <ContentContainer>
                  <FormattedMessage id='clients.header.content2' />
                </ContentContainer>
              </CovidSectionContentList>
              <CovidSectionContentList>
              <CovidCheck src={Check} />
                <ContentContainer>
                  <FormattedMessage id='clients.header.content3' />
                </ContentContainer>
              </CovidSectionContentList>
              </CovidSectionContent>
              <ButtonWrapper>
                <StyledPageLink to="/contact/?section=customer">Jetzt Kontakt aufnehmen</StyledPageLink>
              </ButtonWrapper>
          </CovidContainer>
          </SectionContent>
        </CovidSection>
    )
}

export default AllRoundCare