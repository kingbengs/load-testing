import React from 'react'

const getResolution = src => {
  let width = typeof window !== 'undefined' && window.innerWidth
  if (width < 480) {
    return src.replace('.mp4', `-480w.mp4`)
  } else if (width < 640) {
    return src.replace('.mp4', `-640w.mp4`)
  } else if (width < 1024) {
    return src.replace('.mp4', `-1024w.mp4`)
  } else {
    return src
  }
}

export const responsiveVideoSources = src => {
  return <source src={getResolution(src)} type="video/mp4" />
}
