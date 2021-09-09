import React, { Component } from 'react'

import styled from 'styled-components'

import arrowForward from '../assets/arrow-forward.png'
import arrowBack from '../assets/arrow-back.png'
import { media } from '../shared/styles'

const Outher = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  justify-content: center;
  ${media.tablet`
    height: auto;
    width: 100%;
  `}
`

const Arrow = styled.img`
  max-height: 3.5rem;
  align-self: center;
  justify-self: center;
  cursor: pointer;
  position: absolute;
  top: calc(50% - 1.75rem);
`

const ArrowNext = styled(Arrow)`
  right: 3rem;
`

const ArrowBack = styled(Arrow)`
  left: 3rem;
`

const Image = styled.img`
  height: 100%;
  width: auto;
  ${media.tablet`
    width: 100%;
  `}
`

const SliderNavigationDot = styled.div`
  height: 0.8rem;
  width: 0.8rem;
  margin: 0 0.5rem;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
`

const SliderNavigation = styled.div`
  width: 100%;
  position: absolute;
  bottom: 2rem;
  justify-content: center;
  align-items: center;
  display: flex;
`

export default class PictureSlider extends Component {
  state = {
    selected: 0,
    interval: null,
  }

  back() {
    this.setState(prev => ({ selected: prev.selected - 1 }))
    this.startInterval()
  }

  next() {
    this.setState(prev => ({
      selected:
        prev.selected === this.props.images.length - 1 ? 0 : prev.selected + 1,
    }))
    this.startInterval()
  }

  startInterval() {
    clearInterval(this.state.interval)
    const interval = setInterval(() => this.next(), 4000)
    this.setState({ interval })
  }

  select(n) {
    this.setState({ selected: n })
    this.startInterval()
  }

  componentDidMount = () => {
    this.startInterval()
  }

  componentWillUnmount = () => {
    clearInterval(this.state.interval)
  }

  render() {
    const { images } = this.props
    const { selected } = this.state
    const selectedImage = images[selected]
    return (
      <Outher>
        {selected !== 0 && this.props.arrows && (
          <ArrowBack onClick={this.back.bind(this)} src={arrowBack} />
        )}
        {selected !== images.length - 1 && this.props.arrows && (
          <ArrowNext onClick={this.next.bind(this)} src={arrowForward} />
        )}
        <Image src={selectedImage} />
        <SliderNavigation>
          {images.map((e, i) => (
            <SliderNavigationDot
              color={i === selected ? '#07acab' : '#f4f4f4'}
              key={i}
              onClick={this.select.bind(this, i)}
            />
          ))}
        </SliderNavigation>
      </Outher>
    )
  }
}
