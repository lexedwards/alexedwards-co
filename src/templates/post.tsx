import * as React from 'react'
import { graphql } from 'gatsby'
import renderAst from '../components/utils/Rehype'
import { Helmet } from 'react-helmet'
import { PostQuery } from '../../graphql-types'
import MetaTile from '../components/meta'
import { FluidObject } from 'gatsby-image'
import ContentNav, { QNode } from '../components/ContentNav'
import SeriesBlock, { PostArray } from '../components/SeriesBlock'


export const pageQuery = graphql`
query Post($id: String!) {
  page : contentfulPost(id: {eq: $id}) {
    title
    meta {
      id
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
          id
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

function PostTemplate({ data, pageContext }: PostTemplate) {

  if (!data.page) { return <div>Opps! There should be a page here!</div> }

  const displayTitle = data.page.series ? `${data.page.title} | ${data.page.series.title}` : data.page.title

  return (
    <>
      <Helmet>
        <title>{data.page?.title} || Alex Edwards</title>
      </Helmet>
      <MetaTile
        entryDate={data.page?.meta?.entryDate}
        tags={data.page?.meta?.tags as string[]}
        fluidImage={data.page?.meta?.thumbnail?.fluid as FluidObject}
        title={displayTitle as string}
        readingTime={data.page?.body?.childMarkdownRemark?.fields?.readingTime?.text as string}
      />
      {data.page?.series && (
        <SeriesBlock
          postId={data.page?.meta?.id as string}
          series={data.page.series as { title: string; post: PostArray[] }}
        />
      )}
      {renderAst(data?.page?.body?.childMarkdownRemark?.htmlAst)}
      <ContentNav prefix={''} prev={pageContext?.prev} next={pageContext?.next} />
    </>
  )
}

export default PostTemplate