import React from 'react'
import styled from 'styled-components'

import { grayText, media } from '../shared/styles'

const ClientSpeechBubble = styled.div`
  width: 70%;
  position: relative;
  padding: 2rem;
  background: #ffffff;
  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-color: transparent #ffffff;
    display: block;
    width: 0;
    z-index: 1;
    margin-top: -11px;
    top: 3rem;
    border-width: 11px 0 11px 16px;
    right: -16px;
  }
`

const ClientBubbleImageWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
  flex-direction: row;
`

const ClientImage = styled.img`
  width: 20%;
  height: 20%;
  margin-left: 2rem;
`

const ClientReferenceWrapper = styled.div`
  padding: 0 1rem;
  ${ClientBubbleImageWrapper}:nth-child(even) {
    flex-direction: row-reverse;
    ${ClientSpeechBubble}:after {
      border-width: 11px 16px 11px 0;
      right: 0;
      left: -16px;
    }
    ${ClientImage} {
      margin-left: 0;
      margin-right: 2rem;
    }
  }
`

const ClientName = styled.p`
  ${grayText}
  font-weight: bold;
  margin: 0;
  ${media.tablet`
    font-size: 1.5rem;
  `}
`

const ClientJob = styled.p`
  ${grayText}
  font-weight: lighter;
  margin: 0;
  ${media.tablet`
    font-size: 1.5rem;
  `}
`

const ClientQuote = styled.p`
  ${grayText}
  font-weight: regular;
  margin-bottom: 0;
  ${media.tablet`
    font-size: 1.5rem;
  `}
`

const ClientBubbles = ({ posts }) => {
  return (
    <ClientReferenceWrapper>
      {posts.map(post => (
        <ClientBubbleImageWrapper key={post.title}>
          <ClientSpeechBubble>
            <ClientName>{post.title}</ClientName>
            <ClientJob>{post.subtitle}</ClientJob>
            <ClientQuote>"{post.content}"</ClientQuote>
          </ClientSpeechBubble>
          <ClientImage src={post.image} />
        </ClientBubbleImageWrapper>
      ))}
    </ClientReferenceWrapper>
  )
}

export default ClientBubbles
