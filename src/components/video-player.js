import React from 'react'

import styled from 'styled-components'

import { responsiveVideoSources } from '../shared/utils'

const Video = styled.video`
  width: 100%;
  ${props =>
    props.shadow && 'box-shadow: -1rem 1rem 0px 0px rgba(128, 128, 128, 0.2);'};
`

export default ({ autoPlay, poster, shadow, src, responsive }) => (
    <Video
      poster={poster}
      shadow={shadow}
      autoPlay={autoPlay}
      controls
    >
      {responsive ? (
        responsiveVideoSources(src)
      ) : (
        <source src={src} type="video/mp4" />
      )}
    </Video>
)
