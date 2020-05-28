import * as React from 'react'
import { graphql } from 'gatsby'
import renderAst from '../components/utils/Rehype'
import { Helmet } from 'react-helmet'
import { PostQuery } from '../../graphql-types'
import { H1 } from '../components/styles/headings'


export const pageQuery = graphql`
query Post($id: String!) {
  page : contentfulPost(id: {eq: $id}) {
    title
    body {
      childMarkdownRemark {
        htmlAst
      }
    }
  }
}
`

interface PostTemplate {
  data: PostQuery
  scope: unknown
  pageContext: unknown
}

function PostTemplate({ data, scope, pageContext }: PostTemplate) {
  console.log('data:', data, 'scope:', scope, `context:`, pageContext)
  return (
    <>
      <Helmet>
        <title>{data.page?.title} || Alex Edwards</title>
      </Helmet>
      <H1>{data.page?.title}</H1>
      {renderAst(data?.page?.body?.childMarkdownRemark?.htmlAst)}
    </>
  )
}

export default PostTemplate