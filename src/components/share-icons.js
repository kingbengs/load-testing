import React from 'react'
import styled from 'styled-components'

import { FormattedMessage } from 'react-intl'

import shareIcon from '../assets/share.svg'
import facebookIcon from '../assets/facebook.svg'
import twitterIcon from '../assets/Twitter.svg'
import linkedinIcon from '../assets/linkedin.svg'

const ShareIconsWrapper = styled.div`
  display: flex;
  align-items: center
`

const Icon = styled.img`
  height: 1.4rem;
  margin-right: 0.5rem;
  flex: 0 0 auto;
`

const ShareIcon = styled.img`
  height: 1.4rem;
  margin-left: 0.5rem;
  flex: 0 0 auto;
`

const SocialMediaLink = styled.a`
  display: flex;
  align-items: center;
`

const ShareIcons = ({ className, link, text }) => (
  <ShareIconsWrapper className={className}>
    <Icon src={shareIcon} />
    <FormattedMessage id="blog.share" />
    <SocialMediaLink
      href={`https://www.facebook.com/sharer/sharer.php?u=https://caspar-health.com${link}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ShareIcon src={facebookIcon} />
    </SocialMediaLink>
    <SocialMediaLink
      href={`https://www.twitter.com/share?text=${text}&url=https://caspar-health.com${link}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ShareIcon src={twitterIcon} />
    </SocialMediaLink>
    <SocialMediaLink
      href={`https://www.linkedin.com/shareArticle?mini=true&url=https://caspar-health.com${link}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ShareIcon src={linkedinIcon} />
    </SocialMediaLink>
  </ShareIconsWrapper>
)

export default ShareIcons
