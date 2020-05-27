const path = require('path')

async function createPosts({ graphql, actions }) {
  const template = path.resolve('./src/templates/post.tsx')

  const { errors, data } = await graphql(`
    {
      allContentfulPost {
        edges {
          node {
            id
            title
            meta {
              slug
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
  posts.forEach(post => {
    actions.createPage({
      path: post.node.meta.slug,
      component: template,
      context: {
        id: post.node.id,
        siteTitle: post.node.title,
        slug: post.node.meta.slug,
        collection: 'post'
      }
    })
  })

}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await Promise.all([createPosts({ graphql, actions })]);
}