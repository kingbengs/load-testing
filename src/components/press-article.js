import React from 'react'
import styled from 'styled-components'
import EmbeddedVideoPlayer from './embedded-video-player'
import {
  media,
  RegularLinkButton,
  grayText,
  LineDivider,
  SectionTitle,
} from '../shared/styles'

const PressArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-bottom: 3em;
  padding: 0 3em;
  ${media.desktop`
    padding: 0;
  `}
`

const PressImageWrapper = styled.div`
  width: 100%;

  ${media.tablet`
  width: 70%;
  `}
`

const PressImage = styled.img`
  width: 100%;
  height: auto;
`

const PressTitle = styled(SectionTitle)`
  margin-top: 1em;
  font-weight: unset;
  ${media.tablet`
    width: 70%;
  `}
`

const PressDate = styled.p`
  ${grayText}
  font-weight: 600;
  margin-bottom: 0;
  ${media.tablet`
    width: 70%;
  `}
`

const PressText = styled.p`
  ${grayText}
  line-height: 26px;
  font-size: 15px;
  font-weight: lighter;
  margin-bottom: 0;
  ${media.tablet`
    width: 70%;
  `}
`

const PressArticleDivider = styled(LineDivider)`
  height: 1px;
  margin-top: 3em;
  ${media.tablet`
    width: 70%;
  `}
`

const PressButton = styled(RegularLinkButton)`
  margin-top: 3em;
`

const StyledEmbeddedVideoPlayer = styled(EmbeddedVideoPlayer)`
  text-align: center;
`

const PressArticle = ({
  imageUrl,
  title,
  date,
  text,
  linkText,
  link,
  video,
}) => (
  <PressArticleWrapper>
    <PressImageWrapper>
      <PressImage src={imageUrl} />
    </PressImageWrapper>
    <PressTitle>{title}</PressTitle>
    <PressDate>{date}</PressDate>
    {video ? (
      <StyledEmbeddedVideoPlayer src={link}>
        <PressButton>{linkText}</PressButton>
      </StyledEmbeddedVideoPlayer>
    ) : (
      <>
        {text && <PressText>{text}</PressText>}
        <PressButton href={link} target="_blank" rel="noopener noreferrer">
          {linkText}
        </PressButton>
      </>
    )}
    <PressArticleDivider />
  </PressArticleWrapper>
)

export default PressArticle
