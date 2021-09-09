import React from 'react'
import styled from 'styled-components'

import { FormattedMessage } from 'react-intl'

import {
    media,
    SectionTitle,
    SectionContent,
    grayText
  } from '../shared/styles'

const WinterWrapper = styled.div`
  background-color: white;
  color: #4f4f4f;
  padding: 0 0 8em;
`

const WinterContentSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${media.desktop`
        flex-direction: row;
  `}
`

const WinterContent = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: left;
  margin: 1.5em;
`

const WinterNumberSection = styled.div`
    border-bottom: 1px solid #4f4f4f;
    font-size: 2.2rem;
    padding: 0 0 0.2em;
    margin: 0 0 0.5em;
`

const WinterSubtitle = styled(SectionTitle.withComponent('h2'))`
    margin: 0 0 2rem;
    font-size: 2rem;
`

const WinterText = styled.div`
    font-size: 16px;
    line-height: 26px;
    ${grayText};
    font-weight: lighter;
`

const WinterSection = () => (
    <WinterWrapper>
        <SectionContent>
            <WinterContentSection>
                <WinterContent>
                    <WinterNumberSection>
                        <FormattedMessage id={1} />
                    </WinterNumberSection>
                    <WinterSubtitle>
                        <FormattedMessage id="index.winter.subtitle1" values={{ br: <br /> }} />
                    </WinterSubtitle>
                    <WinterText>
                        <FormattedMessage id="index.winter.content1" />
                    </WinterText>
                </WinterContent>
                <WinterContent>
                    <WinterNumberSection>
                        <FormattedMessage id={2} />
                    </WinterNumberSection>
                    <WinterSubtitle>
                        <FormattedMessage id="index.winter.subtitle2" values={{ br: <br /> }} />
                    </WinterSubtitle>
                    <WinterText>
                        <FormattedMessage id="index.winter.content2" />
                    </WinterText>
                </WinterContent>
                <WinterContent>
                    <WinterNumberSection>
                        <FormattedMessage id={3} />
                    </WinterNumberSection>
                    <WinterSubtitle>
                        <FormattedMessage id="index.winter.subtitle3" values={{ br: <br /> }} />
                    </WinterSubtitle>
                    <WinterText>
                        <FormattedMessage id="index.winter.content3" />
                    </WinterText>
                </WinterContent>
            </WinterContentSection>
        </SectionContent>
    </WinterWrapper>
)

export default WinterSection
