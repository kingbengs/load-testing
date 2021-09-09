import styled, { css } from 'styled-components'

import { Link } from '../i18n'

// Css
export const smallText = css`
  font-size: 0.8rem;
  font-weight: lighter;
  color: #808080;
`

export const grayText = css`
  color: #4f4f4f;
`

export const markdownImportStylesheet = css`
  ${grayText};
  line-height: 1.8;
  padding: 4rem 1rem;

  h1 {
    font-size: 2.2rem;
    text-align: center;
    line-height: 1.25;
    margin: 2.5rem 0;
  }

  h2 {
    font-size: 1.46rem;
  }

  a {
    word-wrap: break-word;
    color: #1ed9bf;
  }
`

// Components
const sizes = {
  desktop: 64,
  tablet: 45,
  phone: 20,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  const nextLabel = acc[label + 1]
  acc.landscape = (...args) => css`
    @media (orientation: landscape) and (max-width: ${sizes.desktop}rem) {
      ${css(...args)};
    }
  `

  acc.responsiveImage = (extraSmall, small, medium, large) => css`
    @media (max-width: 30rem) {
      background-image: url(${extraSmall});
    }
    @media (min-width: 30rem) and (max-width: 40rem) {
      background-image: url(${small});
    }
    @media (min-width: 40rem) and (max-width: 62rem) {
      background-image: url(${medium});
    }
    @media (min-width: 62rem) {
      background-image: url(${large});
    }
  `

  if (nextLabel) {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label]}rem) and (max-width: ${sizes[
          label + 1
        ]}rem) {
        ${css(...args)};
      }
    `
  } else {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label]}rem) {
        ${css(...args)};
      }
    `
  }

  return acc
}, {})

export const SectionTitle = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  ${props => props.center && 'text-align: center;'}
  ${grayText};
`

export const SectionSubtitle = styled.div`
  font-size: 1.46rem;
  font-weight: lighter;
  ${grayText};
  ${props => props.center && 'text-align: center;'} ${props =>
    props.bold && 'font-weight: bold;'};
`

export const LinkButton = styled.a`
  color: white;
  background: linear-gradient(to left, #07ACAB, #50D0C6);
  text-decoration: none;
  cursor: pointer;
`

const buttonStyles = css`
  font-size: 1rem;
  line-height: 2.6rem;
  padding: 0 2rem;
  border-radius: 1.6rem;
  display: inline-block;
`

export const RegularLinkButton = styled(LinkButton)`
  ${buttonStyles};
`

const largeButtonStyle = css`
  text-align: center;
  font-size: 1.46rem;
  line-height: 3.666rem;
  padding: 0 3rem;
  border-radius: 3rem;
  display: inline-block;
  cursor: pointer;
  min-width: 9rem;
`

export const LargeLinkButton = styled(LinkButton)`
  ${largeButtonStyle};
`

export const LargeButton = styled.button`
  ${largeButtonStyle};
  outline: none;
  border: none;
  color: ${props => (props.secondary ? '#4f4f4f' : 'white')};
  background: ${props => (props.secondary ? '#d9e6e4' : 'linear-gradient(to left, #07ACAB, #50D0C6)')};
`

export const SectionContent = styled.div`
  max-width: 94rem;
  margin: 0 auto;
`

export const SmallSectionContent = styled.div`
  max-width: 36rem;
  margin: 0 auto;
  ${markdownImportStylesheet};
`

export const LineDivider = styled.div`
  height: 0.2rem;
  background-color: #07acab;
`

export const PageLink = styled(Link)`
  ${largeButtonStyle} text-decoration: none;
  color: ${props => (props.secondary ? '#4f4f4f' : 'white')};
  background: ${props => (props.secondary ? '#d9e6e4' : 'linear-gradient(to left, #07ACAB, #50D0C6)')};
`

export const VideoSectionThumbnail = styled.img`
  width: 100%;
  vertical-align: bottom;
`

export const VideoSectionWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const PlayButton = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 6rem;
  transform: translate(-50%, -50%);
  cursor: pointer;
`
