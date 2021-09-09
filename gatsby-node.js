const path = require('path')
const { languages, defaultLocale, ignorePaths } = require('./src/i18n/config')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path.includes('404')) {
    return Promise.resolve()
  }

  deletePage(page)

  return new Promise(resolve => {
    languages.forEach(({ id: locale }) => {
      const path =
        locale === defaultLocale ? page.path : `/${locale}${page.path}`
      const ignore = ignorePaths.find(
        rule => rule[0] === page.path && rule[1].includes(locale)
      )

      !ignore &&
        createPage({
          ...page,
          path,
          context: {
            ...page.context,
            locale,
            languages,
            originalPath: page.path,
          },
        })
    })

    resolve()
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    {
      posts: allPrismicBlogPost(filter: { lang: { eq: "de-de" } }) {
        edges {
          node {
            uid
            lang
            data {
              topic
            }
          }
        }
      }
      articles: allPrismicPressArticle(filter: { lang: { eq: "de-de" } }) {
        edges {
          node {
            lang
          }
        }
      }
    }
  `)

  const blogTemplate = path.resolve('./src/templates/blog.js')
  const topics = [
    { key: 'article', name: 'artikel' },
    { key: 'interview', name: 'interview' },
    { key: 'survey', name: 'umfrage' },
    { key: 'workout', name: 'workout' },
  ]

  topics.forEach(topic => {
    const edgesWithTopic = data.posts.edges.filter(
      edge => edge.node.data.topic.toLowerCase() === topic.name
    )
    createPage({
      path: `/blog/topic/${topic.key}`,
      component: blogTemplate,
      context: {
        edgesWithTopic,
        languages,
        locale: 'de',
        originalPath: `/blog/topic/${topic.key}`,
      },
    })
  })

  createPage({
    path: `/blog/`,
    component: blogTemplate,
    context: {
      edgesWithTopic: data.posts.edges,
      languages,
      locale: 'de',
      originalPath: `/blog/`,
    },
  })

  const blogPostTemplate = path.resolve('./src/templates/blog-post.js')

  data.posts.edges.forEach(({ node: { uid } }) =>
    createPage({
      path: `/blog/${uid}`,
      component: blogPostTemplate,
      context: {
        uid,
        languages,
        locale: 'de',
        originalPath: `/blog/${uid}`,
      },
    })
  )

  const pressPageTemplate = path.resolve('./src/templates/press-page.js')
  const amountOfArticles = data.articles.edges.length
  const amountOfPages = Math.ceil(amountOfArticles / 6)

  for (let index = 0; index < amountOfPages; index++) {
    const path = index === 0 ? `/press/` : `/press/${index + 1}`
    createPage({
      path,
      component: pressPageTemplate,
      context: {
        skip: index * 6,
        amountOfPages,
        currentPage: index + 1,
        languages,
        locale: 'de',
        originalPath: path,
      },
    })
  }
}
