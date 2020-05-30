import * as React from 'react'
import { graphql } from 'gatsby'
import renderAst from '../components/utils/Rehype'
import { Helmet } from 'react-helmet'
import { PostQuery } from '../../graphql-types'
import MetaTile from '../components/meta'
import { FluidObject } from 'gatsby-image'
import ContentNav, { QNode } from '../components/ContentNav'


export const pageQuery = graphql`
query Post($id: String!) {
  page : contentfulPost(id: {eq: $id}) {
    title
    meta {
      entryDate(fromNow : true)
      desc {
        desc
      }
      slug
      tags
      thumbnail {
        fluid(maxWidth: 960) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    series {
      title
      post {
        title
        meta {
          slug
          entryDate
        }
      }
    }
    body {
      childMarkdownRemark {
        htmlAst
        fields {
          readingTime {
            text
          }
        }
      }
    }
  }
}
`

interface PostTemplate {
  data: PostQuery
  scope: unknown
  pageContext: {
    id?: string
    slug?: string
    collection?: string
    prev?: QNode
    next?: QNode
  }
}

function PostTemplate({ data, scope, pageContext }: PostTemplate) {
  console.log('data:', data, 'scope:', scope, `context:`, pageContext)

  return (
    <>
      <Helmet>
        <title>{data.page?.title} || Alex Edwards</title>
      </Helmet>
      <MetaTile
        entryDate={data.page?.meta?.entryDate}
        tags={data.page?.meta?.tags as string[]}
        fluidImage={data.page?.meta?.thumbnail?.fluid as FluidObject}
        title={data.page?.title as string}
        readingTime={data.page?.body?.childMarkdownRemark?.fields?.readingTime?.text as string}
      />
      {renderAst(data?.page?.body?.childMarkdownRemark?.htmlAst)}
      <ContentNav prefix={''} prev={pageContext?.prev} next={pageContext?.next} />
    </>
  )
}

export default PostTemplate