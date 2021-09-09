import React, { Component } from 'react'

import styled from 'styled-components'

import closeIcon from '../assets/close.svg'

import VideoPlayer from './video-player'

const Outer = styled.div`
  height: 100%;
  width: 100%;
`

const VideoPane = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`

const VideoWrapper = styled.div`
  position: fixed;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const CloseVideoControl = styled.img`
  position: fixed;
  right: 1rem;
  top: 1rem;
  height: 4rem;
  width: 4rem;
  cursor: pointer;
`

export default class EmbeddedVideoPlayer extends Component {
  state = {
    open: false,
  }

  close() {
    this.setState({ open: false })
  }

  open() {
    this.setState({ open: true })
  }

  render() {
    const { open } = this.state
    const { className, responsive, src, children } = this.props
    return (
      <Outer className={className}>
        {open && (
          <VideoPane>
            <VideoWrapper>
              <VideoPlayer
                autoPlay
                fullScreen
                responsive={responsive}
                src={src}
              />
            </VideoWrapper>
            <CloseVideoControl
              onClick={this.close.bind(this)}
              src={closeIcon}
            />
          </VideoPane>
        )}
        <div onClick={this.open.bind(this)}>{children}</div>
      </Outer>
    )
  }
}
