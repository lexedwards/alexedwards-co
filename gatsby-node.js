const path = require('path')

async function createPosts({ graphql, actions }) {
  const template = path.resolve('./src/templates/post.tsx')

  const { errors, data } = await graphql(`
    {
      allContentfulPost(sort: {fields: meta___entryDate, order: DESC}) {
        edges {
          node {
            id
            title
            meta {
              slug
              entryDate
            }
          }
        }
      }
    }
  `)
  if (errors) {
    throw new Error('this is an error!', errors)
  }
  const posts = data.allContentfulPost.edges
  posts.forEach((post, i) => {
    const prev = posts[i + 1];
    const next = posts[i - 1];
    actions.createPage({
      path: post.node.meta.slug,
      component: template,
      context: {
        id: post.node.id,
        siteTitle: post.node.title,
        slug: post.node.meta.slug,
        collection: 'post',
        prev,
        next,
      }
    })
  })

}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await Promise.all([createPosts({ graphql, actions })]);
}