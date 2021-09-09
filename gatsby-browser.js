export const onClientEntry = async () => {
  const testVideo = document.createElement(`video`)
  if (
    typeof testVideo.style.objectFit === `undefined` ||
    typeof testVideo.style.objectPosition === `undefined` ||
    /Edge/.test(navigator.userAgent)
  ) {
    await import(`objectFitPolyfill`)
  }
}
