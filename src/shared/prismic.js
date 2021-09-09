export const linkResolver = doc => {
  if (doc.type === 'blog_post') {
    return `/blog/${doc.uid}`
  }
  return '/'
}

export const htmlSerializer = _type => {
  // Nothing custom yet
  return null
}
